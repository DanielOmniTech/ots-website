import type { Metadata } from "next";
import Image from "next/image";
import { ArrowIcon, Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Highlight, SectionBadge } from "@/components/Highlight";
import { coreServices, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Odoo Implementation",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-2 lg:px-8 lg:pt-36">
          <div>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl">
              our <span className="text-[#6d8cff]">odoo services</span> for your
              business
            </h1>
            <p className="mt-6 max-w-xl text-white/80">
              Our services are built around one goal: aligning powerful Odoo
              solutions with your company’s unique processes and growth strategy.
            </p>
          </div>
          <Image
            src="/images/services-hero.png"
            alt="Odoo services overview"
            width={1048}
            height={904}
            className="h-auto w-full"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionBadge>Core Services</SectionBadge>
        <h2 className="font-display mt-5 text-4xl font-extrabold uppercase sm:text-6xl">
          Solutions that we offer
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {coreServices.map((service) => (
            <article
              id={service.id}
              key={service.id}
              className="scroll-mt-28 rounded-[28px] bg-white p-8"
            >
              <h3 className="font-display text-2xl font-bold">{service.title}</h3>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {service.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6">
                <Button href="/contact">
                  {service.cta}
                  <ArrowIcon />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hero-glow mx-4 overflow-hidden rounded-[32px] px-5 py-16 text-white sm:mx-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
              <Highlight>ALL IN ONE</Highlight> system, zero silos.
            </h2>
            <p className="mt-5 max-w-lg text-white/75">
              Odoo apps connect every part of your business—from sales to
              finance—in one smart system.
            </p>
            <div className="mt-8">
              <Button href={site.bookDemo} external>
                Start With Odoo
              </Button>
            </div>
          </div>
          <Image
            src="/images/all-in-one.png"
            alt="All-in-one Odoo system"
            width={1576}
            height={691}
            className="h-auto w-full rounded-3xl"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:grid-cols-2 lg:px-8">
        <Feature
          title="All-in-One Business Software"
          body="Run your entire business with Odoo—no more switching tools or paying for multiple platforms. One system. Everything connected."
        />
        <Feature
          title="Editable from A to Z"
          body="Odoo is powerful right out of the box — and fully customizable. Our expert engineers help you tailor existing apps or build new ones from scratch to match your exact business needs."
        />
        <Feature
          title="Grow with Your Odoo Partner"
          body="We deliver efficient, cost-effective Odoo implementations. We tailor the platform to your needs—optimizing processes and building custom apps for your needs."
        />
        <Feature
          title="Seamless Integrations"
          body="Connect Odoo with your existing tools and systems to ensure a smooth, unified workflow across your entire business."
          image="/images/integrations.png"
        />
      </section>

      <CtaBanner />
    </>
  );
}

function Feature({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image?: string;
}) {
  return (
    <article className="rounded-[28px] bg-white p-8">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
      {image ? (
        <Image
          src={image}
          alt=""
          width={1383}
          height={503}
          className="mt-6 h-auto w-full rounded-2xl"
        />
      ) : null}
    </article>
  );
}
