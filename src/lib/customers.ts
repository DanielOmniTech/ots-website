import fs from "fs";
import path from "path";

const CUSTOMERS_DIR = path.join(process.cwd(), "public", "customers");
const IMAGE_EXT = /\.(avif|gif|jpe?g|png|svg|webp)$/i;

export type CustomerLogo = {
  src: string;
  alt: string;
};

export function getCustomerLogos(): CustomerLogo[] {
  if (!fs.existsSync(CUSTOMERS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(CUSTOMERS_DIR)
    .filter((file) => IMAGE_EXT.test(file) && !file.startsWith("."))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => ({
      src: `/customers/${encodeURIComponent(file)}`,
      alt: file
        .replace(IMAGE_EXT, "")
        .replace(/[_-]+/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    }));
}
