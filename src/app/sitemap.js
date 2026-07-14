export default function sitemap() {
  return [
    {
      url: "https://tinypix-hldi.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://tinypix-hldi.vercel.app/how-to-compress-images",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}