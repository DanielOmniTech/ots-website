import Link from "next/link";
import { CustomerLogos } from "@/components/CustomerLogos";
import { HeroBackground } from "@/components/HeroBackground";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ServicesShowcase } from "@/components/ServicesShowcase";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <div className="top-stage">
        <HeroBackground />
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-copy">
                <div className="hero-badge">
                  <p className="hero-badge-new">Odoo</p>
                  <p className="hero-badge-text">
                    Official Partner in Belgium & Luxembourg
                  </p>
                </div>
                <h1 className="hero-title">
                  Next generation
                  <br />
                  <span className="hero-title-accent">
                    <span className="hero-brace">{"{"}</span>ERP Consultants
                    <span className="hero-brace">{"}"}</span>
                  </span>
                </h1>
                <p className="hero-description">
                  Get an ERP consultant who knows finance, accounting, software
                  development, and process optimization.
                </p>
                <div className="hero-cta">
                  <Link
                    href="mailto:info@omnitechsolutions.eu"
                    className="hero-button"
                  >
                    <div className="hero-button-inner">
                      <div className="hero-button-track">
                        <p className="hero-button-text">Book a call</p>
                        <p className="hero-button-text">Book a call</p>
                      </div>
                    </div>
                  </Link>
                  <p className="hero-cta-note">Free 30-minute intro</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductShowcase />
        <CustomerLogos />
      </div>
      <ServicesShowcase />
    </>
  );
}
