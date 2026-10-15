import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/api/"],
    },
    sitemap: "https://www.centex-serwis.pl/sitemap.xml",
    host: "https://www.centex-serwis.pl",
  };
}
