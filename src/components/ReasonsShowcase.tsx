"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { useT } from "@/components/LanguageProvider";
import type { Messages } from "@/lib/i18n";

function ChipIcon() {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
      <rect
        x="5"
        y="5"
        width="10"
        height="10"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 2.5v2.5M12 2.5v2.5M8 15v2.5M12 15v2.5M2.5 8h2.5M2.5 12h2.5M15 8h2.5M15 12h2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M12 4 4 8l8 4 8-4-8-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M4 12l8 4 8-4M4 16l8 4 8-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5 19c.8-3.4 3.4-5.2 7-5.2s6.2 1.8 7 5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SkillsVisual({ t }: { t: Messages }) {
  return (
    <div className="reason-mini-card" data-reveal>
      <p className="reason-mini-caption">{t.reasons.skillsCaption}</p>
      <span className="reason-pill reason-pill-accent">{t.reasons.skillsTagTech}</span>
      <span className="reason-pill">{t.reasons.skillsTagBiz}</span>
    </div>
  );
}

function PlanVisual({ t }: { t: Messages }) {
  return (
    <div className="reason-mini-card reason-plan" data-reveal>
      <p className="reason-plan-title">{t.reasons.planTitle}</p>
      <ul className="reason-plan-list">
        <li>{t.reasons.planPrice}</li>
        <li>{t.reasons.planTime}</li>
        <li>{t.reasons.planReady}</li>
      </ul>
    </div>
  );
}

function SpocVisual({ t }: { t: Messages }) {
  return (
    <div className="reason-spoc" data-reveal>
      <div className="reason-spoc-crowd" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="reason-spoc-note">{t.reasons.spocExtra}</p>
      <div className="reason-spoc-you">
        <span className="reason-spoc-avatar">1</span>
        <p>{t.reasons.spocYou}</p>
      </div>
    </div>
  );
}

export function ReasonsShowcase() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = [...root.querySelectorAll<HTMLElement>("[data-reveal]")];

    const showAll = () => {
      items.forEach((el) => el.classList.add("is-revealed"));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showAll();
      return;
    }

    const update = () => {
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = vh * 0.42;

      items.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, (start - top) / (start - end)));
        if (progress > 0.2) el.classList.add("is-revealed");
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="reasons" ref={sectionRef}>
      <div className="reasons-inner">
        <div className="reasons-intro">
          <div className="reasons-badge">
            <span className="reasons-badge-icon">
              <ChipIcon />
            </span>
            <p>{t.reasons.badge}</p>
          </div>
          <h2 className="section-heading">{t.reasons.title}</h2>
          <p className="reasons-lead">{t.reasons.lead}</p>
        </div>
        <div className="reasons-grid">
          <article className="reason-card">
            <div className="reason-copy">
              <div className="reason-icon">
                <LayersIcon />
              </div>
              <p className="reason-title">{t.reasons.skillsTitle}</p>
              <p className="reason-text">{t.reasons.skillsText}</p>
            </div>
            <SkillsVisual t={t} />
          </article>
          <article className="reason-card">
            <div className="reason-copy">
              <div className="reason-icon">
                <EyeIcon />
              </div>
              <p className="reason-title">{t.reasons.transparentTitle}</p>
              <p className="reason-text">{t.reasons.transparentText}</p>
              <Link
                href="/services/business-process-audit"
                className="reason-more"
              >
                {t.reasons.moreInfo}
              </Link>
            </div>
            <PlanVisual t={t} />
          </article>
          <article className="reason-card">
            <div className="reason-copy">
              <div className="reason-icon">
                <UserIcon />
              </div>
              <p className="reason-title">{t.reasons.spocTitle}</p>
              <p className="reason-text">{t.reasons.spocText}</p>
            </div>
            <SpocVisual t={t} />
          </article>
        </div>
      </div>
    </section>
  );
}
