"use client";

import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

export function ContactForm() {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          website: data.get("website"),
          fax: data.get("fax"),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setStatus(payload?.error === "invalid" ? "invalid" : "error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="contact-success">{t.contact.success}</p>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label className="contact-hp" htmlFor="contact-fax" aria-hidden="true">
        Fax
        <input id="contact-fax" name="fax" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <label>
        {t.contact.name}
        <input name="name" type="text" autoComplete="name" required maxLength={120} />
      </label>
      <label>
        {t.contact.email}
        <input name="email" type="email" autoComplete="email" required maxLength={120} />
      </label>
      <label>
        {t.contact.phone}
        <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
      </label>
      <label>
        {t.contact.company}
        <input name="company" type="text" autoComplete="organization" maxLength={120} />
      </label>
      <label>
        {t.contact.website}
        <input
          name="website"
          type="text"
          autoComplete="url"
          inputMode="url"
          placeholder="https://"
          maxLength={200}
        />
      </label>

      {status === "invalid" ? <p className="contact-error">{t.contact.invalid}</p> : null}
      {status === "error" ? <p className="contact-error">{t.contact.error}</p> : null}

      <button type="submit" className="hero-button contact-submit" disabled={status === "sending"}>
        <div className="hero-button-inner">
          <div className="hero-button-track">
            <p className="hero-button-text">
              {status === "sending" ? t.contact.sending : t.contact.submit}
            </p>
            <p className="hero-button-text">
              {status === "sending" ? t.contact.sending : t.contact.submit}
            </p>
          </div>
        </div>
      </button>
    </form>
  );
}
