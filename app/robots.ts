import type { MetadataRoute } from "next";
import { portfolioProfile } from "@/lib/portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/blog",
    },
    sitemap: `${portfolioProfile.siteUrl}/sitemap.xml`,
  };
}
