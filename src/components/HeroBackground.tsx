"use client";

import { MeshGradient } from "@mesh-gradient/react";
import { useEffect, useState } from "react";

const desktopColors: [string, string, string, string] = [
  "#fbfaf9",
  "#ddd9ff",
  "#a39cff",
  "#6a58ef",
];
const phoneColors: [string, string, string, string] = [
  "#fbfaf9",
  "#d8d4ff",
  "#9b90ff",
  "#5c3dff",
];

export function HeroBackground() {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsPhone(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <div className="hero-bg" aria-hidden="true">
      <MeshGradient
        key={isPhone ? "phone-mesh" : "desktop-mesh"}
        className="hero-bg-mesh"
        options={{
          colors: isPhone ? phoneColors : desktopColors,
          seed: isPhone ? 11 : 18,
          animationSpeed: 0.35,
          appearance: "smooth",
        }}
      />
      <div className="hero-bg-veil" />
    </div>
  );
}
