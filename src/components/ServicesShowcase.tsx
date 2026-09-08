import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcons";
import { homeServices } from "@/lib/site";

export function ServicesShowcase() {
  return (
    <section className="services-showcase">
      <div className="services-showcase-inner">
        <h2 className="section-heading">
          Your One Stop Shop
          <br />
          For All Your Needs
        </h2>
        <div className="services-grid">
          {homeServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-card"
            >
              <div className="service-card-visual">
                <ServiceIcon id={service.id} />
              </div>
              <p className="service-card-title">{service.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
