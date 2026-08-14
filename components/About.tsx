const metrics = [
  { num: "4+", label: "Products shipped" },
  { num: "3×", label: "Avg. efficiency gain" },
  { num: "AI", label: "Native in every product" },
  { num: "0%", label: "Cookie-cutter templates" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border px-12 py-24">
      <div className="grid md:grid-cols-2 gap-28 items-center">
        {/* Left */}
        <div>
          <div className="eyebrow">About Letzforge</div>
          <h2 className="section-title">
            Precision craft.<br />Industrial scale.
          </h2>
        </div>

        {/* Right */}
        <div>
          <div className="text-muted text-[0.98rem] leading-[1.8] space-y-5">
            <p>
              Letzforge is a specialized digital agency built for complex industries. We don&rsquo;t do
              generic — we learn your domain, understand your workflows, and design products that{" "}
              <strong className="text-primary font-semibold">actually fit how your teams operate</strong>.
            </p>
            <p>
              From SaaS dashboards that operators use every day to ERP systems that coordinate entire
              supply chains, we bring both design rigour and engineering clarity. Layer AI-powered
              automation on top, and your processes stop being the bottleneck.
            </p>
            <p>
              We stay deliberately small — every project gets{" "}
              <strong className="text-primary font-semibold">senior attention from kickoff to launch</strong>,
              with no handoffs mid-way.
            </p>
          </div>

          {/* Metrics */}
          <div
            className="grid grid-cols-2 mt-10 rounded border overflow-hidden"
            style={{ gap: "1px", background: "var(--border)", borderColor: "var(--border)" }}
          >
            {metrics.map(({ num, label }) => (
              <div key={label} className="bg-bg p-7">
                <div
                  className="font-black text-primary leading-none"
                  style={{ fontSize: "2.6rem", letterSpacing: "-0.04em", fontVariantNumeric: "tabular-nums" }}
                >
                  {num.replace(/[+×%]/, "")}
                  <span className="text-accent">
                    {num.match(/[+×%]/)?.[0] ?? ""}
                  </span>
                </div>
                <div className="text-muted text-[0.65rem] tracking-[0.16em] uppercase font-semibold mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
