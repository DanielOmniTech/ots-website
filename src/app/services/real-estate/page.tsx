import type { Metadata } from "next";
import { ServiceDetailContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Real Estate",
};

export default function RealEstatePage() {
  return <ServiceDetailContent kind="realEstate" />;
}
