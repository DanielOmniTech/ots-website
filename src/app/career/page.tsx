import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { jobs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Career",
};

export default function CareerPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Career"
        title="We are looking for talented Odoo'ers"
        description="Join a small team that implements Odoo for companies that need ERP to work in the real world — not just on a slide."
      />
      <ul className="job-list">
        {jobs.map((job) => (
          <li key={job.title} className="inner-card">
            <h2>{job.title}</h2>
            <p>
              {job.type} · {job.location}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
