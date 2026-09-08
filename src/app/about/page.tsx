import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { Highlight, SectionBadge } from "@/components/Highlight";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 lg:grid-cols-2 lg:px-8 lg:pt-36">
          <div>
            <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-6xl">
              omni tech engineers your{" "}
              <span className="text-[#6d8cff]">growth</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/80">
              We bridge the gap — expert engineers with real business insight,
              delivering Odoo systems that actually work the way you do.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/about-diagram.png"
              alt="Official Odoo Partner"
              width={944}
              height={578}
              className="h-auto w-full rounded-3xl"
              priority
            />
            <Image
              src="/images/odoo-ready.png"
              alt="Odoo Ready Partner"
              width={220}
              height={88}
              className="absolute bottom-6 left-6 h-12 w-auto"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <SectionBadge>Our Story</SectionBadge>
          <h2 className="font-display mt-6 text-4xl font-extrabold uppercase sm:text-5xl">
            read <Highlight>Our Story</Highlight>
          </h2>
        </div>
        <div className="mt-10 space-y-6 text-[17px] leading-8 text-muted">
          <p className="drop-cap">
            Omni Tech Solutions is an engineering firm specialised in digitising
            businesses with Odoo. What sets us apart is that we work with strong
            technical profiles who also possess strong business and accounting
            knowledge. This simplifies the communication process and leads to a
            better customer experience with a single point of contact. Whether
            it’s one dedicated expert or a small specialized team — we guide you
            through every aspect of your Odoo system. A true one-stop shop for
            all your questions, challenges, and ERP ideas, ensuring clarity,
            consistency, and exceptional results.
          </p>
          <p>
            Our role begins with understanding your business needs, collaborating
            closely to identify business requirements and define objectives.
            Through in-depth analyses and consultations, we develop tailor-made
            solutions that perfectly match your companies specific demands. With
            a keen eye for detail and thorough knowledge of the Odoo ecosystem,
            we will make sure your Odoo implementation will be a success.
          </p>
          <p>
            We prioritise digitising your company&apos;s business processes using
            existing Odoo functionalities or apps. In cases where standard
            functionalities don&apos;t suffice, our experienced Odoo engineers
            step in. They adeptly customise Odoo modules to align with your
            unique workflows and business processes. Whether it involves
            customising existing modules or crafting entirely new Odoo apps, we
            guarantee seamless integration of the system into your business
            environment.
          </p>
          <p>
            Our goal is not only to deliver an Odoo implementation but to provide
            a sustainable and scalable business software solution that enhances
            efficiency, reduces costs, and enables growth. Our passion lies in
            building solutions that not only work today but also support the
            future ambitions of your business.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <Stat value="0+" label="Projects Completed" />
          <Stat value="0+" label="Users Trained" />
          <Stat value="0K+" label="Lines of code written" />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[28px] bg-white px-6 py-8 text-center">
      <p className="font-display text-5xl font-extrabold">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
