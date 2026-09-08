"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

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
        <div className="services-bento">
          <Link
            href="/services/erp-implementation"
            className="services-panel services-panel-tall"
          >
            <div>
              <h3>{t.showcase.implementation}</h3>
              <p>{t.showcase.implementationDesc}</p>
            </div>
            <div className="services-viz services-viz-overview">
              <div className="services-kpi">
                <strong>12 wks</strong>
                <span>+ go-live</span>
              </div>
              <div className="services-bars" aria-hidden>
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <ul>
                <li>
                  <i className="is-violet" />
                  Scope
                </li>
                <li>
                  <i className="is-blue" />
                  Config
                </li>
                <li>
                  <i className="is-orange" />
                  Live
                </li>
              </ul>
            </div>
          </Link>

          <Link
            href="/services/business-process-audit"
            className="services-panel"
          >
            <div className="services-viz services-viz-process">
              <div className="services-person">
                <span>OTS</span>
                <div>
                  <b>Workshop</b>
                  <small>as-is → to-be</small>
                </div>
              </div>
              <span className="services-pill">Mapped</span>
            </div>
            <div>
              <h3>{t.showcase.process}</h3>
              <p>{t.showcase.processDesc}</p>
            </div>
          </Link>

          <Link href="/services" className="services-panel">
            <div className="services-viz services-viz-migration">
              <div className="services-kpi">
                <strong>100%</strong>
                <span>records in</span>
              </div>
              <svg viewBox="0 0 220 64" className="services-spark" aria-hidden>
                <path
                  d="M2 48 C28 46 36 22 58 24 C80 26 88 40 110 18 C132 0 148 28 172 22 C190 18 204 8 218 12"
                  fill="none"
                  stroke="#2f00ff"
                  strokeWidth="2.4"
                />
                <circle cx="110" cy="18" r="4" fill="#2f00ff" />
              </svg>
            </div>
            <div>
              <h3>{t.showcase.migration}</h3>
              <p>{t.showcase.migrationDesc}</p>
            </div>
          </Link>

          <div className="services-panel services-panel-tall">
            <div>
              <h3>{t.showcase.stackTitle}</h3>
              <p>{t.showcase.stackDesc}</p>
            </div>
            <div className="services-stack">
              <Link href="/services" className="services-stack-item">
                <span className="is-orange" />
                {t.showcase.development}
              </Link>
              <Link href="/services" className="services-stack-item">
                <span className="is-blue" />
                {t.showcase.api}
              </Link>
              <Link
                href="/services/accounting-finance-reporting"
                className="services-stack-item"
              >
                <span className="is-violet" />
                {t.showcase.accounting}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
