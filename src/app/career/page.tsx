import type { Metadata } from "next";
import { CareerContent } from "@/components/LocalizedPages";

export const metadata: Metadata = {
  title: "Career",
};

export default function CareerPage() {
  return <CareerContent />;
}
