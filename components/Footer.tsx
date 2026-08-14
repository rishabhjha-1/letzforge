const links = ["Work", "Services", "About", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border px-12 py-9 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-[0.9rem] font-black tracking-[0.12em] uppercase text-primary">
        Letz<span className="text-accent">forge</span>
      </div>
      <p className="text-muted text-[0.68rem] tracking-[0.04em]">
        &copy; {new Date().getFullYear()} Letzforge Studio — All rights reserved.
      </p>
      <ul className="flex gap-8 list-none">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-muted no-underline text-[0.68rem] tracking-[0.1em] uppercase font-semibold
                         hover:text-primary transition-colors duration-200"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
