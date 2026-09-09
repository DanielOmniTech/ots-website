import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, type Locale } from "@/components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Omni Tech Solutions",
    template: "%s | Omni Tech Solutions",
  },
  description:
    "Odoo implementation, customization, and ERP consulting for businesses in Belgium and Luxembourg.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const raw = (await cookies()).get("ots-locale")?.value;
  const initialLocale: Locale = raw === "nl" || raw === "en" ? raw : "en";

  return (
    <html lang={initialLocale} suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className}`}>
        <LanguageProvider initialLocale={initialLocale}>
          <div className="page">
            <Header />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
