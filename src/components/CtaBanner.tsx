import { ArrowIcon, Button } from "@/components/Button";
import { Highlight } from "@/components/Highlight";

export function CtaBanner() {
  return (
    <section className="px-4 pb-16 sm:px-6">
      <div className="hero-glow relative mx-auto max-w-7xl overflow-hidden rounded-[32px] px-6 py-16 text-center text-white sm:px-12">
        <h2 className="font-display mx-auto max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-6xl">
          Join our clients running on <Highlight>real efficiency</Highlight>
        </h2>
        <div className="mt-8">
          <Button href="/contact">
            <ArrowIcon />
            Get started now
          </Button>
        </div>
      </div>
    </section>
  );
}
