"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { messages, type Messages } from "@/lib/i18n";

export type Locale = "en" | "nl";

const STORAGE_KEY = "ots-locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function writeLocale(next: Locale) {
  window.localStorage.setItem(STORAGE_KEY, next);
  document.cookie = `${STORAGE_KEY}=${next}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if ((stored === "en" || stored === "nl") && stored !== initialLocale) {
      setLocaleState(stored);
      writeLocale(stored);
      return;
    }

    writeLocale(initialLocale);
  }, [initialLocale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    writeLocale(next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function useT(): Messages {
  const { locale } = useLanguage();
  return messages[locale];
}
