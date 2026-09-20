import { client } from "../sanity/lib/client";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services: { slug: string }[] = await client.fetch(
    `*[_type == "service"]{ "slug": slug.current }`,
  );

  const serviceUrls = services.map((s) => ({
    url: `https://centex-serwis.pl/uslugi/${s.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://centex-serwis.pl",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://centex-serwis.pl/uslugi",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://centex-serwis.pl/galeria",
      lastModified: new Date(),
      priority: 0.6,
    },
    ...serviceUrls,
  ];
}
