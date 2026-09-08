"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { serviceGroups } from "@/lib/site";

function BookCallButton() {
  return (
    <Link href="mailto:info@omnitechsolutions.eu" className="hero-button header-button">
      <div className="hero-button-inner">
        <div className="hero-button-track">
          <p className="hero-button-text">Book a call</p>
          <p className="hero-button-text">Book a call</p>
        </div>
      </div>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const servicesOpen = pathname.startsWith("/services");

  return (
    <header className={`site-header${open ? " header-open" : ""}`}>
      <div className="header-inner">
        <div className="header-left">
          <Link
            href="/"
            className="brand-logo"
            aria-label="Omni Tech Solutions home"
          >
            <Image
              src="/images/logo-black.png"
              alt="Omni Tech Solutions"
              width={945}
              height={242}
              priority
            />
          </Link>
          <nav className="nav-menu" aria-label="Primary">
            <Link
              href="/"
              className={`nav-pill${pathname === "/" ? " is-active" : ""}`}
            >
              Home
            </Link>
            <div className="dropdown">
              <Link
                href="/services"
                className={`nav-pill nav-services${servicesOpen ? " is-active" : ""}`}
              >
                Services
                <span className="dropdown-caret" aria-hidden="true" />
              </Link>
              <div className="services-menu">
                <div className="services-menu-card">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="services-menu-col">
                      <p className="services-menu-title">{group.title}</p>
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="services-menu-link"
                          onClick={() => setOpen(false)}
                        >
                          <span>{item.label}</span>
                          {"description" in item && item.description ? (
                            <span className="services-menu-desc">
                              {item.description}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`nav-pill${pathname === "/about" ? " is-active" : ""}`}
            >
              About
            </Link>
            <Link
              href="/career"
              className={`nav-pill${pathname === "/career" ? " is-active" : ""}`}
            >
              Career
            </Link>
          </nav>
        </div>
        <div className="header-actions">
          <LanguageToggle />
          <BookCallButton />
          <button
            className="menu-toggle"
            type="button"
            aria-label="Open menu"
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
