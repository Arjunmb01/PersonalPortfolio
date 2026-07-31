"use client";

import { ArrowUp, Mail } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const { name, email, socials } = portfolioContent.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-50/20 dark:bg-zinc-950/20 border-t border-blueprint-grid/20 py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side text */}
        <div className="flex flex-col gap-1.5 text-center md:text-left">
          <p className="font-display font-bold text-lg text-foreground">
            {name}
          </p>
          <p className="text-xs text-foreground/45 font-medium font-mono">
            &copy; {new Date().getFullYear()} Arjun M B. All rights reserved.
          </p>
        </div>

        {/* Middle icons */}
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground/60 hover:text-primary transition-all duration-300 cursor-pointer"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground/60 hover:text-primary transition-all duration-300 cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-2 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground/60 hover:text-primary transition-all duration-300 cursor-pointer"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right side back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-4 py-2 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-xs font-mono tracking-widest uppercase text-foreground/60 hover:text-primary transition-all duration-300 cursor-pointer"
        >
          Back to Top <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
