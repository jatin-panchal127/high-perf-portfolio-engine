import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <>
      <header className="glass fixed top-0 right-0 left-0 z-50 border-b border-glass-border">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="font-mono text-sm font-bold tracking-wider text-accent"
          >
            AM.dev
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#projects"
              className="text-[oklch(0.65_0.02_260)] transition-colors hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[oklch(0.65_0.02_260)] transition-colors hover:text-white"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <Hero />

        <div className="space-y-32 pb-32">
          <ProjectGrid />
          <ContactForm />
        </div>
      </main>

      <footer className="border-t border-glass-border py-8 text-center text-sm text-[oklch(0.45_0.02_260)]">
        <p>
          &copy; {new Date().getFullYear()} Alex Morgan. Built with Next.js 16 &
          React 19.
        </p>
      </footer>
    </>
  );
}
