"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import { GithubIcon } from "@/components/Icons";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const { projects } = portfolioContent;
  const cardsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined" || shouldReduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current?.children;
    if (!cards) return;

    // Staggered reveal using standard scroll triggers (no pinning)
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [shouldReduceMotion]);

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/20 dark:border-zinc-800/20"
    >
      {/* Background glow spot */}
      <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent opacity-15 pointer-events-none" />

      <div className="flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 md:text-center md:items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">
            My Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-foreground/60 leading-relaxed font-sans mt-2">
            A selection of SaaS platforms, e-commerce integrations, and production full-stack systems.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6 group hover:border-primary/45 dark:hover:border-accent/45 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground/90 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-foreground/75 hover:text-primary dark:hover:text-accent transition-all duration-300 cursor-pointer"
                      aria-label={`${project.title} source code`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-foreground/75 hover:text-accent dark:hover:text-accent transition-all duration-300 cursor-pointer"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed font-sans line-clamp-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/20 dark:border-zinc-800/20">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase bg-primary/5 text-primary border border-primary/10 dark:bg-accent/5 dark:text-accent dark:border-accent/10"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
