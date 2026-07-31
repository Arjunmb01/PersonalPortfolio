"use client";

import { ArrowUp, Mail } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const { name, email, socials } = portfolioContent.personalInfo;

  return (
    <footer className="w-full bg-zinc-50/50 dark:bg-zinc-950/20 border-t border-zinc-200/10 dark:border-zinc-800/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side text */}
        <div className="flex flex-col gap-1.5 text-center md:text-left">
          <p className="font-display font-bold text-lg text-foreground">
            {name}
          </p>
          <p className="text-xs text-foreground/40 font-medium">
            &copy; {new Date().getFullYear()} Arjun M B. All rights reserved.
          </p>
        </div>

        {/* Middle icons */}
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-100/80 dark:hover:bg-zinc-850 text-foreground/60 hover:text-primary dark:hover:text-accent transition-all duration-300 cursor-pointer"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-100/80 dark:hover:bg-zinc-850 text-foreground/60 hover:text-primary dark:hover:text-accent transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-100/80 dark:hover:bg-zinc-850 text-foreground/60 hover:text-primary dark:hover:text-accent transition-all duration-300 cursor-pointer"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right side back to top */}
        <a
          href="#home"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 hover:bg-zinc-100/80 dark:hover:bg-zinc-850 text-xs font-semibold text-foreground/60 hover:text-primary dark:hover:text-accent transition-all duration-300 cursor-pointer"
        >
          Back to Top <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
