import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Highlight, SectionBadge } from "@/components/Highlight";
import { Marquee } from "@/components/Marquee";
import { homeServices, odooApps, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-2 lg:px-8 lg:pt-36">
          <div>
            <Link
              href="/career"
              className="mb-8 inline-flex max-w-full items-center gap-3 overflow-hidden rounded-full bg-black/40 py-1 pl-3 pr-1 ring-1 ring-white/15"
            >
              <span className="truncate text-xs text-white/80">
                We are looking for talented Odoo&apos;ers
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                See jobs
              </span>
            </Link>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Digitalize your
              <br />
              business with <Highlight>odoo</Highlight>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
              We combine deep technical expertise with a strong grasp of business
              and accounting fundamentals to build systems that actually drive ROI.
            </p>
            <div className="mt-8">
              <Button href={site.bookDemo} external>
                <ArrowIcon />
                Book a demo
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="grid-frame px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/services">
            <SectionBadge>Odoo Services</SectionBadge>
          </Link>
          <h2 className="font-display mt-6 text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
            The <Highlight>right tech</Highlight> made for your business
          </h2>
          <p className="mt-5 text-muted">
            Not just Odoo experts—we’re architects of better operations.
          </p>
        </div>
      </section>

      <Marquee
        items={[
          "Odoo ERP",
          "ERP Consulting",
          "Software Development",
          "System & API Integration",
          "OTS",
          "Odoo Implementation",
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:grid-cols-2 lg:px-8">
        {homeServices.map((service, i) => (
          <article
            key={service.title}
            className="rounded-[28px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
          >
            <p className="text-xs font-medium text-black/40">0{i + 1}</p>
            <h3 className="font-display mt-4 text-2xl font-bold">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-8 sm:grid-cols-2 lg:px-8">
        <Stat value="0+" label="Projects Completed" />
        <Stat value="0+" label="Users Trained" />
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
            Check out some of the <Highlight>popular</Highlight> odoo apps below
          </h2>
        </div>
        <Marquee
          items={[
            "Websites",
            "Sales",
            "Finance",
            "Inventory & Manufacturing",
            "Marketing",
            "Services",
            "Human Resources",
            "Website Builder",
          ]}
          slow
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {odooApps.map((app) => (
            <article
              key={app.title}
              className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            >
              <div className="relative h-44 bg-[#0b1020]">
                <Image
                  src={app.image}
                  alt=""
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{app.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {app.description}
                </p>
                <div className="mt-5">
                  <Button href={site.bookDemo} external>
                    Book a demo
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
            Driving
            <br />
            <Highlight>Global impact</Highlight>
            <br />
            through
            <br />
            smart engineering
          </h2>
        </div>
        <div>
          <p className="text-muted leading-relaxed">
            Omni Tech Solutions is a tech-driven consulting firm focused on
            digitising businesses through smart Odoo implementations. With a team
            that blends engineering expertise and business insight, we bridge the
            gap between tech and strategy.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Based in Belgium and Luxembourg, we help companies scale smarter by
            optimising systems, automating workflows, and tailoring Odoo to fit
            real business needs.
          </p>
          <div className="mt-8">
            <Button href="/about">
              About Us
              <ArrowIcon />
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[28px] bg-white px-8 py-10">
      <p className="font-display text-6xl font-extrabold tracking-tight">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[380px]">
      <div className="absolute left-0 top-0 w-[78%] overflow-hidden rounded-3xl bg-[#0b1224] p-4 shadow-2xl ring-1 ring-white/10">
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-white/50">
          OTS Custom Module
        </p>
        <pre className="overflow-hidden font-mono text-[11px] leading-5 text-blue-200/90">
{`from odoo import models, fields, api

class LibraryBook(models.Model):
    _name = "library.book"
    _description = "Book"

    name = fields.Char(required=True)
    isbn = fields.Char()
    author_id = fields.Many2one("res.partner")`}
        </pre>
      </div>
      <div className="relative ml-auto mt-16 w-[92%] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
        <Image
          src="/images/dashboard.png"
          alt="Odoo dashboard preview"
          width={1088}
          height={780}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}
