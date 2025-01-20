import { serviceData } from "@/data/service-data";
import { promotionData } from "@/data/promotion-data";
import type { MetadataRoute } from "next";

const BASE_URL = "https://Spa Ojasmassagespa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "legal/privacy"];

  const servicePages = Object.keys(serviceData).map(
    (categoryUrl) => `service/${categoryUrl}`
  );

  const promotionPages = Object.keys(promotionData).map(
    (promotionType) => `promotion/${promotionType}`
  );

  const allPages = [...staticPages, ...servicePages, ...promotionPages];

  const urls = allPages.map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  return urls;
}
