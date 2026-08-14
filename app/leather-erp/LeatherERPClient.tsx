"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

/* ─────────────────── types ─────────────────── */
interface FormState {
  company: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  size: string;
}

/* ─────────────────── data ──────────────────── */
const PAIN_POINTS = [
  {
    title: "No real-time inventory",
    body: "You don't know your actual crust stock until someone physically counts it. Finished goods go missing between production and dispatch. Raw material shortages surprise you mid-batch.",
  },
  {
    title: "GRN is a formality, not a system",
    body: "Goods Receipt Notes are written on paper, sometimes not at all. Supplier quantity disputes take days to resolve. Chemical consumption per lot is never tracked.",
  },
  {
    title: "Gate passes are afterthoughts",
    body: "Vehicle entry and exit happen on a log that nobody cross-references with the GRN or the dispatch order. Theft and discrepancy go undetected for weeks.",
  },
  {
    title: "Production yield is unknown",
    body: "You know how many raw hides came in, but not the exact square footage of finished leather that came out. Yield losses are accepted as 'normal' without data to investigate.",
  },
];

const FLOW = [
  { icon: "🚛", name: "Inward Gate Pass", sub: "Vehicle · Supplier · Weight", highlight: true },
  { icon: "📋", name: "GRN", sub: "Lot No. · Hide Type · Qty", highlight: true },
  { icon: "🏭", name: "Raw Store", sub: "Hides · Chemicals", highlight: false },
  { icon: "⚗️", name: "Production", sub: "Tanning · Crusting · Finishing", highlight: false },
  { icon: "✅", name: "QC Check", sub: "Grade · Defects · Sq. ft.", highlight: false },
  { icon: "📦", name: "Finished Stock", sub: "Article · Grade · Colour", highlight: false },
  { icon: "🧾", name: "Sales Order", sub: "Buyer · Rate · Delivery", highlight: false },
  { icon: "🚚", name: "Outward Gate Pass", sub: "Challan · Vehicle · Buyer", highlight: true },
  { icon: "📊", name: "Reports", sub: "Yield · P&L · GST", highlight: false },
];

const MODULES = [
  {
    num: "01",
    title: "Gate Pass Management",
    body: "Digital inward and outward gate passes with vehicle number, driver, material, supplier/buyer, and timestamp. Auto-linked to GRN or dispatch challan.",
    fields: ["Vehicle No.", "Material Type", "Supplier", "Weight", "Timestamp", "Photo Proof"],
  },
  {
    num: "02",
    title: "GRN — Goods Receipt Note",
    body: "Capture every inward consignment — lot number, hide type (goat/buffalo/cow), piece count, square footage, rate, supplier invoice, and chemical batch linkage.",
    fields: ["Lot No.", "Hide Type", "Sq. Footage", "Supplier Invoice", "Rate / Sq. Ft."],
  },
  {
    num: "03",
    title: "Inventory — Raw & Finished",
    body: "Real-time stock of raw hides, wet blue, crust, and finished leather. Chemical stock (chrome sulphate, dyes, fatliquors) tracked against consumption per lot.",
    fields: ["Hide Stock", "Chemical Stock", "WIP Lots", "Finished Goods", "Reorder Alerts"],
  },
  {
    num: "04",
    title: "Production & Yield Tracking",
    body: "Track each lot through every production stage — liming, tanning, sammying, crusting, finishing. Yield calculated automatically at each stage against input.",
    fields: ["Stage Wise", "Yield %", "Lot History", "Loss Analysis"],
  },
  {
    num: "05",
    title: "Sales & Dispatch",
    body: "Sales orders linked to finished stock, auto-generated delivery challans, buyer-wise ledgers, HSN-code billing (4104/4105/4107), and GST-ready invoices.",
    fields: ["Sales Order", "Challan", "GST Invoice", "Buyer Ledger", "HSN Codes"],
  },
  {
    num: "06",
    title: "Reports & Dashboard",
    body: "Live dashboard — stock positions, lot-wise P&L, supplier performance, buyer outstanding, yield benchmarks, and export-ready MIS reports for management.",
    fields: ["Stock Report", "Yield Report", "P&L by Lot", "MIS Export", "GST Summary"],
  },
];

const ROI = [
  { num: "3–5%", label: "Yield improvement from loss-point identification" },
  { num: "80%", label: "Reduction in manual data entry time across teams" },
  { num: "Zero", label: "Unreconciled gate pass vs. GRN discrepancies after go-live" },
  { num: "1 Day", label: "To close month-end accounts vs. 2–3 weeks manually" },
];

const WHY = [
  { title: "Founding engineers, not consultants", body: "Our team has built SaaS and ERP products from scratch at multiple startups. We understand implementation pain — and we stay until it works." },
  { title: "Built for your workflow, not a template", body: "We don't sell off-the-shelf software. Every module is mapped to how your tannery actually operates — your lot numbering, your stages, your report formats." },
  { title: "Works on mobile and low-bandwidth", body: "Gate operators and production supervisors use phones. The system works on a basic Android device with intermittent connectivity." },
  { title: "Hindi & English interface", body: "Supervisors and floor staff can use the system in Hindi. Management gets English reports. No language barrier to adoption." },
  { title: "GST & compliance ready", body: "Invoices, challans, and reports are generated in GST-compliant format with correct HSN codes (4104, 4105, 4106, 4107) out of the box." },
  { title: "Fixed-cost engagement, no surprises", body: "We scope, quote, and deliver for a fixed price. No per-user licensing creep. No surprise consulting fees. Ongoing support at a flat monthly rate." },
];

/* ─────────────────── component ─────────────── */
export default function LeatherERPClient() {
  const [form, setForm] = useState<FormState>({ company: "", name: "", phone: "", email: "", city: "", size: "" });
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
          company: form.company,
          service: "Leather ERP Demo",
          budget: form.size,
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
    <div className="leather-erp">
      <style>{`
        .leather-erp {
          --bg: #F8F4EE;
          --surface: #FFFFFF;
          --surface2: #F1EBE1;
          --border: #DDD3C3;
          --text: #1C1510;
          --muted: #6B5344;
          --accent: #C08B3C;
          --accent-bg: rgba(192,139,60,0.10);
          --good: #3A7D52;
          --warn: #B85C1A;
          background: var(--bg);
          color: var(--text);
          font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
          min-height: 100svh;
        }
        @media (prefers-color-scheme: dark) {
          .leather-erp {
            --bg: #130E09;
            --surface: #1E160E;
            --surface2: #271D13;
            --border: #3A2E22;
            --text: #EDE6DA;
            --muted: #9A8070;
            --accent: #D4A050;
            --accent-bg: rgba(212,160,80,0.12);
            --good: #5BAF7A;
            --warn: #E07040;
          }
        }
        .le-nav {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0.9rem 2.5rem;
          background: color-mix(in srgb, var(--bg) 90%, transparent);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .le-nav-tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); }
        .le-nav-cta {
          background: var(--accent); color: #fff;
          padding: 0.4rem 1.1rem; border-radius: 2px; border: none;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; cursor: pointer; text-decoration: none;
        }
        .le-section { padding: 6rem 2.5rem; border-bottom: 1px solid var(--border); }
        .le-inner { max-width: 880px; margin: 0 auto; }
        .le-label {
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--accent);
          display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1.5rem;
        }
        .le-label::before { content: ''; width: 2rem; height: 1px; background: var(--accent); }
        .le-h1 {
          font-family: Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 700; line-height: 1.08; letter-spacing: -0.025em;
          text-wrap: balance;
        }
        .le-h2 {
          font-family: Georgia, serif;
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 700; line-height: 1.1; letter-spacing: -0.02em;
          text-wrap: balance;
        }
        .le-body { color: var(--muted); font-size: 0.95rem; line-height: 1.8; max-width: 60ch; margin-top: 1rem; }
        .le-body strong { color: var(--text); font-weight: 600; }
        /* cover */
        .le-cover-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; margin-top: 2rem; }
        .le-register { background: var(--surface2); border: 1px solid var(--border); border-radius: 3px; padding: 1.5rem; }
        .le-reg-head { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 0.5rem; padding-bottom: 0.6rem; border-bottom: 2px solid var(--border); margin-bottom: 0.6rem; }
        .le-reg-head span { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .le-reg-row { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 0.5rem; padding: 0.45rem 0; border-bottom: 1px solid var(--border); font-family: 'SF Mono', monospace; font-size: 0.7rem; color: var(--muted); }
        .le-reg-row:last-child { border-bottom: none; }
        .le-reg-bad { color: var(--warn); font-weight: 700; font-size: 0.6rem; }
        .le-reg-cap { font-size: 0.62rem; color: var(--warn); font-style: italic; margin-top: 0.6rem; }
        .le-stats { display: flex; gap: 2.5rem; margin-top: 2rem; }
        .le-stat-n { font-family: Georgia, serif; font-size: 1.8rem; font-weight: 700; color: var(--accent); line-height: 1; }
        .le-stat-l { font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-top: 0.25rem; }
        /* pain */
        .le-pain-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
        .le-pain-card { background: var(--surface); border: 1px solid var(--border); border-left: 3px solid var(--warn); border-radius: 2px; padding: 1.5rem; }
        .le-pain-card h3 { font-weight: 700; font-size: 0.88rem; margin-bottom: 0.4rem; }
        .le-pain-card p { font-size: 0.8rem; color: var(--muted); line-height: 1.65; }
        /* flow */
        .le-flow-scroll { overflow-x: auto; margin-top: 2rem; padding-bottom: 0.5rem; }
        .le-flow { display: grid; grid-template-columns: repeat(9,1fr); gap: 0; min-width: 760px; }
        .le-flow-stage { display: flex; flex-direction: column; align-items: center; position: relative; }
        .le-flow-stage::after { content: '→'; position: absolute; right: -7px; top: 26px; font-size: 0.7rem; color: var(--border); z-index: 1; }
        .le-flow-stage:last-child::after { display: none; }
        .le-flow-node { width: 100%; padding: 0.65rem 0.35rem; background: var(--surface); border: 1px solid var(--border); border-radius: 3px; text-align: center; transition: border-color 0.2s; }
        .le-flow-node.hi { border-color: var(--accent); background: var(--accent-bg); }
        .le-flow-node-icon { font-size: 1rem; display: block; margin-bottom: 0.25rem; }
        .le-flow-node-name { font-size: 0.56rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text); line-height: 1.3; }
        .le-flow-node-sub { font-size: 0.52rem; color: var(--muted); margin-top: 0.18rem; font-family: 'SF Mono', monospace; }
        /* yield bar */
        .le-yield { background: var(--surface); border: 1px solid var(--border); border-radius: 3px; padding: 1.25rem 1.5rem; margin-top: 1.5rem; }
        .le-yield-label { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.75rem; }
        .le-yield-cols { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--border); }
        .le-yield-col { background: var(--surface2); padding: 0.85rem; text-align: center; }
        .le-yield-n { font-family: Georgia, serif; font-size: 1.25rem; font-weight: 700; color: var(--text); line-height: 1; }
        .le-yield-n.accent { color: var(--accent); }
        .le-yield-s { font-size: 0.56rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); margin-top: 0.2rem; }
        .le-yield-footer { font-size: 0.68rem; color: var(--muted); margin-top: 0.6rem; }
        .le-yield-footer strong { color: var(--good); }
        /* modules */
        .le-mod-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; margin-top: 2rem; }
        .le-mod-card { background: var(--surface); border: 1px solid var(--border); border-radius: 3px; padding: 1.5rem; }
        .le-mod-eyebrow { font-size: 0.56rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem; }
        .le-mod-title { font-family: Georgia, serif; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; }
        .le-mod-body { font-size: 0.76rem; color: var(--muted); line-height: 1.65; }
        .le-mod-fields { display: flex; flex-wrap: wrap; gap: 0.3rem; margin-top: 0.85rem; }
        .le-mod-field { font-family: 'SF Mono', monospace; font-size: 0.56rem; background: var(--surface2); border: 1px solid var(--border); padding: 0.15rem 0.45rem; border-radius: 2px; color: var(--muted); }
        /* roi */
        .le-roi-section { background: var(--text); color: var(--bg); }
        .le-roi-section .le-h2 { color: var(--bg); }
        .le-roi-section .le-body { color: color-mix(in srgb, var(--bg) 60%, transparent); }
        .le-roi-section .le-label { color: var(--accent); }
        .le-roi-section .le-label::before { background: var(--accent); }
        .le-roi-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; margin-top: 2rem; }
        .le-roi-card { background: color-mix(in srgb, var(--bg) 6%, transparent); border: 1px solid color-mix(in srgb, var(--bg) 14%, transparent); border-radius: 3px; padding: 1.5rem; text-align: center; }
        .le-roi-num { font-family: Georgia, serif; font-size: 2rem; font-weight: 700; color: var(--accent); line-height: 1; }
        .le-roi-label { font-size: 0.7rem; color: color-mix(in srgb, var(--bg) 55%, transparent); line-height: 1.55; margin-top: 0.45rem; }
        .le-timeline { display: grid; grid-template-columns: repeat(4,1fr); background: color-mix(in srgb, var(--bg) 6%, transparent); border: 1px solid color-mix(in srgb, var(--bg) 14%, transparent); border-radius: 3px; margin-top: 1.5rem; overflow: hidden; }
        .le-tl-col { padding: 1rem 1.1rem; border-right: 1px solid color-mix(in srgb, var(--bg) 14%, transparent); }
        .le-tl-col:last-child { border-right: none; }
        .le-tl-period { font-family: Georgia, serif; font-weight: 700; color: var(--accent); font-size: 0.85rem; }
        .le-tl-desc { font-size: 0.7rem; color: color-mix(in srgb, var(--bg) 50%, transparent); margin-top: 0.2rem; line-height: 1.5; }
        /* why */
        .le-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem; margin-top: 2rem; }
        .le-why-item { display: flex; gap: 0.85rem; }
        .le-why-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); margin-top: 0.42rem; flex-shrink: 0; }
        .le-why-title { font-weight: 700; font-size: 0.86rem; margin-bottom: 0.3rem; }
        .le-why-body { font-size: 0.78rem; color: var(--muted); line-height: 1.65; }
        /* cta */
        .le-cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start; margin-top: 2rem; }
        .le-form-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.85rem; }
        .le-form { display: grid; gap: 0.65rem; }
        .le-input {
          background: var(--surface); border: 1px solid var(--border); border-radius: 2px;
          padding: 0.6rem 0.85rem; font-size: 0.82rem; color: var(--text);
          font-family: inherit; width: 100%; outline: none;
          transition: border-color 0.15s;
        }
        .le-input:focus { border-color: var(--accent); }
        .le-input::placeholder { color: var(--muted); }
        .le-submit {
          background: var(--accent); color: #fff; border: none; border-radius: 2px;
          padding: 0.7rem; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; cursor: pointer; width: 100%;
        }
        .le-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .le-success { font-size: 0.78rem; color: var(--good); font-weight: 600; text-align: center; padding: 0.75rem; background: color-mix(in srgb, var(--good) 8%, transparent); border: 1px solid color-mix(in srgb, var(--good) 25%, transparent); border-radius: 2px; }
        .le-error { font-size: 0.78rem; color: var(--warn); font-weight: 600; text-align: center; padding: 0.6rem; }
        .le-contact-box { background: var(--surface); border: 1px solid var(--border); border-radius: 3px; padding: 1.5rem; }
        .le-contact-row { margin-bottom: 1rem; }
        .le-contact-row:last-child { margin-bottom: 0; }
        .le-contact-row-label { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.2rem; }
        .le-contact-row-val { font-size: 0.88rem; color: var(--text); font-weight: 600; }
        .le-offer-box { background: var(--accent-bg); border: 1px solid var(--accent); border-radius: 3px; padding: 1.5rem; margin-top: 1rem; }
        .le-offer-title { font-family: Georgia, serif; font-weight: 700; font-size: 1rem; margin-bottom: 0.45rem; }
        .le-offer-body { font-size: 0.78rem; color: var(--muted); line-height: 1.65; }
        /* footer */
        .le-footer { display: flex; justify-content: space-between; align-items: center; padding: 2rem 2.5rem; background: var(--surface); border-top: 1px solid var(--border); flex-wrap: wrap; gap: 1rem; }
        .le-footer-copy { font-size: 0.68rem; color: var(--muted); }
        /* responsive */
        @media (max-width: 680px) {
          .le-section { padding: 4rem 1.25rem; }
          .le-cover-grid, .le-pain-grid, .le-mod-grid, .le-why-grid, .le-cta-grid { grid-template-columns: 1fr; }
          .le-roi-grid { grid-template-columns: 1fr 1fr; }
          .le-timeline { grid-template-columns: 1fr 1fr; }
          .le-flow { grid-template-columns: repeat(4,1fr); }
          .le-flow-stage:nth-child(4)::after { display: none; }
          .le-yield-cols { grid-template-columns: 1fr 1fr; }
          .le-nav { padding: 0.9rem 1.25rem; }
          .le-stats { gap: 1.5rem; }
        }
      `}</style>

      {/* NAV */}
      <nav className="le-nav">
        <Link href="/"><Logo /></Link>
        <span className="le-nav-tag">Leather ERP</span>
        <a href="#demo" className="le-nav-cta">Book Demo</a>
      </nav>

      {/* COVER */}
      <section className="le-section">
        <div className="le-inner">
          <div className="le-label">Letzforge × Finished Leather</div>
          <div className="le-cover-grid">
            <div>
              <h1 className="le-h1">Your factory,<br />fully connected.</h1>
              <p className="le-body">
                End-to-end ERP built for finished leather manufacturers — from the inward gate to the dispatch challan, every lot tracked, every transaction recorded, every decision backed by data.
              </p>
              <div className="le-stats">
                <div><div className="le-stat-n">GRN</div><div className="le-stat-l">Automated receipts</div></div>
                <div><div className="le-stat-n">Gate</div><div className="le-stat-l">Inward & outward pass</div></div>
                <div><div className="le-stat-n">Live</div><div className="le-stat-l">Inventory visibility</div></div>
              </div>
            </div>
            <div className="le-register">
              <div className="le-label" style={{ marginBottom: "0.75rem" }}>Current reality</div>
              <div className="le-reg-head"><span>Lot No.</span><span>Hide Type</span><span>Qty</span><span>Status</span></div>
              {[
                ["L-0842", "Buffalo", "1,200 sq", "OVERWRITTEN"],
                ["L-0843", "Goat", "???", "MISSING"],
                ["L-0844", "Cow Split", "840 sq", "NOT UPDATED"],
                ["L-0845", "Buffalo", "—", "UNTRACKED"],
              ].map(([lot, type, qty, status]) => (
                <div key={lot} className="le-reg-row">
                  <span>{lot}</span><span>{type}</span><span>{qty}</span>
                  <span className="le-reg-bad">{status}</span>
                </div>
              ))}
              <div className="le-reg-cap">Paper register — last updated 3 days ago</div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="le-section" style={{ background: "var(--surface)" }}>
        <div className="le-inner">
          <div className="le-label">The problem</div>
          <h2 className="le-h2">Running a tannery on registers and guesswork</h2>
          <p className="le-body">Most finished leather manufacturers in India still operate on paper registers, WhatsApp forwards, and Excel sheets. The cost is invisible — until a shipment goes wrong.</p>
          <div className="le-pain-grid">
            {PAIN_POINTS.map((p) => (
              <div key={p.title} className="le-pain-card">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="le-section">
        <div className="le-inner" style={{ maxWidth: 960 }}>
          <div className="le-label">End-to-end flow</div>
          <h2 className="le-h2">From the factory gate to the customer&apos;s hands</h2>
          <p className="le-body">Every stage connected. Every lot traceable. Every number reconciled — automatically.</p>
          <div className="le-flow-scroll">
            <div className="le-flow">
              {FLOW.map((s) => (
                <div key={s.name} className="le-flow-stage">
                  <div className={`le-flow-node${s.highlight ? " hi" : ""}`}>
                    <span className="le-flow-node-icon">{s.icon}</span>
                    <div className="le-flow-node-name">{s.name}</div>
                    <div className="le-flow-node-sub">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="le-yield">
            <div className="le-yield-label">Lot Yield Tracking — L-0884 (Buffalo, 500 pcs)</div>
            <div className="le-yield-cols">
              {[
                { n: "500", l: "Raw hides in", accent: false },
                { n: "18,400", l: "Sq. ft. wet blue", accent: false },
                { n: "14,200", l: "Sq. ft. crust", accent: false },
                { n: "12,600", l: "Sq. ft. finished", accent: true },
              ].map((c) => (
                <div key={c.l} className="le-yield-col">
                  <div className={`le-yield-n${c.accent ? " accent" : ""}`}>{c.n}</div>
                  <div className="le-yield-s">{c.l}</div>
                </div>
              ))}
            </div>
            <div className="le-yield-footer">Yield: <strong>68.5%</strong> — Industry average: 62–65%. Above benchmark by 3.5%.</div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="le-section" style={{ background: "var(--surface)" }}>
        <div className="le-inner">
          <div className="le-label">Key modules</div>
          <h2 className="le-h2">Built for how tanneries actually work</h2>
          <div className="le-mod-grid">
            {MODULES.map((m) => (
              <div key={m.num} className="le-mod-card">
                <div className="le-mod-eyebrow">Module {m.num}</div>
                <div className="le-mod-title">{m.title}</div>
                <div className="le-mod-body">{m.body}</div>
                <div className="le-mod-fields">
                  {m.fields.map((f) => <span key={f} className="le-mod-field">{f}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="le-section le-roi-section">
        <div className="le-inner">
          <div className="le-label">What you gain</div>
          <h2 className="le-h2">Numbers that move your bottom line</h2>
          <p className="le-body">Based on results from manufacturers with similar scale who moved from manual registers to structured ERP within the first 6 months.</p>
          <div className="le-roi-grid">
            {ROI.map((r) => (
              <div key={r.num} className="le-roi-card">
                <div className="le-roi-num">{r.num}</div>
                <div className="le-roi-label">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="le-timeline">
            {[
              { period: "Week 1–2", desc: "Setup, data migration, team training" },
              { period: "Week 3–4", desc: "Parallel run — old + new system together" },
              { period: "Month 2", desc: "Full go-live: GRN + gate pass + inventory" },
              { period: "Month 3+", desc: "Production tracking, yield reports, billing" },
            ].map((t) => (
              <div key={t.period} className="le-tl-col">
                <div className="le-tl-period">{t.period}</div>
                <div className="le-tl-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="le-section">
        <div className="le-inner">
          <div className="le-label">Why Letzforge</div>
          <h2 className="le-h2">We&apos;ve built for industries that run on the ground, not the cloud.</h2>
          <div className="le-why-grid">
            {WHY.map((w) => (
              <div key={w.title} className="le-why-item">
                <div className="le-why-dot" />
                <div>
                  <div className="le-why-title">{w.title}</div>
                  <div className="le-why-body">{w.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO FORM */}
      <section className="le-section" id="demo" style={{ background: "var(--surface)" }}>
        <div className="le-inner">
          <div className="le-label">Get started</div>
          <h2 className="le-h2">Book a free 30-minute demo</h2>
          <p className="le-body">We&apos;ll walk through the system live with your actual data — gate pass to GRN to stock report. No sales pitch, just the product.</p>
          <div className="le-cta-grid">
            {status === "success" ? (
              <div className="le-success">✓ Request received. We&apos;ll call you within 24 hours.</div>
            ) : (
              <form className="le-form" onSubmit={submit}>
                <div className="le-form-label">Your details</div>
                <input className="le-input" placeholder="Factory / Company Name" required value={form.company} onChange={(e) => update("company", e.target.value)} />
                <input className="le-input" placeholder="Your Name & Designation" required value={form.name} onChange={(e) => update("name", e.target.value)} />
                <input className="le-input" type="tel" placeholder="WhatsApp / Phone Number" required value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                <input className="le-input" type="email" placeholder="Email (optional)" value={form.email} onChange={(e) => update("email", e.target.value)} />
                <select className="le-input" required value={form.city} onChange={(e) => update("city", e.target.value)}>
                  <option value="">Select your city</option>
                  <option>Delhi NCR — Noida</option>
                  <option>Delhi NCR — Faridabad</option>
                  <option>Delhi NCR — Mayapuri</option>
                  <option>Delhi NCR — Sahibabad</option>
                  <option>Delhi NCR — Other</option>
                  <option>Chennai — Chromepet</option>
                  <option>Chennai — Ambattur</option>
                  <option>Chennai — Pallavaram</option>
                  <option>Chennai — Other</option>
                  <option>Other city</option>
                </select>
                <select className="le-input" value={form.size} onChange={(e) => update("size", e.target.value)}>
                  <option value="">Factory size (hides/month)</option>
                  <option>Under 5,000 hides</option>
                  <option>5,000 – 20,000 hides</option>
                  <option>20,000 – 50,000 hides</option>
                  <option>50,000+ hides</option>
                </select>
                {status === "error" && <div className="le-error">Something went wrong. Please call us directly.</div>}
                <button type="submit" className="le-submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : "Request Demo →"}
                </button>
              </form>
            )}
            <div>
              <div className="le-contact-box">
                <div className="le-form-label">Reach us directly</div>
                <div className="le-contact-row">
                  <div className="le-contact-row-label">WhatsApp / Phone</div>
                  <div className="le-contact-row-val">+91 88518 40604</div>
                </div>
                <div className="le-contact-row">
                  <div className="le-contact-row-label">Email</div>
                  <div className="le-contact-row-val">letzforge@gmail.com</div>
                </div>
                <div className="le-contact-row">
                  <div className="le-contact-row-label">Website</div>
                  <div className="le-contact-row-val">letzforge.com</div>
                </div>
              </div>
              <div className="le-offer-box">
                <div className="le-offer-title">Free for first 3 months</div>
                <div className="le-offer-body">We&apos;re onboarding our first batch of leather manufacturers at zero cost for 90 days. You use the full system, we refine it together. No commitment required.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="le-footer">
        <Logo />
        <span className="le-footer-copy">Confidential — prepared for finished leather manufacturers, Delhi NCR & Chennai</span>
        <span style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600 }}>letzforge@gmail.com</span>
      </footer>
    </div>
  );
}
