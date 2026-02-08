import { getAllProjects } from "@/lib/data";
import { ProjectCard } from "./project-card";

/** Server Component - zero JS shipped to client */
export function ProjectGrid() {
  const projects = getAllProjects();

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mb-10 flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Projects
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-glass-border to-transparent" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
