import type { Metadata } from "next";
import { ServiceDetailContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Business Process Audit",
};

export default function BusinessProcessAuditPage() {
  return <ServiceDetailContent kind="audit" />;
}
