import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";

if (!admin.apps.length) {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!raw) {
    console.error("Missing FIREBASE_SERVICE_ACCOUNT env var");
  } else {
    try {
      const serviceAccount = JSON.parse(raw);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      console.log("Firebase Admin initialized");
    } catch (e) {
      console.error("Firebase Admin initialization failed:", e);
    }
  }
}

const db = admin.firestore();

function validateBody(body: any): string | null {
  if (!body) return "Invalid request body.";
  const { message, anonymous } = body;
  if (typeof message !== "string" || message.trim().length < 3)
    return "Message must be at least 3 characters.";
  if (message.length > 2000) return "Message is too long.";
  if (typeof anonymous !== "boolean") return "Bad payload.";
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const err = validateBody(body);

    if (err) {
      return NextResponse.json({ error: err }, { status: 400 });
    }

    const doc = {
      message: String(body.message).slice(0, 2000),
      name: body.anonymous
        ? null
        : body.name
        ? String(body.name).slice(0, 100)
        : null,
      anonymous: !!body.anonymous,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection("anonymousMessages").add(doc);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (e) {
    console.error("Message API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
} 