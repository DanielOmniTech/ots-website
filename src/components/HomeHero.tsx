"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export function HomeHero() {
  const t = useT();

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-badge">
              <p className="hero-badge-new">Odoo</p>
              <p className="hero-badge-text">{t.hero.badge}</p>
            </div>
            <h1 className="hero-title">
              {t.hero.title}
              <br />
              <span className="hero-title-accent">
                <span className="hero-brace">{"{"}</span>
                {t.hero.consultants}
                <span className="hero-brace">{"}"}</span>
              </span>
            </h1>
            <p className="hero-description">{t.hero.description}</p>
            <div className="hero-cta">
              <Link
                href="mailto:info@omnitechsolutions.eu"
                className="hero-button"
              >
                <div className="hero-button-inner">
                  <div className="hero-button-track">
                    <p className="hero-button-text">{t.cta.bookCall}</p>
                    <p className="hero-button-text">{t.cta.bookCall}</p>
                  </div>
                </div>
              </Link>
              <p className="hero-cta-note">{t.cta.intro}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
