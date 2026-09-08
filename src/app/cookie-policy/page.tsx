import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="hero-glow text-white">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-32 lg:px-8 lg:pt-36">
          <h1 className="font-display text-5xl font-extrabold uppercase">
            Cookie Policy
          </h1>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-16 text-sm leading-7 text-muted lg:px-8">
        <p>
          {site.name} uses only cookies that are needed to run this website, such
          as remembering language preference. We do not use advertising cookies.
        </p>
        <p className="mt-4">
          If you have questions about how we handle data, contact us at{" "}
          <a className="underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </section>
    </>
  );
}
