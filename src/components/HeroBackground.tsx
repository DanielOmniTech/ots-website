"use client";

import { MeshGradient } from "@mesh-gradient/react";

export function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <MeshGradient
        key="blue-offwhite"
        className="hero-bg-mesh"
        options={{
          colors: ["#fbfaf9", "#d8d4ff", "#8a7eff", "#2f00ff"],
          seed: 18,
          animationSpeed: 0.35,
          appearance: "smooth",
        }}
      />
      <div className="hero-bg-veil" />
    </div>
  );
}
