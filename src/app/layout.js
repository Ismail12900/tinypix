import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "TinyPix — Free Online Image Compressor | Compress JPG, PNG & WebP",
  description:
    "Compress images for free, directly in your browser. No uploads, no servers, 100% private. Reduce JPG, PNG & WebP file size in seconds while keeping great quality.",
  keywords: [
    "image compressor",
    "compress images online",
    "reduce image size",
    "compress jpg",
    "compress png",
    "compress webp",
    "free image compression",
    "image optimizer",
    "TinyPix",
  ],
  openGraph: {
    title: "TinyPix — Free Online Image Compressor",
    description:
      "Compress images for free, right in your browser — no uploads, 100% private, blazing fast.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}