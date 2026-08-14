export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-end px-12 pt-24 pb-20 overflow-hidden">
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage: "radial-gradient(ellipse 90% 65% at 50% 25%, black 15%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 65% at 50% 25%, black 15%, transparent 85%)",
        }}
      />

      {/* Accent glow */}
      <div
        aria-hidden
        className="absolute top-0 -right-[8%] w-[580px] h-[580px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 68%)" }}
      />

      {/* Tag */}
      <div className="relative flex items-center gap-3 text-accent text-[0.7rem] font-bold tracking-[0.22em] uppercase mb-11">
        <span className="block w-10 h-px bg-accent" />
        Digital Agency &mdash; SaaS · ERP · AI · SEO · Landing Pages
      </div>

      {/* Headline */}
      <h1 className="hero-num relative">
        <span className="block text-muted">We</span>
        <span className="block text-primary">Forge</span>
        <span className="block text-accent">Digital</span>
        <span className="block text-primary">Futures.</span>
      </h1>

      {/* Lower row */}
      <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-16">
        <p className="text-muted text-[0.98rem] leading-[1.8] max-w-[38ch]">
          Precision software design. AI-powered automation. Brand systems built to last.
          Letzforge crafts digital products for the industries that demand more —
          from fintech to factory floors.
        </p>
        <div className="flex flex-col items-start md:items-end gap-2">
          <span className="text-muted text-[0.62rem] tracking-[0.2em] uppercase font-semibold mb-1">
            Industries served
          </span>
          {["Fintech & Insurance", "Leather & Manufacturing", "Gym & Fitness SaaS", "Hospitality Tech", "Healthcare & Wellness"].map((c) => (
            <span
              key={c}
              className="text-muted text-[0.68rem] tracking-[0.08em] uppercase font-semibold
                         border border-border bg-surface px-3 py-1 rounded-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
