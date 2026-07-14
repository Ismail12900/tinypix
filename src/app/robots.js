export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tinypix-hldi.vercel.app/sitemap.xml",
  };
}