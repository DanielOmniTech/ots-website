"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Frankrijklei+5+2000+Antwerpen";

export function Footer() {
  const t = useT();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label={t.nav.homeAria}>
            <img
              src="/images/OTSV2_Actual_Favicon (1).png"
              alt=""
              width={40}
              height={40}
            />
            <span>Omni Tech Solutions</span>
          </Link>
          <address className="footer-address">
            <span>Frankrijklei 5</span>
            <span>2000 Antwerpen</span>
          </address>
          <a
            className="footer-maps"
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.maps}
          </a>
        </div>

        <div className="footer-cols">
          <nav className="footer-nav" aria-label={t.nav.primary}>
            <Link href="/">{t.nav.home}</Link>
            <Link href="/services">{t.nav.services}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/career">{t.nav.career}</Link>
          </nav>
          <div className="footer-contact">
            <a href="mailto:info@omnitechsolutions.eu">
              info@omnitechsolutions.eu
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copy">{t.footer.copyright}</p>
    </footer>
  );
}
