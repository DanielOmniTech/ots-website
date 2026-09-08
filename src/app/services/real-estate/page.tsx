import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Real Estate",
};

export default function RealEstatePage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Industry Verticals"
        title="Real Estate"
        description="Turn Odoo into a real estate ERP — properties, contracts, invoicing, and operations in one system."
      />
    </main>
  );
}
