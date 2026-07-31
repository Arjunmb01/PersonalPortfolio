"use client";

import { MapPin, Mail, Phone, Calendar } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const { name, bio, location, email, phone } = portfolioContent.personalInfo;

  return (
    <AnimatedSection
      id="about"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/20 dark:border-zinc-800/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left side details */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">
              Introduction
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-foreground">
              About Me
            </h2>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed font-sans">
            {bio}
          </p>

          {/* Quick stats or details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Location</p>
                <p className="text-sm font-semibold text-foreground/80">{location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors break-all"
                >
                  {email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Phone</p>
                <a
                  href={`tel:${phone}`}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
                >
                  +91 {phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40">
              <Calendar className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Focus Area</p>
                <p className="text-sm font-semibold text-foreground/80">React.js & Next.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side graphic or image replacement */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square rounded-3xl card-glass overflow-hidden flex flex-col justify-between p-8 group">
            {/* Top row */}
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-primary">
                A
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
            </div>

            {/* Middle code block */}
            <div className="my-auto font-mono text-xs sm:text-sm text-foreground/75 space-y-2 select-none">
              <p className="text-primary font-semibold">&lt;DeveloperInfo&gt;</p>
              <p className="pl-4">
                <span className="text-indigo-400 dark:text-indigo-300">name:</span> &quot;{name}&quot;,
              </p>
              <p className="pl-4">
                <span className="text-indigo-400 dark:text-indigo-300">role:</span> &quot;Frontend&quot;,
              </p>
              <p className="pl-4">
                <span className="text-indigo-400 dark:text-indigo-300">location:</span> &quot;Bangalore&quot;,
              </p>
              <p className="pl-4">
                <span className="text-indigo-400 dark:text-indigo-300">passionate:</span> <span className="text-emerald-500 font-semibold">true</span>
              </p>
              <p className="text-primary font-semibold">&lt;/DeveloperInfo&gt;</p>
            </div>

            {/* Bottom visual indicator */}
            <div className="flex items-center justify-between border-t border-zinc-200/20 dark:border-zinc-800/20 pt-4">
              <span className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">Live Server Status</span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
