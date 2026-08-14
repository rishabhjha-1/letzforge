"use client";
import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#ai", label: "AI & Agents" },
  { href: "#work", label: "Work" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between
                 px-12 py-5 border-b border-border"
      style={{ background: "color-mix(in srgb, var(--bg) 82%, transparent)", backdropFilter: "blur(18px)" }}
    >
      <Link
        href="/"
        className="text-[1rem] font-black tracking-[0.12em] uppercase text-primary no-underline"
      >
        Letz<span className="text-accent">forge</span>
      </Link>

      <ul className="hidden md:flex gap-9 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-muted no-underline text-[0.76rem] tracking-[0.1em] uppercase font-medium
                         hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="bg-accent text-white no-underline px-5 py-2 rounded-sm
                   text-[0.76rem] font-bold tracking-[0.1em] uppercase
                   hover:opacity-85 transition-opacity duration-200"
      >
        Let&rsquo;s Talk
      </a>
    </nav>
  );
}
