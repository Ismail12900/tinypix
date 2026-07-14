import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "TinyPix — Free Online Image Compressor | Compress JPG, PNG & WebP",
  description:
    "Compress images for free, directly in your browser. No uploads, no servers, 100% private. Reduce JPG, PNG & WebP file size in seconds while keeping great quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${cairo.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}