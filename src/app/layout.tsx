import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${inter.className}`}>
        <LanguageProvider>
          <div className="page">
            <Header />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
