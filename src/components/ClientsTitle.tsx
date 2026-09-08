"use client";

import { useT } from "@/components/LanguageProvider";

export function ClientsTitle() {
  const t = useT();
  return <p className="customers-title">{t.clients.title}</p>;
}
