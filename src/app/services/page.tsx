import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { serviceGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Services"
        title="Odoo services that fit the way you work"
        description="Implementation, process audits, and industry setups — built around your business, not a generic ERP template."
      />
      <div className="inner-grid">
        {serviceGroups.map((group) => (
          <section key={group.title} className="inner-card">
            <p className="services-menu-title">{group.title}</p>
            <ul className="inner-list">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                  {"description" in item && item.description ? (
                    <p>{item.description}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
