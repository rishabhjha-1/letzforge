import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:        "var(--bg)",
        surface:   "var(--surface)",
        surface2:  "var(--surface-2)",
        border:    "var(--border)",
        primary:   "var(--text)",
        muted:     "var(--muted)",
        accent:    "var(--accent)",
        accentBg:  "var(--accent-bg)",
      },
      fontFamily: {
        mono: ["'SF Mono'", "'Fira Code'", "'Courier New'", "monospace"],
      },
      animation: {
        marquee:  "marquee 36s linear infinite",
        nodeGlow: "nodeGlow 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        nodeGlow: {
          "0%,75%,100%": { borderColor: "var(--border)", color: "var(--muted)", boxShadow: "none" },
          "40%":          { borderColor: "var(--accent)", color: "var(--text)", boxShadow: "0 0 12px var(--accent-glow)" },
        },
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};
export default config;
