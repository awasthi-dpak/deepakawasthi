import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";

// Initialize firebase-admin once (serverless safe)
if (!admin.apps?.length) {
  const svc = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!svc) {
    console.error("Missing FIREBASE_SERVICE_ACCOUNT env var");
  } else {
    // If user stored base64-encoded JSON, decode:
    let serviceAccount;
    try {
      serviceAccount = JSON.parse(svc);
    } catch (err) {
      // maybe it was base64 encoded
      try {
        serviceAccount = JSON.parse(Buffer.from(svc, "base64").toString("utf8"));
      } catch (e) {
        console.error("FIREBASE_SERVICE_ACCOUNT parse error", e);
        serviceAccount = null;
      }
    }
    if (serviceAccount) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        // optionally set databaseURL if needed
      });
    }
  }
}

const db = admin.firestore();

// Basic validation + minimal spam protection (honeypot + message length).
async function validateBody(body: any) {
  if (!body) return "Invalid request body.";
  const { message, anonymous } = body;
  if (typeof message !== "string" || message.trim().length < 3) {
    return "Message must be at least 3 characters.";
  }
  if (message.length > 2000) return "Message is too long.";
  if (typeof anonymous !== "boolean") return "Bad payload.";
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const err = await validateBody(body);
    if (err) return NextResponse.json({ error: err }, { status: 400 });

    // HONEYPOT (optional): if request includes a field 'url' or 'website' treat as bot
    if (body.url || body.website) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // Prepare data
    const doc = {
      message: String(body.message).slice(0, 2000),
      name: body.anonymous ? null : (body.name ? String(body.name).slice(0, 100) : null),
      anonymous: !!body.anonymous,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      // (Do not include IP in doc if you want stronger anonymity)
    };

    // Optionally: moderate content server-side (bad-words filtering) before save.
    // Save to Firestore
    await db.collection("anonymousMessages").add(doc);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e: any) {
    console.error("Message API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
