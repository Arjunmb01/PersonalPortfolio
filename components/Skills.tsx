"use client";

import { Layout, Sparkles, Server, Database, Code2, Cloud, Terminal } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const { skillGroups } = portfolioContent;

  const getIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 className="w-5 h-5 text-primary dark:text-accent" />;
      case "Frontend":
        return <Layout className="w-5 h-5 text-primary dark:text-accent" />;
      case "Backend":
        return <Server className="w-5 h-5 text-primary dark:text-accent" />;
      case "Databases":
        return <Database className="w-5 h-5 text-primary dark:text-accent" />;
      case "AI Integration":
        return <Sparkles className="w-5 h-5 text-primary dark:text-accent" />;
      case "Cloud & DevOps":
        return <Cloud className="w-5 h-5 text-primary dark:text-accent" />;
      case "Tools & Integrations":
      default:
        return <Terminal className="w-5 h-5 text-primary dark:text-accent" />;
    }
  };

  return (
    <AnimatedSection
      id="skills"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/20 dark:border-zinc-800/20"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2 md:text-center md:items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-primary">
            Expertise
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
            Skills & Tech Stack
          </h2>
          <p className="max-w-2xl text-foreground/60 leading-relaxed font-sans mt-2">
            A comprehensive breakdown of the programming languages, frontend/backend frameworks, cloud DevOps platforms, and integrations I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card-glass p-6 rounded-3xl flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                  {getIcon(group.category)}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground/90">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-100/60 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/40 text-foreground/80 hover:border-primary/50 hover:text-primary dark:hover:text-accent dark:hover:border-accent/50 transition-all duration-300 cursor-default"
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
