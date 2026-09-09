import type { Metadata } from "next";
import { ContactContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <ContactContent />;
}
