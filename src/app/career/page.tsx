import type { Metadata } from "next";
import { ArrowIcon, Button } from "@/components/Button";
import { Highlight, SectionBadge } from "@/components/Highlight";
import { jobs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Career",
};

const culture = [
  {
    title: "Supportive Growth Culture",
    body: "We invest in your growth, not just your output. From mentorship to training, we help you level up both technically and professionally.",
  },
  {
    title: "Collaborative, Low-Ego Team",
    body: "You’ll work with people who listen, challenge ideas (not individuals), and celebrate wins — big or small — as a team.",
  },
  {
    title: "Business-Savvy Engineering",
    body: "This isn’t a place where devs are kept in the dark. You’ll understand the “why” behind the work, bridging the gap between business goals and technical solutions.",
  },
  {
    title: "Work-Life Balance",
    body: "No hustle-culture nonsense here. We respect boundaries, value focused work, and understand the importance of time offline.",
  },
];

export default function CareerPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden text-white">
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-32 text-center lg:px-8 lg:pt-36">
          <h1 className="font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-7xl">
            Build What Matters. Grow With Us.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Join a team where engineering meets business insight — and your work
            directly shapes smarter, scalable companies.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionBadge>Our Team</SectionBadge>
        <h2 className="font-display mt-5 max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
          Your life at <Highlight>Omni tech solutions</Highlight>
        </h2>
        <div className="mt-8 max-w-3xl space-y-4 text-muted leading-relaxed">
          <p>
            At Omni Tech Solutions, we believe that great work begins with a
            great environment. We’ve built a culture where engineers,
            problem-solvers, and entrepreneurs come together to create real
            impact.
          </p>
          <p>
            Here, you won’t just write code or manage projects — you’ll help
            shape how businesses work. We value clarity, collaboration, and
            growth, empowering every team member to take ownership, think big,
            and make a difference.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {culture.map((item) => (
            <article key={item.title} className="rounded-[28px] bg-white p-8">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <SectionBadge>Job Listing</SectionBadge>
        <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
            Current <Highlight>job opennings</Highlight>
          </h2>
          <p className="max-w-md text-sm text-muted">
            Explore open roles across development, strategy, and ERP consultancy
            — and find the one that fits your future.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="rounded-[28px] bg-white p-8"
            >
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black px-3 py-1 text-xs text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold">{job.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {job.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-black/60">
                {job.meta.map((item) => (
                  <span key={item} className="rounded-full bg-black/5 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Button href="/contact">
                  Apply now
                  <ArrowIcon />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
