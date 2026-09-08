import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Business Process Audit",
};

export default function BusinessProcessAuditPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Odoo Services"
        title="Business Process Audit"
        description="We review how work actually happens today, then show where Odoo can remove friction, duplicate tools, and manual reporting."
      />
    </main>
  );
}
