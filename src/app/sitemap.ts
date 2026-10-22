import { MetadataRoute } from "next";
import { articles } from "@/data/articles";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://istoselides-rethymno.gr";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/web-design",
    "/seo",
    "/tourism-marketing",
    "/digital-marketing/google-meta-ads-management",
    "/social-media-management",
    "/drone-video-photography",
    "/arthra",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/arthra" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/web-design" || route === "/seo" ? 0.9 : 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = articles.map((post) => ({
    url: `${baseUrl}/arthra/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...postRoutes];
}
