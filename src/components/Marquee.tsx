export function Marquee({
  items,
  slow,
}: {
  items: readonly string[];
  slow?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-black/10 py-4">
      <div
        className={`flex w-max gap-10 ${slow ? "marquee-track-slow" : "marquee-track"}`}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.22em] text-black/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
