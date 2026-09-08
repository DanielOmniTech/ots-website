"use client";

import { useLanguage, useT, type Locale } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const t = useT();

  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      {(["en", "nl"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-switch-btn${locale === code ? " is-active" : ""}`}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
