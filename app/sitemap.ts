import type { MetadataRoute } from "next";
import { portfolioProfile } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: portfolioProfile.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${portfolioProfile.siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
