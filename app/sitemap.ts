import type { MetadataRoute } from "next";
// WAZNE: zostaw swoj dotychczasowy import klienta Sanity z obecnego sitemap.ts
// (ponizsza sciezka jest tylko przykladem).
import { client } from "../sanity/lib/client";

const BASE = "https://www.centex-serwis.pl";

type ServiceRow = { slug: string; updated: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // WAZNE: skopiuj zapytanie z obecnego sitemap.ts, jesli typ dokumentu
  // w Sanity nazywa sie inaczej niz "service".
  const services: ServiceRow[] = await client.fetch(
    `*[_type == "service" && defined(slug.current)]{
      "slug": slug.current,
      "updated": _updatedAt
    }`,
  );

  return [
    {
      url: BASE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/galeria`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...services.map((s) => ({
      url: `${BASE}/uslugi/${s.slug}`,
      lastModified: new Date(s.updated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
