"use client";

import { MeshGradient } from "@mesh-gradient/react";

export function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <MeshGradient
        className="hero-bg-mesh"
        options={{
          colors: ["#fbfaf9", "#ece8ff", "#d9d2ff", "#c4bbff"],
          seed: 18,
          animationSpeed: 0.18,
          appearance: "smooth",
        }}
      />
    </div>
  );
}
