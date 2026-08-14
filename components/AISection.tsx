const chips = [
  "MCP Server Design", "Multi-Agent Systems", "LLM Orchestration",
  "Tool Calling", "Claude / GPT-4o", "RAG Pipelines",
  "Agentic Workflows", "Workflow Automation",
];

const nodes = [
  "User trigger — new lead enters CRM",
  "Agent fetches context via MCP",
  "LLM reasons over company data",
  "Drafts proposal → calls ERP tool",
  "Updates records, logs action",
  "✓ Complete — zero manual steps",
];

export default function AISection() {
  return (
    <section id="ai" className="border-t border-border px-12 py-24">
      <div className="grid md:grid-cols-2 gap-24 items-center">
        {/* Left */}
        <div>
          <div className="eyebrow">AI &amp; Automation</div>
          <h2 className="section-title mb-6">
            Agents that work<br />while you sleep.
          </h2>
          <p className="text-muted text-[0.97rem] leading-[1.8] mb-4">
            We specialise in designing and deploying AI agent systems using the{" "}
            <strong className="text-primary font-semibold">Model Context Protocol (MCP)</strong> —
            the emerging standard for connecting AI models to your tools, APIs, and data sources.
            Agents that read, reason, and act with minimal human in the loop.
          </p>
          <p className="text-muted text-[0.97rem] leading-[1.8] mb-8">
            From automating client onboarding flows to orchestrating multi-step ERP operations, our
            agents replace repetitive work and surface only what actually needs human attention.
          </p>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="font-mono text-[0.68rem] tracking-[0.04em] font-semibold
                           text-accent bg-accentBg px-3 py-1.5 rounded-sm"
                style={{ border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Right — animated workflow */}
        <div
          className="relative bg-surface border border-border rounded-md p-7 overflow-hidden"
          aria-label="Sample AI agent workflow"
        >
          {/* background glow */}
          <div
            aria-hidden
            className="absolute -top-[30%] -right-[15%] w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 68%)" }}
          />

          <div className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-muted font-semibold mb-5">
            // live agent workflow
          </div>

          <div className="flex flex-col">
            {nodes.map((node, i) => (
              <div key={i}>
                <div
                  className="flex items-center gap-3 px-4 py-3 bg-bg border border-border rounded-sm
                             font-mono text-[0.72rem] font-semibold text-muted animate-nodeGlow"
                  style={{ animationDelay: `${i}s` }}
                >
                  <span
                    className="w-[7px] h-[7px] rounded-full bg-accent flex-shrink-0"
                    style={{ boxShadow: "0 0 6px var(--accent-glow)" }}
                  />
                  {node}
                </div>
                {i < nodes.length - 1 && (
                  <div
                    aria-hidden
                    className="w-px h-[10px] bg-border ml-[1.3rem]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
