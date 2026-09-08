import type { ReactNode } from "react";

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 200 200" className="service-icon" aria-hidden="true">
      {children}
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  process: (
    <Frame>
      <rect x="48" y="36" width="104" height="128" rx="18" fill="#fff" />
      <rect x="64" y="52" width="72" height="22" rx="8" fill="#f3f0ea" />
      <rect x="76" y="59" width="32" height="8" rx="4" fill="#cfc9c0" />
      <path
        d="M100 74 v12 M95 82 l5 6 5-6"
        stroke="#2f00ff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="64" y="90" width="72" height="22" rx="8" fill="#2f00ff" />
      <rect x="76" y="97" width="40" height="8" rx="4" fill="#fff" />
      <path
        d="M100 112 v12 M95 120 l5 6 5-6"
        stroke="#2f00ff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="64" y="128" width="72" height="22" rx="8" fill="#111" />
      <rect x="76" y="135" width="24" height="8" rx="4" fill="#fff" />
    </Frame>
  ),
  implementation: (
    <Frame>
      <rect x="48" y="52" width="104" height="96" rx="16" fill="#fff" />
      <rect x="64" y="72" width="72" height="10" rx="5" fill="#2f00ff" />
      <rect x="64" y="92" width="54" height="8" rx="4" fill="#e8e4dc" />
      <rect x="64" y="108" width="40" height="8" rx="4" fill="#e8e4dc" />
      <circle cx="136" cy="128" r="16" fill="#2f00ff" />
      <path
        d="M129 128 l5 5 11-13"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  development: (
    <Frame>
      <rect x="42" y="68" width="116" height="64" rx="18" fill="#fff" />
      <text
        x="100"
        y="112"
        textAnchor="middle"
        fill="#2f00ff"
        fontSize="42"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
      >
        {"{ }"}
      </text>
    </Frame>
  ),
  migration: (
    <Frame>
      <rect x="36" y="64" width="48" height="72" rx="12" fill="#fff" />
      <rect x="44" y="78" width="32" height="8" rx="4" fill="#e8e4dc" />
      <rect x="44" y="92" width="24" height="8" rx="4" fill="#e8e4dc" />
      <rect x="44" y="106" width="28" height="8" rx="4" fill="#2f00ff" />
      <rect x="116" y="64" width="48" height="72" rx="12" fill="#fff" />
      <rect x="124" y="78" width="32" height="8" rx="4" fill="#e8e4dc" />
      <rect x="124" y="92" width="24" height="8" rx="4" fill="#e8e4dc" />
      <rect x="124" y="106" width="28" height="8" rx="4" fill="#111" />
      <path
        d="M90 100 H110 M102 90 l12 10 -12 10"
        stroke="#2f00ff"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Frame>
  ),
  support: (
    <Frame>
      <rect x="34" y="44" width="92" height="58" rx="18" fill="#fff" />
      <rect x="50" y="60" width="50" height="8" rx="4" fill="#e8e4dc" />
      <rect x="50" y="76" width="32" height="8" rx="4" fill="#e8e4dc" />
      <rect x="74" y="90" width="92" height="58" rx="18" fill="#2f00ff" />
      <rect x="92" y="106" width="52" height="8" rx="4" fill="#fff" />
      <rect x="92" y="122" width="34" height="8" rx="4" fill="#cfc8ff" />
      <circle cx="64" cy="164" r="14" fill="#fff" />
      <circle cx="64" cy="159" r="5.5" fill="#cfc9c0" />
      <path d="M54 175c2-7 6-11 10-11s8 4 10 11" fill="#cfc9c0" />
      <circle cx="92" cy="164" r="14" fill="#fff" />
      <circle cx="92" cy="159" r="5.5" fill="#2f00ff" />
      <path d="M82 175c2-7 6-11 10-11s8 4 10 11" fill="#2f00ff" />
    </Frame>
  ),
  api: (
    <Frame>
      <rect x="40" y="52" width="120" height="96" rx="18" fill="#fff" />
      <circle cx="58" cy="72" r="4" fill="#e8e4dc" />
      <circle cx="72" cy="72" r="4" fill="#e8e4dc" />
      <circle cx="86" cy="72" r="4" fill="#2f00ff" />
      <rect x="52" y="92" width="18" height="10" rx="3" fill="#2f00ff" />
      <rect x="76" y="94" width="64" height="7" rx="3" fill="#e8e4dc" />
      <rect x="52" y="112" width="22" height="10" rx="3" fill="#111" />
      <rect x="80" y="114" width="48" height="7" rx="3" fill="#e8e4dc" />
      <text
        x="100"
        y="142"
        textAnchor="middle"
        fill="#2f00ff"
        fontSize="16"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
      >
        {"</>"}
      </text>
    </Frame>
  ),
  dashboard: (
    <Frame>
      <rect x="44" y="48" width="112" height="108" rx="18" fill="#fff" />
      <rect x="62" y="108" width="16" height="26" rx="4" fill="#e8e4dc" />
      <rect x="86" y="90" width="16" height="44" rx="4" fill="#2f00ff" />
      <rect x="110" y="78" width="16" height="56" rx="4" fill="#111" />
      <path
        d="M60 86 L86 74 L112 80 L140 62"
        stroke="#2f00ff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="140" cy="62" r="5" fill="#2f00ff" />
    </Frame>
  ),
  accounting: (
    <Frame>
      <rect x="52" y="44" width="96" height="116" rx="16" fill="#fff" />
      <rect x="68" y="64" width="64" height="8" rx="4" fill="#2f00ff" />
      <rect x="68" y="84" width="48" height="6" rx="3" fill="#e8e4dc" />
      <rect x="68" y="98" width="56" height="6" rx="3" fill="#e8e4dc" />
      <rect x="68" y="112" width="40" height="6" rx="3" fill="#e8e4dc" />
      <text
        x="100"
        y="142"
        textAnchor="middle"
        fill="#2f00ff"
        fontSize="22"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
      >
        €
      </text>
    </Frame>
  ),
};

export function ServiceIcon({ id }: { id: string }) {
  return icons[id] ?? null;
}
