import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <Image
        src="/images/footer-bg.png"
        alt=""
        fill
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(80,90,255,0.35),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3 text-sm text-white/80">
          <Link href="/" className="block hover:text-white">
            Home
          </Link>
          <Link href="/services" className="block hover:text-white">
            Services
          </Link>
          <Link href="/about" className="block hover:text-white">
            About
          </Link>
          <Link href="/career" className="block hover:text-white">
            Career
          </Link>
        </div>
        <div className="space-y-3 text-sm text-white/80">
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="block hover:text-white">
            LinkedIn
          </a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="block hover:text-white">
            Facebook
          </a>
        </div>
        {site.offices.map((office) => (
          <div key={office.label} className="text-sm text-white/80">
            <p className="mb-2 font-medium text-white">{office.label}</p>
            {office.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 pb-10 lg:flex-row lg:items-end lg:px-8">
        <p className="text-xs text-white/60">
          2026 All rights reserved | {site.name}
        </p>
        <Link href="/cookie-policy" className="text-xs text-white/60 hover:text-white">
          Cookie Policy
        </Link>
        <Image
          src="/images/logo.png"
          alt={site.name}
          width={72}
          height={72}
          className="h-14 w-14 object-contain opacity-90"
        />
      </div>
    </footer>
  );
}
