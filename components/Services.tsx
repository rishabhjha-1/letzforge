const services = [
  {
    icon: "⬡",
    name: "SaaS & ERP Design",
    desc: "End-to-end UI/UX for complex B2B software — dashboards, role-based views, data-heavy workflows. Designed for operators who use it daily, not for demos.",
    tags: ["Figma", "Prototyping", "Design System"],
  },
  {
    icon: "◈",
    name: "AI Agents & Automation",
    desc: "We build autonomous AI agents using MCP and agentic frameworks — systems that read, reason, and act across your software stack with minimal human in the loop.",
    tags: ["MCP", "Agent Design", "LLM Pipelines"],
  },
  {
    icon: "◻",
    name: "Brand & Visual Identity",
    desc: "Brand strategy, logo systems, typography, color architecture, and usage guidelines built to scale — from seed-stage pitch deck to enterprise rollout.",
    tags: ["Logo", "Brand Guide", "Visual System"],
  },
  {
    icon: "◎",
    name: "Content & Strategy",
    desc: "UX writing, product copy, landing pages, go-to-market messaging — words designed with the same precision as the interfaces they live inside.",
    tags: ["UX Copy", "GTM", "Content Design"],
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface px-12 py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-14">
        <div>
          <div className="eyebrow">What we do</div>
          <h2 className="section-title">
            Every service,<br />precision-built.
          </h2>
        </div>
        <p className="text-muted text-[0.9rem] leading-[1.7] max-w-[34ch] md:text-right">
          Four focused disciplines. One studio that takes you from concept to a product your users keep coming back to.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 rounded overflow-hidden border border-border"
      >
        {services.map((s, i) => (
          <div
            key={s.name}
            className={`bg-bg flex flex-col p-9 transition-colors duration-200 hover:bg-accentBg
                        ${i < services.length - 1 ? "border-r border-border" : ""}`}
          >
            <div
              className="w-11 h-11 flex items-center justify-center rounded-md border border-border
                         bg-surface2 text-xl mb-7"
            >
              {s.icon}
            </div>
            <div
              className="text-primary font-extrabold leading-tight mb-3"
              style={{ fontSize: "0.92rem", letterSpacing: "-0.01em" }}
            >
              {s.name}
            </div>
            <p className="text-muted text-[0.8rem] leading-[1.65] flex-1">{s.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-6">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-accent text-[0.62rem] tracking-[0.1em] uppercase font-bold
                             border border-accentBg px-2 py-0.5 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
