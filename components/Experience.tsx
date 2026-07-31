"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const { experiences } = portfolioContent;

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
        <div className="relative border-l border-zinc-200/60 dark:border-zinc-800/50 ml-4 md:ml-32 pl-8 md:pl-12 py-4 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline marker */}
              <span className="absolute -left-[41px] md:-left-[57px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-4 h-4 text-primary" />
              </span>

              {/* Side date element on wider screens */}
              <div className="hidden md:block absolute -left-[240px] w-[180px] text-right top-2">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground/45 flex items-center justify-end gap-1.5">
                  <Calendar className="w-3.5 h-3.5 inline-block text-primary" /> {exp.duration}
                </span>
              </div>

              {/* Card content */}
              <div className="card-glass p-6 rounded-2xl flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  {/* Mobile duration indicator */}
                  <span className="md:hidden text-xs font-bold uppercase tracking-wider text-foreground/45 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> {exp.duration}
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <h3 className="font-display font-bold text-xl text-foreground/90 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-primary">
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
