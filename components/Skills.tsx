"use client";

import { portfolioContent } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const { skillGroups } = portfolioContent;

  return (
    <AnimatedSection
      id="skills"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-blueprint-grid/30"
    >
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-primary">
            02 // EXPERTISE MATRIX
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Skills & Tech Stack
          </h2>
          <p className="max-w-2xl text-foreground/60 leading-relaxed font-sans mt-2">
            A precise structured configuration of the languages, runtimes, clouds, and tools I use to deliver end-to-end applications.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="border border-blueprint-grid bg-blueprint-grid/5 divide-y divide-blueprint-grid select-none">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-12 items-stretch"
            >
              {/* Category label */}
              <div className="md:col-span-4 p-6 md:p-8 flex items-center gap-3 bg-blueprint-grid/10 border-b md:border-b-0 md:border-r border-blueprint-grid">
                <span className="font-mono text-xs text-primary/50">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
                <h3 className="font-mono text-xs tracking-widest uppercase font-bold text-foreground/80">
                  {group.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="md:col-span-8 p-6 md:p-8 flex flex-wrap gap-2.5 bg-background/20">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    data-cursor={`SKILL // ${skill.toUpperCase()}`}
                    className="font-mono text-[11px] tracking-wider px-3.5 py-2 border border-blueprint-grid hover:border-primary/50 hover:text-primary transition-all duration-300 bg-blueprint-grid/5 text-foreground/75 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
