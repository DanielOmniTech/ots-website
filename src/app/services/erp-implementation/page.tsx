import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "ERP Implementation",
};

export default function ErpImplementationPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Odoo Services"
        title="ERP Implementation"
        description="We take you from process mapping to a live Odoo system — configuration, data, training, and go-live support included."
      />
    </main>
  );
}
