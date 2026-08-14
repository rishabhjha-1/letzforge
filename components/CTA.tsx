export default function CTA() {
  return (
    <section
      id="contact"
      className="border-t border-border text-center relative overflow-hidden px-12"
      style={{ padding: "9rem 3rem" }}
    >
      {/* Glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)" }}
      />

      <div className="relative">
        <div className="text-accent text-[0.66rem] font-bold tracking-[0.22em] uppercase mb-8">
          Ready to build?
        </div>
        <h2
          className="text-primary font-black uppercase leading-[0.9] mb-12"
          style={{ fontSize: "clamp(2.75rem, 8.5vw, 8rem)", letterSpacing: "-0.045em" }}
        >
          Let&rsquo;s forge<br />something great.
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:hello@letzforge.com"
            className="bg-accent text-white no-underline px-9 py-3.5 rounded-sm
                       text-[0.78rem] font-bold tracking-[0.1em] uppercase
                       hover:opacity-85 transition-opacity duration-200"
          >
            Start a project
          </a>
          <a
            href="#"
            className="text-primary no-underline px-9 py-3.5 rounded-sm
                       border border-border text-[0.78rem] font-bold tracking-[0.1em] uppercase
                       hover:border-accent hover:text-accent transition-colors duration-200"
          >
            See our process
          </a>
        </div>
      </div>
    </section>
  );
}
