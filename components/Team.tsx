const team = [
  {
    icon: "⚙",
    role: "Founder & Lead Engineer",
    bg: "Senior founding engineer at multiple early-stage startups. Full-stack architect with deep expertise in SaaS infrastructure, ERP systems, and AI pipelines.",
    tags: ["Founding Engineer", "Full-Stack", "AI / MCP"],
  },
  {
    icon: "◈",
    role: "Senior Engineer",
    bg: "Spent 6 years as a founding engineer at two B2B SaaS companies. Specialises in scalable backend systems, API design, and workflow automation.",
    tags: ["Backend", "APIs", "Automation"],
  },
  {
    icon: "⬡",
    role: "Design Lead",
    bg: "Senior product designer with 7 years across fintech, healthcare, and SaaS. Expert in design systems, complex data UI, and accessibility-first design.",
    tags: ["Product Design", "Design Systems", "Figma"],
  },
  {
    icon: "◻",
    role: "Senior Brand Designer",
    bg: "Brand and visual identity designer with experience across 50+ brands — from startup identity packages to enterprise rebrands and campaign systems.",
    tags: ["Brand Identity", "Visual Design", "Motion"],
  },
  {
    icon: "◎",
    role: "Content & SEO Lead",
    bg: "Strategist and writer specialising in B2B SaaS content, technical SEO, and go-to-market copy. Writes for humans, optimises for search.",
    tags: ["Content Strategy", "SEO", "UX Copy"],
  },
  {
    icon: "▣",
    role: "Graphic Designer",
    bg: "Graphic and motion designer covering landing pages, marketing assets, social campaigns, and pitch decks. Makes every pixel intentional.",
    tags: ["Graphic Design", "Motion", "Landing Pages"],
  },
];

const pillars = [
  {
    num: "01",
    heading: "Founding-engineer mindset",
    body: "Most of our engineers have built products from zero to one. They think in systems, not tickets — and they ship.",
  },
  {
    num: "02",
    heading: "Senior-only execution",
    body: "No juniors mid-project. Every deliverable is reviewed and owned by someone who has done it before, at scale.",
  },
  {
    num: "03",
    heading: "Design × Engineering alignment",
    body: "Our designers and engineers sit in the same calls. Handoffs are minimal because context never gets lost.",
  },
];

export default function Team() {
  return (
    <section id="team" className="border-t border-border px-12 py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-14">
        <div>
          <div className="eyebrow">Our Team</div>
          <h2 className="section-title">
            Small team.<br />Serious experience.
          </h2>
        </div>
        <p className="text-muted text-[0.9rem] leading-[1.7] max-w-[36ch] md:text-right">
          Founding engineers, senior designers, and specialist creatives — all under one roof,
          all focused on your project.
        </p>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-14">
        {team.map((member) => (
          <div
            key={member.role}
            className="bg-surface border border-border rounded p-7 flex flex-col gap-4
                       hover:border-accent transition-colors duration-200"
          >
            {/* Role header */}
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-md bg-accent-bg border border-border
                           flex items-center justify-center text-xl flex-shrink-0"
              >
                {member.icon}
              </div>
              <div
                className="text-primary font-extrabold"
                style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
              >
                {member.role}
              </div>
            </div>

            {/* Bio */}
            <p className="text-muted text-[0.8rem] leading-[1.65] flex-1">{member.bg}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {member.tags.map((t) => (
                <span
                  key={t}
                  className="text-muted text-[0.62rem] tracking-[0.1em] uppercase font-semibold
                             border border-border px-2 py-0.5 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pillars */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 rounded overflow-hidden border border-border"
      >
        {pillars.map((p, i) => (
          <div
            key={p.num}
            className={`bg-surface2 px-8 py-7
                        ${i < pillars.length - 1 ? "border-r border-border" : ""}`}
          >
            <div className="font-mono text-[0.62rem] tracking-[0.16em] text-accent font-semibold mb-3">
              {p.num}
            </div>
            <div
              className="text-primary font-extrabold mb-2"
              style={{ fontSize: "0.9rem", letterSpacing: "-0.01em" }}
            >
              {p.heading}
            </div>
            <p className="text-muted text-[0.8rem] leading-[1.6]">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
