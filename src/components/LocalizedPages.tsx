"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";
import { PageHero } from "@/components/PageHero";
import {
  localizedGroupTitle,
  localizedServiceItem,
} from "@/lib/i18n";
import { jobs, serviceGroups } from "@/lib/site";

export function AboutContent() {
  const t = useT();

  return (
    <main className="inner-page">
      <PageHero
        eyebrow={t.pages.aboutEyebrow}
        title={t.pages.aboutTitle}
        description={t.pages.aboutDescription}
      />
    </main>
  );
}

export function CareerContent() {
  const t = useT();

  return (
    <main className="inner-page">
      <PageHero
        eyebrow={t.pages.careerEyebrow}
        title={t.pages.careerTitle}
        description={t.pages.careerDescription}
      />
      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.id} className="inner-card">
            <h2>{t.jobs[job.id]}</h2>
            <p>
              {t.jobs.type} · {t.jobs.location}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function ServicesIndexContent() {
  const t = useT();

  return (
    <main className="inner-page">
      <PageHero
        eyebrow={t.pages.servicesEyebrow}
        title={t.pages.servicesTitle}
        description={t.pages.servicesDescription}
      />
      <div className="inner-grid">
        {serviceGroups.map((group) => (
          <section key={group.id} className="inner-card">
            <p className="services-menu-title">
              {localizedGroupTitle(group.id, t)}
            </p>
            <ul className="inner-list">
              {group.items.map((item) => {
                const copy = localizedServiceItem(item.href, t);
                return (
                  <li key={item.href}>
                    <Link href={item.href}>{copy.label}</Link>
                    {"description" in copy && copy.description ? (
                      <p>{copy.description}</p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

export function ServiceDetailContent({
  kind,
}: {
  kind: "erp" | "audit" | "accounting" | "realEstate";
}) {
  const t = useT();
  const copy = {
    erp: {
      eyebrow: t.pages.odooServices,
      title: t.pages.erpTitle,
      description: t.pages.erpDescription,
    },
    audit: {
      eyebrow: t.pages.odooServices,
      title: t.pages.auditTitle,
      description: t.pages.auditDescription,
    },
    accounting: {
      eyebrow: t.pages.odooServices,
      title: t.pages.accountingTitle,
      description: t.pages.accountingDescription,
    },
    realEstate: {
      eyebrow: t.pages.industry,
      title: t.pages.realEstateTitle,
      description: t.pages.realEstateDescription,
    },
  }[kind];

  return (
    <main className="inner-page">
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
    </main>
  );
}
