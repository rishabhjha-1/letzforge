/* The Letzforge mark — angular L with chisel/blade tip */

type MarkProps = {
  size?: number;
  variant?: "orange" | "white" | "dark-orange";
};

export function LogoMark({ size = 40, variant = "orange" }: MarkProps) {
  const color =
    variant === "white"
      ? "#ffffff"
      : variant === "dark-orange"
      ? "#D94008"
      : "#FF5C1A";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M4,4 L14,4 L14,34 L38,34 L44,39 L38,44 L4,44 Z" fill={color} />
    </svg>
  );
}

/* App-icon version: mark on a rounded square */
export function LogoIcon({ size = 40, dark = true }: { size?: number; dark?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect width="48" height="48" rx="10" fill={dark ? "#0C0C10" : "#FF5C1A"} />
      <path
        d="M8,8 L18,8 L18,32 L36,32 L40,36 L36,40 L8,40 Z"
        fill={dark ? "#FF5C1A" : "#ffffff"}
      />
    </svg>
  );
}

type LogoProps = {
  size?: number;
  light?: boolean; /* true = renders on light background */
};

/* Full lockup: mark + wordmark */
export default function Logo({ size = 36, light = false }: LogoProps) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <LogoMark size={size} variant={light ? "dark-orange" : "orange"} />
      <span
        style={{
          fontSize: size * 1.05,
          fontWeight: 900,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          lineHeight: 1,
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        <span style={{ color: light ? "#0C0C10" : "#E8E8EC" }}>Letz</span>
        <span style={{ color: light ? "#D94008" : "#FF5C1A" }}>forge</span>
      </span>
    </span>
  );
}
