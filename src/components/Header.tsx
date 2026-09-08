"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowIcon, Button } from "@/components/Button";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <div className="flex w-full items-center justify-between rounded-full bg-black/35 px-3 py-2 backdrop-blur-md ring-1 ring-white/10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt=""
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-display text-[11px] font-semibold leading-tight tracking-[0.14em] text-white">
            OMNI TECH
            <br />
            SOLUTIONS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/90 lg:flex">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 ${
                    pathname.startsWith("/services") ? "text-white" : "text-white/85"
                  }`}
                >
                  {item.label}
                  <Chevron />
                </Link>
                {servicesOpen ? (
                  <div className="absolute left-1/2 top-full z-20 w-52 -translate-x-1/2 pt-3">
                    <div className="rounded-2xl bg-white p-2 text-black shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm hover:bg-black/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? "text-white" : "text-white/85"}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-3 py-1.5 text-xs text-white ring-1 ring-white/15">
            EN <Chevron />
          </span>
          <Button href={site.portal} variant="white" external>
            Portal <Chevron className="text-black" />
          </Button>
          <Button href="/contact">
            <ArrowIcon />
            Contact us
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-white lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-5 rounded-3xl bg-[#0b1020] p-5 text-white shadow-2xl lg:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href={site.portal} target="_blank" rel="noreferrer">
              Portal
            </a>
            <Button href="/contact" className="justify-center">
              Contact us
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={`h-3 w-3 ${className}`} fill="none" aria-hidden>
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
