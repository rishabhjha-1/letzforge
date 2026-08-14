"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: "c1",
    colors: ["#0F1225", "#1A1F3C"] as [string, string],
    thumbLabel: "WellnessGarden · Dashboard",
    tag: "SaaS Design · Design System",
    title: "WellnessGarden Partner Portal",
    desc: "A multi-role SaaS dashboard connecting wellness partners, admins, and end users — with a full Figma design system powering consistent delivery across 30+ screens.",
  },
  {
    id: "c2",
    colors: ["#1C0A00", "#2E1500"] as [string, string],
    thumbLabel: "BharatSure · UX Flows",
    tag: "Fintech · UX Design",
    title: "BharatSure Insurance UX",
    desc: "Simplified complex insurance product selection into step-by-step, compliance-aware flows — resulting in a measurable drop in user abandonment.",
  },
  {
    id: "c3",
    colors: ["#091A0F", "#0E2A1A"] as [string, string],
    thumbLabel: "Digistay · ERP Interface",
    tag: "ERP Design · Hospitality",
    title: "Digistay Property Management",
    desc: "End-to-end ERP interface for hospitality operations — reservations, housekeeping, billing, and cross-property reporting unified in one coherent system.",
  },
  {
    id: "c4",
    colors: ["#0C0C20", "#1A0A2E"] as [string, string],
    thumbLabel: "AI Agent · MCP Workflow",
    tag: "AI Agents · MCP Integration",
    title: "Sales Automation Agent",
    desc: "An MCP-based AI agent that reads CRM data, drafts proposals, and updates ERP records — replacing a previously manual 3-person coordination process.",
  },
];

function Thumb({ id, colors, label }: { id: string; colors: [string, string]; label: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function draw() {
      if (!canvas) return;
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, colors[0]);
      g.addColorStop(1, colors[1]);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 36) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 36) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      ctx.fillStyle = "rgba(255,92,26,0.18)";
      for (let i = 0; i < 6; i++) {
        const rx = w * 0.6 + Math.sin(i * 1.3) * w * 0.25;
        const ry = h * 0.35 + Math.cos(i * 1.1) * h * 0.3;
        ctx.beginPath(); ctx.arc(rx, ry, 2.5, 0, Math.PI * 2); ctx.fill();
      }
    }

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas.parentElement!);
    return () => ro.disconnect();
  }, [colors]);

  return (
    <div className="relative w-full aspect-video bg-surface2 overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} id={id} className="absolute inset-0 w-full h-full" />
      <span className="relative z-10 font-mono text-[0.62rem] tracking-[0.12em] uppercase text-muted">
        {label}
      </span>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-border px-12 py-24">
      {/* Header */}
      <div className="flex justify-between items-end mb-11">
        <div>
          <div className="eyebrow">Selected Work</div>
          <h2 className="section-title">Built, shipped, used.</h2>
        </div>
        <a
          href="#"
          className="text-accent text-[0.72rem] tracking-[0.12em] uppercase font-bold
                     no-underline flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
        >
          All projects →
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-surface border border-border rounded overflow-hidden
                       hover:border-accent transition-colors duration-200 cursor-pointer"
          >
            <Thumb id={p.id} colors={p.colors} label={p.thumbLabel} />
            <div className="p-6">
              <div className="text-accent text-[0.62rem] tracking-[0.18em] uppercase font-bold mb-1.5">
                {p.tag}
              </div>
              <div
                className="text-primary font-extrabold mb-1.5"
                style={{ fontSize: "0.95rem", letterSpacing: "-0.01em" }}
              >
                {p.title}
              </div>
              <p className="text-muted text-[0.78rem] leading-[1.6]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
