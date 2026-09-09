import { CustomerLogos } from "@/components/CustomerLogos";
import { HeroBackground } from "@/components/HeroBackground";
import { HomeHero } from "@/components/HomeHero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ReasonsShowcase } from "@/components/ReasonsShowcase";
import { ServicesShowcase } from "@/components/ServicesShowcase";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <div className="top-stage">
        <HeroBackground />
        <HomeHero />
        <ProductShowcase />
      </div>
      <CustomerLogos />
      <ReasonsShowcase />
      <ServicesShowcase />
    </>
  );
}
