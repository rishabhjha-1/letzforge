"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

interface FormState {
  gym: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  members: string;
}

const FEATURES = [
  {
    icon: "⬡",
    title: "QR Attendance",
    body: "Members scan a unique QR code at the entrance. Attendance is logged instantly — no registers, no manual entry, no buddy punching.",
    tags: ["Member QR", "Auto timestamp", "Daily log", "Entry history"],
  },
  {
    icon: "💳",
    title: "Fee Collection",
    body: "Collect fees online or mark cash payments. Full payment history per member, receipt generation, and pending dues dashboard for your staff.",
    tags: ["Online payment", "Cash mark", "Receipts", "Due tracker"],
  },
  {
    icon: "🪪",
    title: "Membership Management",
    body: "Monthly, quarterly, annual — any plan you offer. Member profiles, renewal dates, plan upgrades, freezes, and expiry alerts all in one place.",
    tags: ["Custom plans", "Renewals", "Freezes", "Expiry alerts"],
  },
  {
    icon: "💬",
    title: "WhatsApp Notifications",
    body: "Automatic WhatsApp messages when fees are due, when membership expires, or when a renewal is confirmed. No manual follow-up calls needed.",
    tags: ["Fee due alerts", "Expiry reminders", "Renewal confirm", "Auto-send"],
  },
  {
    icon: "📍",
    title: "Live Crowd Tracker",
    body: "Real-time occupancy counter — members and staff see how busy the gym is before they come in. Reduces peak-hour crowding and improves experience.",
    tags: ["Live count", "Member app", "Peak hours", "Capacity limit"],
  },
  {
    icon: "👥",
    title: "Staff Tracking",
    body: "Trainer attendance, shift management, assigned members, and session logs. Know who is on the floor and when, without a separate system.",
    tags: ["Trainer login", "Shift log", "Member assign", "Session track"],
  },
];

const INCLUDED = [
  {
    tag: "Free with every plan",
    title: "Your gym's own website",
    body: "A fully branded website for your gym — your logo, your photos, your class schedule, your membership prices. Ready to share with new members. No extra charge.",
    bullets: ["Custom domain ready", "Class schedule", "Membership plans page", "Google Maps embed", "WhatsApp inquiry button"],
  },
  {
    tag: "Free with every plan",
    title: "Branded member app",
    body: "Your members get a custom app in your gym's name — not a generic platform app. They scan QR for attendance, check their membership, pay fees, and see live crowd, all from their phone.",
    bullets: ["Your gym's name & logo", "QR attendance", "Fee payment", "Live crowd view", "Membership details"],
  },
];

const HOW = [
  { step: "01", title: "We set up your gym", body: "Add your membership plans, member list, staff, and branding in one onboarding session." },
  { step: "02", title: "Members get their QR", body: "Each member gets a unique QR code via WhatsApp. They scan it every time they enter." },
  { step: "03", title: "System runs itself", body: "Fees are tracked, WhatsApp alerts go out automatically, and your dashboard stays live." },
  { step: "04", title: "You get your website + app", body: "Your branded website and member app are live within the first week. Shared, not rented." },
];

const PAIN = [
  { title: "Register attendance is a lie", body: "Half your members skip signing in. The ones who do write illegibly. You have no idea who actually came in last month." },
  { title: "Chasing fees wastes hours", body: "You or your staff call 20 members every month to remind them about dues. Half don't pick up. Some come in two weeks late." },
  { title: "No visibility when you're not there", body: "You don't know how many people are in the gym right now, which trainer is on shift, or whether the morning batch was full or empty." },
  { title: "Members have no self-serve", body: "Members call you to check their membership end date, their balance, or to ask if the gym is crowded. Every question is a distraction." },
];

export default function GymSaaSClient() {
  const [form, setForm] = useState<FormState>({ gym: "", name: "", phone: "", email: "", city: "", members: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(k: keyof FormState, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email || "not provided",
          company: form.gym,
          service: "Gym SaaS",
          budget: form.members,
          timeline: "ASAP",
          description: `City: ${form.city} | Phone: ${form.phone}`,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="gym-pg">
      <style>{`
        .gym-pg {
          --bg: #0A0A0A;
          --surface: #111111;
          --surface2: #1A1A1A;
          --border: #242424;
          --text: #F0F0F0;
          --muted: #888888;
          --accent: #2563EB;
          --accent-light: #3B82F6;
          --accent-bg: rgba(37,99,235,0.10);
          --accent-border: rgba(37,99,235,0.30);
          --good: #16A34A;
          --warn: #DC2626;
          background: var(--bg);
          color: var(--text);
          font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
          min-height: 100svh;
        }

        /* NAV */
        .g-nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 2.5rem;
          background: rgba(10,10,10,0.85);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .g-nav-tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
        .g-nav-cta {
          background: var(--accent); color: #fff;
          padding: 0.45rem 1.2rem; border-radius: 4px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; text-decoration: none; display: inline-block;
          transition: background 0.15s;
        }
        .g-nav-cta:hover { background: var(--accent-light); }

        /* SECTIONS */
        .g-section { padding: 6rem 2.5rem; border-bottom: 1px solid var(--border); }
        .g-inner { max-width: 900px; margin: 0 auto; }
        .g-inner-wide { max-width: 1080px; margin: 0 auto; }

        /* LABEL */
        .g-label {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--accent);
          background: var(--accent-bg); border: 1px solid var(--accent-border);
          padding: 0.25rem 0.75rem; border-radius: 100px;
          margin-bottom: 1.5rem;
        }

        /* HEADINGS */
        .g-h1 {
          font-size: clamp(2.4rem, 6vw, 4.5rem);
          font-weight: 800; line-height: 1.06; letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .g-h1 .blue { color: var(--accent-light); }
        .g-h2 {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.025em;
          text-wrap: balance;
        }
        .g-body { color: var(--muted); font-size: 1rem; line-height: 1.8; max-width: 58ch; margin-top: 1rem; }

        /* HERO */
        .g-hero { padding: 7rem 2.5rem 5rem; border-bottom: 1px solid var(--border); background: var(--bg); }
        .g-hero-inner { max-width: 900px; margin: 0 auto; }
        .g-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; margin-top: 2.5rem; }
        .g-pill-row { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 2rem; }
        .g-pill {
          font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em;
          padding: 0.3rem 0.8rem; border-radius: 100px;
          border: 1px solid var(--border); color: var(--muted);
        }
        .g-pill.active { border-color: var(--accent-border); color: var(--accent-light); background: var(--accent-bg); }

        /* MOCK PHONE */
        .g-phone {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 20px; padding: 1.25rem;
          box-shadow: 0 0 60px rgba(37,99,235,0.08);
        }
        .g-phone-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border);
        }
        .g-phone-title { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .g-phone-live {
          font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--good);
          display: flex; align-items: center; gap: 0.35rem;
        }
        .g-phone-live::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--good); }
        .g-crowd-bar {
          background: var(--surface2); border-radius: 6px; overflow: hidden;
          height: 8px; margin: 0.5rem 0 0.25rem;
        }
        .g-crowd-fill { height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-light)); border-radius: 6px; width: 68%; }
        .g-crowd-label { display: flex; justify-content: space-between; font-size: 0.6rem; color: var(--muted); }
        .g-member-row {
          display: flex; align-items: center; gap: 0.65rem;
          padding: 0.5rem 0; border-bottom: 1px solid var(--border);
        }
        .g-member-row:last-child { border-bottom: none; }
        .g-member-av {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--accent-bg); border: 1px solid var(--accent-border);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.62rem; font-weight: 700; color: var(--accent-light); flex-shrink: 0;
        }
        .g-member-name { font-size: 0.75rem; font-weight: 600; flex: 1; }
        .g-member-time { font-family: 'SF Mono', monospace; font-size: 0.6rem; color: var(--muted); }
        .g-member-badge {
          font-size: 0.55rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 0.15rem 0.4rem; border-radius: 3px;
        }
        .g-badge-in { background: rgba(22,163,74,0.12); color: #4ADE80; border: 1px solid rgba(22,163,74,0.2); }
        .g-badge-due { background: rgba(220,38,38,0.12); color: #F87171; border: 1px solid rgba(220,38,38,0.2); }
        .g-wa-row {
          margin-top: 0.75rem; background: rgba(37,211,102,0.08); border: 1px solid rgba(37,211,102,0.2);
          border-radius: 8px; padding: 0.65rem 0.75rem;
          font-size: 0.68rem; color: #4ADE80; line-height: 1.5;
        }
        .g-wa-row span { color: var(--muted); display: block; font-size: 0.58rem; margin-top: 0.2rem; }

        /* PAIN */
        .g-pain-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
        .g-pain-card {
          background: var(--surface); border: 1px solid var(--border);
          border-left: 3px solid var(--warn); border-radius: 4px; padding: 1.5rem;
        }
        .g-pain-title { font-weight: 700; font-size: 0.9rem; margin-bottom: 0.4rem; }
        .g-pain-body { font-size: 0.8rem; color: var(--muted); line-height: 1.65; }

        /* FEATURES */
        .g-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); margin-top: 2rem; border: 1px solid var(--border); border-radius: 6px; overflow: hidden; }
        .g-feat-card {
          background: var(--surface); padding: 1.75rem;
          transition: background 0.2s;
        }
        .g-feat-card:hover { background: var(--surface2); }
        .g-feat-icon { font-size: 1.4rem; margin-bottom: 0.85rem; display: block; }
        .g-feat-title { font-weight: 800; font-size: 0.95rem; margin-bottom: 0.5rem; }
        .g-feat-body { font-size: 0.78rem; color: var(--muted); line-height: 1.65; }
        .g-feat-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 1rem; }
        .g-feat-tag {
          font-family: 'SF Mono', monospace; font-size: 0.56rem;
          background: var(--surface2); border: 1px solid var(--border);
          padding: 0.15rem 0.45rem; border-radius: 3px; color: var(--muted);
        }

        /* HOW IT WORKS */
        .g-how-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; margin-top: 2rem; position: relative; }
        .g-how-grid::before {
          content: ''; position: absolute;
          top: 1.75rem; left: calc(12.5% + 1rem); right: calc(12.5% + 1rem);
          height: 1px; background: var(--border); z-index: 0;
        }
        .g-how-step { text-align: center; padding: 0 1rem; position: relative; }
        .g-how-num {
          width: 3rem; height: 3rem; border-radius: 50%;
          background: var(--accent-bg); border: 1px solid var(--accent-border);
          display: flex; align-items: center; justify-content: center;
          font-family: 'SF Mono', monospace; font-size: 0.7rem; font-weight: 700; color: var(--accent-light);
          margin: 0 auto 1rem; position: relative; z-index: 1;
        }
        .g-how-title { font-weight: 700; font-size: 0.85rem; margin-bottom: 0.4rem; }
        .g-how-body { font-size: 0.75rem; color: var(--muted); line-height: 1.6; }

        /* INCLUDED (free website + app) */
        .g-incl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
        .g-incl-card {
          background: var(--surface); border: 1px solid var(--accent-border);
          border-radius: 6px; padding: 2rem; position: relative; overflow: hidden;
        }
        .g-incl-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--accent-light));
        }
        .g-incl-tag {
          font-size: 0.58rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--accent-light); background: var(--accent-bg); border: 1px solid var(--accent-border);
          padding: 0.2rem 0.65rem; border-radius: 100px; display: inline-block; margin-bottom: 1rem;
        }
        .g-incl-title { font-weight: 800; font-size: 1.1rem; margin-bottom: 0.6rem; }
        .g-incl-body { font-size: 0.8rem; color: var(--muted); line-height: 1.65; }
        .g-incl-bullets { list-style: none; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.45rem; }
        .g-incl-bullets li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.78rem; color: var(--text); }
        .g-incl-bullets li::before { content: '✓'; color: var(--accent-light); font-weight: 700; font-size: 0.7rem; flex-shrink: 0; }

        /* CTA / FORM */
        .g-cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; align-items: start; margin-top: 2rem; }
        .g-form { display: grid; gap: 0.65rem; }
        .g-form-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.25rem; }
        .g-input {
          background: var(--surface); border: 1px solid var(--border); border-radius: 4px;
          padding: 0.65rem 0.9rem; font-size: 0.82rem; color: var(--text);
          font-family: inherit; width: 100%; outline: none; transition: border-color 0.15s;
        }
        .g-input:focus { border-color: var(--accent); }
        .g-input::placeholder { color: var(--muted); }
        .g-submit {
          background: var(--accent); color: #fff; border: none; border-radius: 4px;
          padding: 0.75rem; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; cursor: pointer; width: 100%; transition: background 0.15s;
        }
        .g-submit:hover { background: var(--accent-light); }
        .g-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .g-success { font-size: 0.82rem; color: #4ADE80; font-weight: 600; text-align: center; padding: 1rem; background: rgba(22,163,74,0.08); border: 1px solid rgba(22,163,74,0.2); border-radius: 4px; }
        .g-error { font-size: 0.78rem; color: #F87171; font-weight: 600; text-align: center; padding: 0.5rem; }
        .g-contact-box { background: var(--surface); border: 1px solid var(--border); border-radius: 6px; padding: 1.5rem; }
        .g-contact-row { margin-bottom: 1rem; }
        .g-contact-row:last-child { margin-bottom: 0; }
        .g-contact-rl { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.2rem; }
        .g-contact-rv { font-size: 0.9rem; color: var(--text); font-weight: 600; }
        .g-offer-box { background: var(--accent-bg); border: 1px solid var(--accent-border); border-radius: 6px; padding: 1.5rem; margin-top: 1rem; }
        .g-offer-title { font-weight: 800; font-size: 1rem; margin-bottom: 0.4rem; }
        .g-offer-body { font-size: 0.78rem; color: var(--muted); line-height: 1.65; }

        /* FOOTER */
        .g-footer { display: flex; justify-content: space-between; align-items: center; padding: 2rem 2.5rem; background: var(--surface); border-top: 1px solid var(--border); flex-wrap: wrap; gap: 1rem; }
        .g-footer-copy { font-size: 0.68rem; color: var(--muted); }

        /* RESPONSIVE */
        @media (max-width: 700px) {
          .g-hero, .g-section { padding: 5rem 1.25rem 3.5rem; }
          .g-hero-grid, .g-pain-grid, .g-incl-grid, .g-cta-grid { grid-template-columns: 1fr; }
          .g-feat-grid { grid-template-columns: 1fr; }
          .g-how-grid { grid-template-columns: 1fr 1fr; }
          .g-how-grid::before { display: none; }
          .g-nav { padding: 0.9rem 1.25rem; }
          .g-nav-tag { display: none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="g-nav">
        <Link href="/"><Logo /></Link>
        <span className="g-nav-tag">Gym SaaS</span>
        <a href="#get-started" className="g-nav-cta">Get Started Free</a>
      </nav>

      {/* HERO */}
      <section className="g-hero">
        <div className="g-hero-inner">
          <div className="g-label">Letzforge Gym SaaS</div>
          <div className="g-hero-grid">
            <div>
              <h1 className="g-h1">Run your gym.<br /><span className="blue">Not paperwork.</span></h1>
              <p className="g-body">
                QR attendance, automatic WhatsApp fee reminders, live crowd tracking, membership management — and a free branded website + member app included with every plan.
              </p>
              <div className="g-pill-row">
                {["QR Attendance", "WhatsApp Alerts", "Live Crowd", "Fee Collection", "Member App", "Free Website", "Staff Tracking"].map((p) => (
                  <span key={p} className="g-pill active">{p}</span>
                ))}
              </div>
            </div>

            {/* Mock dashboard */}
            <div className="g-phone">
              <div className="g-phone-header">
                <span className="g-phone-title">Iron House Gym</span>
                <span className="g-phone-live">Live — 34 in gym</span>
              </div>
              <div style={{ fontSize: "0.62rem", color: "var(--muted)", marginBottom: "0.3rem" }}>Capacity</div>
              <div className="g-crowd-bar"><div className="g-crowd-fill" /></div>
              <div className="g-crowd-label"><span>34 / 50 members</span><span>68% full</span></div>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "1rem 0 0.5rem" }}>Recent Check-ins</div>
              {[
                { init: "RK", name: "Rahul Kumar", time: "6:12 AM", badge: "in", due: false },
                { init: "PM", name: "Priya Mehta", time: "6:08 AM", badge: "due", due: true },
                { init: "AS", name: "Amit Singh", time: "5:58 AM", badge: "in", due: false },
                { init: "NS", name: "Neha Sharma", time: "5:44 AM", badge: "in", due: false },
              ].map((m) => (
                <div key={m.name} className="g-member-row">
                  <div className="g-member-av">{m.init}</div>
                  <span className="g-member-name">{m.name}</span>
                  <span className="g-member-time">{m.time}</span>
                  <span className={`g-member-badge ${m.due ? "g-badge-due" : "g-badge-in"}`}>{m.due ? "FEE DUE" : "IN"}</span>
                </div>
              ))}
              <div className="g-wa-row">
                📱 WhatsApp sent to Priya Mehta
                <span>Hi Priya, your membership fee of ₹1,200 is due. Pay now to avoid interruption. — Iron House Gym</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="g-section" style={{ background: "var(--surface)" }}>
        <div className="g-inner">
          <div className="g-label">The problem</div>
          <h2 className="g-h2">Most gyms still run on pen, paper, and guesswork.</h2>
          <p className="g-body">You built a great gym. The operations shouldn&apos;t hold it back.</p>
          <div className="g-pain-grid">
            {PAIN.map((p) => (
              <div key={p.title} className="g-pain-card">
                <div className="g-pain-title">{p.title}</div>
                <div className="g-pain-body">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="g-section">
        <div className="g-inner-wide">
          <div className="g-label">Everything included</div>
          <h2 className="g-h2">One platform. Every tool your gym needs.</h2>
          <div className="g-feat-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="g-feat-card">
                <span className="g-feat-icon">{f.icon}</span>
                <div className="g-feat-title">{f.title}</div>
                <div className="g-feat-body">{f.body}</div>
                <div className="g-feat-tags">
                  {f.tags.map((t) => <span key={t} className="g-feat-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="g-section" style={{ background: "var(--surface)" }}>
        <div className="g-inner">
          <div className="g-label">How it works</div>
          <h2 className="g-h2">Up and running in a week.</h2>
          <div className="g-how-grid">
            {HOW.map((h) => (
              <div key={h.step} className="g-how-step">
                <div className="g-how-num">{h.step}</div>
                <div className="g-how-title">{h.title}</div>
                <div className="g-how-body">{h.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREE WEBSITE + APP */}
      <section className="g-section" style={{ background: "var(--bg)" }}>
        <div className="g-inner">
          <div className="g-label">What&apos;s free with every plan</div>
          <h2 className="g-h2">A website and member app in your gym&apos;s name. Included. Always.</h2>
          <p className="g-body">
            Not a generic platform page — your own branded presence. Other software charges extra for this. We include it because a gym without a web presence loses members before they even walk in.
          </p>
          <div className="g-incl-grid">
            {INCLUDED.map((i) => (
              <div key={i.title} className="g-incl-card">
                <div className="g-incl-tag">{i.tag}</div>
                <div className="g-incl-title">{i.title}</div>
                <div className="g-incl-body">{i.body}</div>
                <ul className="g-incl-bullets">
                  {i.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section className="g-section" id="get-started" style={{ background: "var(--surface)" }}>
        <div className="g-inner">
          <div className="g-label">Get started</div>
          <h2 className="g-h2">First month free. Setup in a week.</h2>
          <p className="g-body">Tell us about your gym and we&apos;ll get everything set up — software, website, and member app — within 7 days.</p>
          <div className="g-cta-grid">
            {status === "success" ? (
              <div className="g-success">✓ Request received. We&apos;ll WhatsApp you within 24 hours.</div>
            ) : (
              <form className="g-form" onSubmit={submit}>
                <div className="g-form-label">Your gym details</div>
                <input className="g-input" placeholder="Gym Name" required value={form.gym} onChange={(e) => update("gym", e.target.value)} />
                <input className="g-input" placeholder="Your Name" required value={form.name} onChange={(e) => update("name", e.target.value)} />
                <input className="g-input" type="tel" placeholder="WhatsApp Number" required value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                <input className="g-input" type="email" placeholder="Email (optional)" value={form.email} onChange={(e) => update("email", e.target.value)} />
                <input className="g-input" placeholder="City" value={form.city} onChange={(e) => update("city", e.target.value)} />
                <select className="g-input" value={form.members} onChange={(e) => update("members", e.target.value)}>
                  <option value="">Number of active members</option>
                  <option>Under 50 members</option>
                  <option>50 – 150 members</option>
                  <option>150 – 300 members</option>
                  <option>300+ members</option>
                </select>
                {status === "error" && <div className="g-error">Something went wrong. Please WhatsApp us directly.</div>}
                <button type="submit" className="g-submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : "Start Free Month →"}
                </button>
              </form>
            )}
            <div>
              <div className="g-contact-box">
                <div className="g-form-label">Reach us directly</div>
                <div className="g-contact-row">
                  <div className="g-contact-rl">WhatsApp / Phone</div>
                  <div className="g-contact-rv">+91 88518 40604</div>
                </div>
                <div className="g-contact-row">
                  <div className="g-contact-rl">Email</div>
                  <div className="g-contact-rv">letzforge@gmail.com</div>
                </div>
                <div className="g-contact-row">
                  <div className="g-contact-rl">Website</div>
                  <div className="g-contact-rv">letzforge.com</div>
                </div>
              </div>
              <div className="g-offer-box">
                <div className="g-offer-title">First month completely free</div>
                <div className="g-offer-body">No setup fee. No card required. We set up the software, your website, and your member app. You pay from month two — only if you&apos;re happy.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="g-footer">
        <Logo />
        <span className="g-footer-copy">© Letzforge Studio — Built for gym owners who have enough to manage already.</span>
        <span style={{ fontSize: "0.72rem", color: "var(--accent-light)", fontWeight: 600 }}>letzforge@gmail.com</span>
      </footer>
    </div>
  );
}
