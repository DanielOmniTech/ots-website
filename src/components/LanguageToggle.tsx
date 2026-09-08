"use client";

import { useLanguage, type Locale } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Language">
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
