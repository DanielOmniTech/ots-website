import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Accounting & Finance Reporting",
};

export default function AccountingFinancePage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Odoo Services"
        title="Accounting & Finance Reporting"
        description="Chart of accounts, localization, and management reports that finance teams can trust — without extra spreadsheets."
      />
    </main>
  );
}
