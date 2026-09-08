import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "white" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[linear-gradient(135deg,#5b4dff_0%,#7a6bff_100%)] text-white shadow-[0_10px_30px_rgba(91,77,255,0.35)]",
    white: "bg-white text-black",
    ghost: "bg-white/10 text-white ring-1 ring-white/20",
  }[variant];

  const cls = `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:brightness-110 ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M4 12L12 4M12 4H6.5M12 4V9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
