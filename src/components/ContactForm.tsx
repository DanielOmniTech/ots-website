"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const fields = [
  { name: "name", label: "Name", placeholder: "Jane Smith", required: true },
  { name: "phone", label: "Phone", placeholder: "Your Number", required: true },
  {
    name: "email",
    label: "Email",
    placeholder: "yourmail@gmail.com",
    required: true,
    type: "email",
  },
  { name: "company", label: "Company", placeholder: "Your Company Name" },
  { name: "subject", label: "Subject", placeholder: "Your Subject" },
  {
    name: "text",
    label: "Text",
    placeholder: "Your Thoughts",
    textarea: true,
  },
] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Website enquiry");
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company")}`,
      "",
      String(data.get("text") || ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-[28px] bg-white p-8 text-sm text-muted">
        Thanks — your email client should open with the message ready to send.
        We’ll get back to you as soon as possible.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[28px] bg-white p-8">
      {fields.map((field) => (
        <label key={field.name} className="block text-sm">
          <span className="mb-2 block font-medium">{field.label}</span>
          {"textarea" in field && field.textarea ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              rows={5}
              className="w-full rounded-2xl bg-[#ececec] px-4 py-3 outline-none ring-0 placeholder:text-black/35"
            />
          ) : (
            <input
              name={field.name}
              type={"type" in field ? field.type : "text"}
              placeholder={field.placeholder}
              required={"required" in field ? field.required : false}
              className="w-full rounded-2xl bg-[#ececec] px-4 py-3 outline-none ring-0 placeholder:text-black/35"
            />
          )}
        </label>
      ))}
      <button
        type="submit"
        className="inline-flex rounded-full bg-[linear-gradient(135deg,#5b4dff_0%,#7a6bff_100%)] px-6 py-3 text-sm font-medium text-white"
      >
        Submit
      </button>
    </form>
  );
}
