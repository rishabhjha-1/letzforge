import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Letzforge — Digital Agency for SaaS, ERP & AI",
  description:
    "Letzforge crafts precision digital products — SaaS design, ERP systems, AI agents, and brand identities for fintech, manufacturing, and beyond.",
  icons: {
    icon: "/logo-mark.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
