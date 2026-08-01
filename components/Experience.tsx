"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const { experiences } = portfolioContent;
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    // Grow the vertical timeline line on scroll
    gsap.to(line, {
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "bottom 60%",
        scrub: 0.5,
      },
      height: "100%",
      ease: "none",
    });

    // Reveal and stagger each experience card as it rolls into view
    cardRefs.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 35, scale: 0.97 },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <AnimatedSection
      id="experience"
      className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-zinc-200/20 dark:border-zinc-800/20"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2 md:text-center md:items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">
            Career Journey
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Work Experience
          </h2>
        </div>

        {/* Timeline wrapper */}
        <div ref={containerRef} className="relative ml-4 md:ml-32 pl-8 md:pl-12 py-4 flex flex-col gap-12">
          {/* Static gray track line */}
          <div className="absolute left-[1px] top-0 bottom-0 w-[1px] bg-zinc-200/60 dark:bg-zinc-800/40" />
          
          {/* Dynamic growing timeline line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-0 w-[2px] bg-primary origin-top"
            style={{ height: "0%" }}
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="relative group"
            >
              {/* Timeline marker */}
              <span className="absolute -left-[41px] md:-left-[57px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border-2 border-primary group-hover:scale-110 transition-transform duration-300 z-10">
                <Briefcase className="w-4 h-4 text-primary" />
              </span>

              {/* Side date element on wider screens */}
              <div className="hidden md:block absolute -left-[240px] w-[180px] text-right top-2">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/45 flex items-center justify-end gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 inline-block text-primary" /> {exp.duration}
                </span>
              </div>

              {/* Card content */}
              <div className="card-glass p-6 rounded-2xl flex flex-col gap-4 border border-zinc-200/50 dark:border-zinc-800/30">
                <div className="flex flex-col gap-1.5">
                  {/* Mobile duration indicator */}
                  <span className="md:hidden text-xs font-bold uppercase tracking-wider text-foreground/45 flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> {exp.duration}
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="font-display font-bold text-xl text-foreground/90 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-primary font-mono">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-foreground/50 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-foreground/40" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="list-disc pl-4 space-y-2 text-foreground/70 text-sm font-sans">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
