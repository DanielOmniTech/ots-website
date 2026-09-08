"use client";

import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcons";
import { useT } from "@/components/LanguageProvider";
import { homeServices } from "@/lib/site";

export function ServicesShowcase() {
  const t = useT();

  return (
    <section className="services-showcase">
      <div className="services-showcase-inner">
        <h2 className="section-heading">
          {t.showcase.heading}
          <br />
          {t.showcase.headingLine2}
        </h2>
        <div className="services-grid">
          {homeServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-card"
            >
              <div className="service-card-visual">
                <ServiceIcon id={service.id} />
              </div>
              <p className="service-card-title">{t.showcase[service.id]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
