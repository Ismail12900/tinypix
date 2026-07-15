import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://tinypix-hldi.vercel.app"),
  title: "TinyPix — Free Online Image Compressor | Compress JPG, PNG & WebP",
  description:
    "Compress, resize and convert images for free, directly in your browser. No uploads, no servers, 100% private.",
  openGraph: {
    title: "TinyPix — Free Online Image Compressor",
    description:
      "Compress, resize and convert images right in your browser. 100% private, free and unlimited.",
    images: ["/og-image.png"],
    type: "website",
  },
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