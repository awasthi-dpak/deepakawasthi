// app/components/ContactForm.tsx
"use client";
import React, { useState } from "react";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

type FormState = {
  name?: string;
  message: string;
  anonymous: boolean;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", message: "", anonymous: true });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.message.trim()) {
      setStatus({ ok: false, msg: "Please write a short message before sending." });
      return;
    }
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.anonymous ? null : form.name || null,
          message: form.message,
          anonymous: !!form.anonymous,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setForm({ name: "", message: "", anonymous: true });
        setStatus({ ok: true, msg: "Message sent — thanks!" });
      } else {
        setStatus({ ok: false, msg: data?.error || "Failed to send message" });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Network error. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Contact Me
        </h2>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-600/6 to-pink-600/6 border border-purple-500/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col gap-4"
        >
          <div className="flex flex-col md:flex-row gap-3">
            <label className="flex-1">
              <div className="text-sm text-gray-300 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-purple-300" /> Name (optional)
              </div>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                placeholder="Your name (or leave empty)"
                disabled={form.anonymous}
                className="w-full px-3 py-2 rounded-lg bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={form.anonymous}
                onChange={(e) => setForm((s) => ({ ...s, anonymous: e.target.checked }))}
                className="w-4 h-4 rounded bg-black/40 accent-purple-500"
                title="Send anonymously"
              />
              <span className="text-sm text-gray-300">Send anonymously</span>
            </label>
          </div>

          <label>
            <div className="text-sm text-gray-300 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-pink-300" /> Message
            </div>
            <textarea
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              placeholder="Write your message..."
              rows={5}
              className="w-full px-3 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
            />
          </label>

          <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              <Mail className="inline w-4 h-4 mr-2 text-blue-300" /> Messages are delivered anonymously.
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:scale-105 transition-transform disabled:opacity-60"
              >
                {loading ? "Sending..." : (
                  <>
                    <Send className="w-4 h-4" /> <span>Send</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {status && (
            <div className={`mt-2 text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>
              {status.msg}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
