import type { Metadata } from "next";
import { ServiceDetailContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Accounting & Finance Reporting",
};

export default function AccountingFinancePage() {
  return <ServiceDetailContent kind="accounting" />;
}
