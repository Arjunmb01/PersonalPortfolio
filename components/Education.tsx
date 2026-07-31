"use client";

import { GraduationCap, Landmark, Calendar } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  const { education } = portfolioContent;

  return (
    <AnimatedSection
      id="education"
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-zinc-200/20 dark:border-zinc-800/20"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2 md:text-center md:items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">
            Academic Background
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="card-glass p-6 md:p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-primary/30 dark:hover:border-accent/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-foreground/90">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-foreground/60">
                    <Landmark className="w-4 h-4 text-foreground/45" />
                    <span>{edu.institution}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-100/60 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/50 self-start md:self-auto">
                <Calendar className="w-3.5 h-3.5 text-primary dark:text-accent" />
                <span className="text-xs font-semibold text-foreground/75">
                  {edu.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
