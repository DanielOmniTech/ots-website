"use client";

import { useRef } from "react";
import type { CustomerLogo } from "@/lib/customers";

function setPlaybackRate(element: HTMLElement | null, rate: number) {
  element?.getAnimations().forEach((animation) => {
    animation.playbackRate = rate;
  });
}

function LogoRow({
  logos,
  decorative,
}: {
  logos: CustomerLogo[];
  decorative?: boolean;
}) {
  return (
    <div className="customers-row" aria-hidden={decorative || undefined}>
      {logos.map((logo, index) => (
        <img
          key={`${logo.src}-${index}`}
          src={logo.src}
          alt={decorative ? "" : logo.alt}
          className="customers-logo"
        />
      ))}
    </div>
  );
}

export function ClientsMarquee({ logos }: { logos: CustomerLogo[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="customers-marquee"
      onPointerEnter={() => setPlaybackRate(trackRef.current, 0.5)}
      onPointerLeave={() => setPlaybackRate(trackRef.current, 1)}
    >
      <div className="customers-track" ref={trackRef}>
        <LogoRow logos={logos} />
        <LogoRow logos={logos} decorative />
      </div>
    </div>
  );
}
