export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="inner-hero">
      {eyebrow ? <p className="inner-eyebrow">{eyebrow}</p> : null}
      <h1 className="inner-title">{title}</h1>
      <p className="inner-description">{description}</p>
    </section>
  );
}
