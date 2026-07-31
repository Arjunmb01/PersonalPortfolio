"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail, ArrowUpRight, Download } from "lucide-react";
import { portfolioContent } from "@/lib/content";

export default function Hero() {
  const { name, role, tagline, socials, resumeUrl } = portfolioContent.personalInfo;
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const nameLetterVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const nameLetters = name.split("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 grid-bg overflow-hidden"
    >
      {/* Background mouse glow spots */}
      {!shouldReduceMotion && (
        <div
          className="glow-spot absolute opacity-45 dark:opacity-35 pointer-events-none transition-transform"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${mousePos.x - 200}px, ${mousePos.y - 200}px, 0)`,
            willChange: "transform",
          }}
        />
      )}

      {/* Main Container */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-primary/20 bg-primary/5 text-primary dark:text-accent dark:border-accent/20 dark:bg-accent/5"
          >
            <span className="w-2 h-2 rounded-full bg-primary dark:bg-accent animate-pulse" />
            Available for Full Stack Opportunities
          </motion.div>

          {/* Headline with Letter Animation */}
          <motion.h1
            variants={titleWordVariants}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.05]"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient font-extrabold whitespace-nowrap inline-flex">
              {nameLetters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={nameLetterVariants}
                  className="inline-block hover:scale-110 hover:text-accent transition-transform duration-200 cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.p
            variants={itemVariants}
            className="font-display text-lg sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground/85"
          >
            {role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-sans"
          >
            {tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 cursor-pointer duration-300"
            >
              Explore Work <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
            <a
              href={resumeUrl}
              download="Arjun_M_B_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-300/60 dark:border-zinc-700/60 bg-white/40 dark:bg-zinc-950/40 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 text-foreground font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer duration-300"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-300/60 dark:border-zinc-700/60 bg-white/40 dark:bg-zinc-950/40 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 text-foreground font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer duration-300"
            >
              Get in Touch <Mail className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 mt-8"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-all duration-300 flex items-center gap-1 text-sm font-semibold hover:-translate-y-0.5 cursor-pointer"
            >
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-accent transition-all duration-300 flex items-center gap-1 text-sm font-semibold hover:-translate-y-0.5 cursor-pointer"
            >
              LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 animate-pulse">
        <span className="text-[10px] uppercase tracking-widest font-black">Scroll</span>
        <ArrowDown className="w-3 h-3" />
      </div>
    </section>
  );
}
