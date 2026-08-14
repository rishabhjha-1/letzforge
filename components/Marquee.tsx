const items = [
  "SaaS Design", "ERP Systems", "AI Agents", "MCP Integration",
  "Workflow Automation", "Brand Identity", "Design Systems",
  "Fintech UX", "LLM Pipelines", "Multi-Agent Systems",
  "Content Design", "Agentic Workflows", "UX Strategy", "Product Design",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div
      aria-hidden
      className="border-t border-b border-border overflow-hidden py-3.5 bg-surface"
    >
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 whitespace-nowrap
                       text-[0.68rem] font-bold tracking-[0.2em] uppercase text-muted"
          >
            {item}
            <span className="w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
