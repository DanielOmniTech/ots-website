"use client";

import { MeshGradient } from "@mesh-gradient/react";

export function HeroBackground() {
  return (
    <MeshGradient
      className="hero-bg"
      aria-hidden="true"
      options={{
        colors: ["#faf9f6", "#faf9f6", "#cfc6ff", "#8f7eff"],
        seed: 18,
        animationSpeed: 0.35,
        appearance: "smooth",
      }}
    />
  );
}
