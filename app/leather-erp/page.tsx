import type { Metadata } from "next";
import LeatherERPClient from "./LeatherERPClient";

export const metadata: Metadata = {
  title: "Leather ERP — End-to-End Factory Management | Letzforge",
  description:
    "End-to-end ERP built for finished leather manufacturers — Gate Pass, GRN, Inventory, Production Tracking, and GST-ready billing. Book a free demo.",
};

export default function LeatherERPPage() {
  return <LeatherERPClient />;
}
