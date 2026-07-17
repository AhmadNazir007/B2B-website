"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });

      const data = await res.json();
      if (res.ok && data?.success) {
        setStatus("success");
        setStatusMessage(data.message || "Thanks — we will contact you shortly.");
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusMessage(data?.message || "Submission failed. Try again.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Submission failed. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
          placeholder="Name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
          placeholder="Work email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
        placeholder="Company"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <textarea
        className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
        placeholder="Tell us about your goals"
        name="message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex items-center gap-4">
        <button
          className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending…" : "Submit inquiry"}
        </button>
        {status === "success" && (
          <div className="text-sm text-cyan-200" aria-live="polite">{statusMessage}</div>
        )}
        {status === "error" && (
          <div className="text-sm text-rose-400" aria-live="polite">{statusMessage}</div>
        )}
      </div>
    </form>
  );
}
