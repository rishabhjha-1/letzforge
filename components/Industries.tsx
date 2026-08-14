const industries = [
  {
    num: "Industry / 01",
    name: "Fintech & Insurance",
    desc: "Compliance-aware UX for financial products, insurance flows, and regulatory dashboards. We understand the constraints — and we design precisely within them.",
  },
  {
    num: "Industry / 02",
    name: "Leather & Manufacturing",
    desc: "ERP and inventory management for traditional industries undergoing digital transformation. From factory floor inputs to boardroom reporting — connected.",
  },
  {
    num: "Industry / 03",
    name: "Wellness & Hospitality",
    desc: "Booking systems, partner portals, and guest-experience platforms for people-first businesses. Warm front-ends over serious backend logic.",
  },
  {
    num: "Industry / 04",
    name: "Gym & Fitness SaaS",
    desc: "Member management portals, class scheduling, trainer dashboards, and mobile-first interfaces for gyms, fitness studios, and wellness platforms scaling fast.",
  },
];

export default function Industries() {
  return (
    <section className="border-t border-border bg-surface px-12 py-24">
      <div className="eyebrow">Industries</div>
      <h2 className="section-title mb-10">Deep domain. Real context.</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="bg-bg border border-border rounded p-8 hover:border-accent transition-colors duration-200"
          >
            <div className="font-mono text-[0.62rem] tracking-[0.16em] text-muted font-semibold mb-5">
              {ind.num}
            </div>
            <div
              className="text-primary font-extrabold mb-2"
              style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
            >
              {ind.name}
            </div>
            <p className="text-muted text-[0.8rem] leading-[1.6]">{ind.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
