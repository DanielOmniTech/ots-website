import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Highlight } from "@/components/Highlight";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-32 lg:grid-cols-2 lg:px-8 lg:pt-36">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Contact</p>
            <h1 className="font-display mt-3 text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-[#6d8cff] sm:text-6xl">
              Omni Tech solutions
            </h1>
            <p className="mt-6 max-w-xl text-white/80">
              Tell us where your business needs to go — we’ll show you how Odoo
              can take you there, with precision and clarity.
            </p>
          </div>
          <Image
            src="/images/partner-badge.svg"
            alt="Official Odoo Partner"
            width={420}
            height={390}
            className="ml-auto h-auto w-64 opacity-80"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-extrabold uppercase sm:text-5xl">
            <Highlight>Contact</Highlight> form
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Contact us about anything related to our company or services.
            We&apos;ll do our best to get back to you as soon as possible.
          </p>
          <div className="mt-8 flex gap-4 text-sm">
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="underline">
              Linked In
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer" className="underline">
              Facebook
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
