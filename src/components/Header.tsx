"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useT } from "@/components/LanguageProvider";
import {
  localizedGroupTitle,
  localizedServiceItem,
} from "@/lib/i18n";
import { serviceGroups } from "@/lib/site";

function BookCallButton({ label }: { label: string }) {
  return (
    <Link href="mailto:info@omnitechsolutions.eu" className="hero-button header-button">
      <div className="hero-button-inner">
        <div className="hero-button-track">
          <p className="hero-button-text">{label}</p>
          <p className="hero-button-text">{label}</p>
        </div>
      </div>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const t = useT();
  const servicesOpen = pathname.startsWith("/services");

  return (
    <header className={`site-header${open ? " header-open" : ""}`}>
      <div className="header-inner">
        <div className="header-left">
          <Link
            href="/"
            className="brand-logo"
            aria-label={t.nav.homeAria}
          >
            <Image
              src="/images/logo-black.png"
              alt="Omni Tech Solutions"
              width={945}
              height={242}
              priority
            />
          </Link>
          <nav className="nav-menu" aria-label={t.nav.primary}>
            <Link
              href="/"
              className={`nav-pill${pathname === "/" ? " is-active" : ""}`}
            >
              {t.nav.home}
            </Link>
            <div className="dropdown">
              <Link
                href="/services"
                className={`nav-pill nav-services${servicesOpen ? " is-active" : ""}`}
              >
                {t.nav.services}
                <span className="dropdown-caret" aria-hidden="true" />
              </Link>
              <div className="services-menu">
                <div className="services-menu-card">
                  {serviceGroups.map((group) => (
                    <div key={group.id} className="services-menu-col">
                      <p className="services-menu-title">
                        {localizedGroupTitle(group.id, t)}
                      </p>
                      {group.items.map((item) => {
                        const copy = localizedServiceItem(item.href, t);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="services-menu-link"
                            onClick={() => setOpen(false)}
                          >
                            <span>{copy.label}</span>
                            {"description" in copy && copy.description ? (
                              <span className="services-menu-desc">
                                {copy.description}
                              </span>
                            ) : null}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`nav-pill${pathname === "/about" ? " is-active" : ""}`}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/career"
              className={`nav-pill${pathname === "/career" ? " is-active" : ""}`}
            >
              {t.nav.career}
            </Link>
          </nav>
        </div>
        <div className="header-actions">
          <LanguageToggle />
          <BookCallButton label={t.cta.bookCall} />
          <button
            className="menu-toggle"
            type="button"
            aria-label={t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
