import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TinyPix — ضغط الصور مجانًا | Free Image Compressor",
  description:
    "اضغط صورك مجانًا وبسرعة مباشرة فالمتصفح. بلا رفع للسيرفرات، خصوصية كاملة. Compress JPG, PNG & WebP images for free, directly in your browser. No uploads, 100% private.",
  keywords: [
    "ضغط الصور",
    "تصغير حجم الصور",
    "ضغط صور اونلاين",
    "image compressor",
    "compress images online",
    "reduce image size",
    "compress jpg",
    "compress png",
    "TinyPix",
  ],
  openGraph: {
    title: "TinyPix — ضغط الصور مجانًا",
    description:
      "اضغط صورك مجانًا مباشرة فالمتصفح — بلا رفع، خصوصية كاملة، وسرعة فائقة.",
    type: "website",
    locale: "ar_MA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}