import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { getAllProjects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
