import type { Metadata } from "next";
import { ServiceDetailContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "ERP Implementation",
};

export default function ErpImplementationPage() {
  return <ServiceDetailContent kind="erp" />;
}
