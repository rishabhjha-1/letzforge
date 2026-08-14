const clients = [
  {
    initial: "W",
    name: "WellnessGarden",
    sector: "Wellness & Healthcare",
    scope: "Full-stack product design — booking platform, partner portal, SaaS admin dashboard, and a comprehensive Figma design system.",
  },
  {
    initial: "H",
    name: "Huzzle",
    sector: "Startup Tools",
    scope: "Brand identity, product UI, and go-to-market content strategy for an early-stage SaaS platform entering a competitive market.",
  },
  {
    initial: "D",
    name: "Digistay",
    sector: "Hospitality Tech",
    scope: "ERP and property management interface design, multi-property workflow automation, and a cohesive visual identity system.",
  },
  {
    initial: "B",
    name: "BharatSure",
    sector: "Fintech & Insurance",
    scope: "Complex insurance product UX, compliance-aware selection flows, and customer-facing brand design for an Indian fintech.",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="border-t border-border bg-surface px-12 py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-12">
        <div>
          <div className="eyebrow">Clients</div>
          <h2 className="section-title">Who we&rsquo;ve forged with.</h2>
        </div>
        <p className="text-muted text-[0.9rem] leading-[1.7] max-w-[30ch] md:text-right">
          From wellness to insurance — every client a different domain, every product a real challenge.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 rounded overflow-hidden border border-border">
        {clients.map((c, i) => (
          <div
            key={c.name}
            className={`bg-bg flex flex-col gap-3 p-9 transition-colors duration-200 hover:bg-accentBg
                        ${i < clients.length - 1 ? "border-r border-border" : ""}`}
          >
            <div
              className="w-11 h-11 bg-accent rounded-md flex items-center justify-center
                         text-white font-black text-[1.05rem] mb-2"
            >
              {c.initial}
            </div>
            <div className="font-extrabold text-primary text-[1rem]" style={{ letterSpacing: "-0.01em" }}>
              {c.name}
            </div>
            <div className="text-accent text-[0.64rem] tracking-[0.16em] uppercase font-bold">
              {c.sector}
            </div>
            <div className="text-muted text-[0.78rem] leading-[1.55] mt-auto">
              {c.scope}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
