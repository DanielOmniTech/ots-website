export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="whitespace-nowrap">
      <span className="highlight-brace">{"{"}</span>
      <span className="text-[#6d8cff]">{children}</span>
      <span className="highlight-brace">{"}"}</span>
    </span>
  );
}

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-black px-4 py-1.5 text-xs font-medium tracking-wide text-white">
      {children}
    </span>
  );
}
