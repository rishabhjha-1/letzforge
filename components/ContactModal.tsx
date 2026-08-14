"use client";
import { useEffect, useRef, useState, FormEvent } from "react";
import { useContact } from "@/context/ContactContext";
import { LogoMark } from "@/components/Logo";

const services = [
  "SaaS & ERP Design",
  "AI Agents & Automation",
  "Brand & Visual Identity",
  "Landing Page Design",
  "SEO Strategy",
  "Content & Strategy",
  "Gym / Fitness SaaS",
  "Other",
];

const budgets = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $50K",
  "$50K+",
  "Let's discuss",
];

const timelines = [
  "ASAP",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "Flexible",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass = `
  w-full bg-surface2 border border-border rounded-sm px-4 py-3
  text-primary text-[0.875rem] placeholder:text-muted
  focus:outline-none focus:border-accent
  transition-colors duration-150
`;

const labelClass = "block text-[0.7rem] font-bold tracking-[0.14em] uppercase text-muted mb-2";

export default function ContactModal() {
  const { isOpen, closeModal } = useContact();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "", email: "", company: "",
    service: "", budget: "", timeline: "", description: "",
  });

  /* lock body scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setStatus("idle");
      setError("");
      setForm({ name: "", email: "", company: "", service: "", budget: "", timeline: "", description: "" });
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(8,8,10,0.85)", backdropFilter: "blur(12px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) closeModal(); }}
    >
      <div
        className="relative w-full max-w-[640px] max-h-[90vh] overflow-y-auto
                   bg-surface border border-border rounded-md shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Start a project"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <LogoMark size={24} />
            <span className="text-[0.78rem] font-bold tracking-[0.1em] uppercase text-muted">
              Start a project
            </span>
          </div>
          <button
            onClick={closeModal}
            className="w-8 h-8 flex items-center justify-center rounded-sm border border-border
                       text-muted hover:text-primary hover:border-accent transition-colors duration-150"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {status === "success" ? (
          /* Success state */
          <div className="flex flex-col items-center text-center px-8 py-16 gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
              style={{ background: "var(--accent-bg)", border: "1px solid var(--accent)" }}
            >
              <span className="text-accent text-xl">✓</span>
            </div>
            <h3 className="text-primary font-black text-[1.4rem]" style={{ letterSpacing: "-0.02em" }}>
              We&rsquo;ve got your brief.
            </h3>
            <p className="text-muted text-[0.9rem] leading-[1.7] max-w-[32ch]">
              Thanks for reaching out. We&rsquo;ll review your project and get back to you within 24 hours.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-accent text-white px-8 py-2.5 rounded-sm text-[0.78rem] font-bold tracking-[0.1em] uppercase hover:opacity-85 transition-opacity"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="px-8 py-7 grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Name */}
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => set("name", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email *</label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={e => set("email", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Company */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Company / Project Name</label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={e => set("company", e.target.value)}
                  className={inputClass}
                />
              </div>

              {/* Service */}
              <div>
                <label className={labelClass}>Service Needed</label>
                <select
                  value={form.service}
                  onChange={e => set("service", e.target.value)}
                  className={inputClass}
                  style={{ appearance: "none" }}
                >
                  <option value="">Select a service…</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className={labelClass}>Budget Range</label>
                <select
                  value={form.budget}
                  onChange={e => set("budget", e.target.value)}
                  className={inputClass}
                  style={{ appearance: "none" }}
                >
                  <option value="">Select budget…</option>
                  {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* Timeline */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Timeline</label>
                <select
                  value={form.timeline}
                  onChange={e => set("timeline", e.target.value)}
                  className={inputClass}
                  style={{ appearance: "none" }}
                >
                  <option value="">When do you need this?</option>
                  {timelines.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Description */}
              <div className="sm:col-span-2">
                <label className={labelClass}>Project Description *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project — what you're building, who it's for, and what success looks like…"
                  value={form.description}
                  onChange={e => set("description", e.target.value)}
                  className={inputClass}
                  style={{ resize: "vertical", minHeight: "100px" }}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-8 pb-8 gap-4">
              {error && (
                <p className="text-[0.78rem] text-red-400">{error}</p>
              )}
              {!error && <span />}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-accent text-white px-8 py-3 rounded-sm text-[0.78rem] font-bold
                           tracking-[0.1em] uppercase hover:opacity-85 disabled:opacity-50
                           transition-opacity duration-150 flex-shrink-0"
              >
                {status === "submitting" ? "Sending…" : "Send Brief →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
