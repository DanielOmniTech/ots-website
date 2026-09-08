import { ClientsMarquee } from "@/components/ClientsMarquee";
import { getCustomerLogos } from "@/lib/customers";

export function CustomerLogos() {
  const logos = getCustomerLogos();

  if (logos.length === 0) {
    return null;
  }

  const copies = Math.max(4, Math.ceil(6 / logos.length));
  const track = Array.from({ length: copies }, () => logos).flat();

  return (
    <section className="customers">
      <p className="customers-title">
        Join our clients running on real efficiency
      </p>
      <ClientsMarquee logos={track} />
    </section>
  );
}
