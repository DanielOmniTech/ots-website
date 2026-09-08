"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function ProductShowcase() {
  const { locale } = useLanguage();

  return (
    <section className="product-showcase" aria-label="Odoo workspace">
      <div className="macbook">
        <div className="macbook-lid">
          <div className="macbook-bezel">
            <span className="macbook-camera" />
            <div className="macbook-viewport">
              <img
                src="/images/odoo-en.png"
                alt="Odoo workspace in English"
                className={`macbook-screen-image${locale === "en" ? " is-visible" : ""}`}
              />
              <img
                src="/images/odoo-nl.png?v=3"
                alt="Odoo-werkruimte in het Nederlands"
                className={`macbook-screen-image${locale === "nl" ? " is-visible" : ""}`}
              />
            </div>
          </div>
        </div>
        <div className="macbook-base">
          <div className="macbook-indent" />
        </div>
      </div>
    </section>
  );
}
