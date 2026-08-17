import type { Metadata } from "next";
import GymSaaSClient from "./GymSaaSClient";

export const metadata: Metadata = {
  title: "Gym SaaS — QR Attendance, WhatsApp Alerts & Member App | Letzforge",
  description:
    "All-in-one gym management software — QR attendance, fee collection, membership management, automatic WhatsApp due alerts, live crowd tracking, and a free branded website + member app for your gym.",
};

export default function GymSaaSPage() {
  return <GymSaaSClient />;
}
