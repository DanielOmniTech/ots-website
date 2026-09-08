import type { Metadata } from "next";
import { ServicesIndexContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return <ServicesIndexContent />;
}
