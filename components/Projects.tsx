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
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined" || shouldReduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Stacking Card Deck on Desktop / Tablets (>= 768px)
    mm.add("(min-width: 768px)", () => {
      const pinSection = sectionRef.current;
      const container = cardsContainerRef.current;
      if (!pinSection || !container) return;

      const cards = gsap.utils.toArray<HTMLElement>(container.children);
      
      // Set initial positions: Card 0 is active, others are translated offscreen below
      gsap.set(cards.slice(1), {
        y: () => window.innerHeight,
        scale: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          pin: true,
          scrub: 1,
          start: "top top",
          // Scroll duration relative to card count
          end: () => `+=${(cards.length - 1) * 100}%`,
          invalidateOnRefresh: true,
        },
      });

      // Animate cards stacking on top of each other
      cards.forEach((card, index) => {
        if (index === 0) return;

        tl.to(card, {
          y: 0,
          duration: 1,
          ease: "none",
        }, index - 1);

        // Scale and pull up the previous card in the stack
        const prevCard = cards[index - 1];
        tl.to(prevCard, {
          scale: 0.95,
          opacity: 0.5,
          y: -25,
          duration: 1,
          ease: "none",
        }, index - 1);

        // Pull up older cards even further
        if (index > 1) {
          const olderCard = cards[index - 2];
          tl.to(olderCard, {
            scale: 0.9,
            opacity: 0.25,
            y: -50,
            duration: 1,
            ease: "none",
          }, index - 1);
        }
      });

      return () => {
        // ScrollTrigger cleanup handled by GSAP
      };
    });

    return () => {
      mm.revert();
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen md:h-screen md:flex md:flex-col md:justify-center py-24 md:py-0 overflow-hidden border-t border-blueprint-grid/30"
    >
      {/* Background glow spot */}
      <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full flex flex-col gap-12 z-10 px-6 md:px-0">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            03 // KINETIC PORTFOLIO
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-foreground/60 leading-relaxed font-sans mt-2">
            A selection of SaaS platforms and e-commerce architectures. Scroll down to see the blueprint cards stack on top of each other.
          </p>
        </div>

        {/* Cards Deck Stack container */}
        <div className="relative w-full md:h-[450px]">
          <div
            ref={cardsContainerRef}
            className="flex flex-col md:block gap-6 md:gap-0 w-full h-full"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="w-full md:absolute md:inset-x-0 md:top-0 md:h-[420px] card-blueprint p-6 md:p-8 flex flex-col justify-between gap-6 group rounded-none"
                style={{ zIndex: index + 1 }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] text-primary/60 font-semibold uppercase">
                        Project [{String(index + 1).padStart(2, "0")}]
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground/90 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground/75 hover:text-primary transition-all duration-300 cursor-pointer"
                        aria-label={`${project.title} source code`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground/75 hover:text-accent transition-all duration-300 cursor-pointer"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-foreground/70 text-sm leading-relaxed font-sans line-clamp-5 md:line-clamp-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-blueprint-grid/20">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="px-2.5 py-1 font-mono text-[10px] font-bold tracking-wide uppercase bg-primary/5 text-primary border border-primary/10 dark:bg-accent/5 dark:text-accent dark:border-accent/10"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
