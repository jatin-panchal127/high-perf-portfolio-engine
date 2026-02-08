import type { Project } from "./types";

export const siteConfig = {
  name: "Alex Morgan",
  title: "Full-Stack Developer",
  description:
    "I build high-performance web applications with modern technologies. Focused on React, Next.js, and cloud-native architectures.",
  url: "https://alexmorgan.dev",
  ogImage: "/og.png",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
} as const;

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform with WebSocket streaming, interactive charts, and role-based access control.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "D3.js"],
    image: "/projects/dashboard.webp",
    href: "https://github.com",
    featured: true,
  },
  {
    id: "ecommerce-engine",
    title: "E-Commerce Engine",
    description:
      "Headless commerce solution with Stripe integration, inventory management, and sub-200ms API response times.",
    tags: ["React", "Node.js", "Redis", "Stripe"],
    image: "/projects/ecommerce.webp",
    href: "https://github.com",
    featured: true,
  },
  {
    id: "ai-content-platform",
    title: "AI Content Platform",
    description:
      "AI-powered content generation tool with collaborative editing, version history, and multi-model support.",
    tags: ["Next.js", "OpenAI", "Prisma", "Vercel AI"],
    image: "/projects/ai-platform.webp",
    href: "https://github.com",
    featured: true,
  },
  {
    id: "devops-pipeline",
    title: "CI/CD Pipeline Builder",
    description:
      "Visual pipeline builder for automating build, test, and deployment workflows across cloud providers.",
    tags: ["Go", "Docker", "Kubernetes", "Terraform"],
    image: "/projects/devops.webp",
    href: "https://github.com",
  },
  {
    id: "realtime-collab",
    title: "Real-Time Collaboration",
    description:
      "Multiplayer document editor with CRDT-based conflict resolution and presence awareness.",
    tags: ["TypeScript", "Y.js", "WebRTC", "Hocuspocus"],
    image: "/projects/collab.webp",
    href: "https://github.com",
  },
  {
    id: "mobile-fitness",
    title: "Fitness Tracker App",
    description:
      "Cross-platform mobile app with workout tracking, progress analytics, and social challenges.",
    tags: ["React Native", "Expo", "Supabase", "Chart.js"],
    image: "/projects/fitness.webp",
    href: "https://github.com",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjects(): Project[] {
  return projects;
}
