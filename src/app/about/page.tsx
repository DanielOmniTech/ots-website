import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="About"
        title="Engineering meets business"
        description="Omni Tech Solutions is an Odoo partner in Belgium and Luxembourg. We combine technical depth with accounting and operations know-how, so the ERP you go live with is one people actually use."
      />
    </main>
  );
}
