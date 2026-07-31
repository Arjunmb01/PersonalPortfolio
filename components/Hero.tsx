"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail, Download, Terminal as TerminalIcon } from "lucide-react";
import { portfolioContent } from "@/lib/content";

export default function Hero() {
  const { name, role, tagline, resumeUrl } = portfolioContent.personalInfo;
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [booting, setBooting] = useState(true);

  // Terminal boot lines
  const bootLines = [
    "LOG // INITIALIZING BLUEPRINT SYSTEM...",
    "LOG // LOADING CONFIG: fullstack_developer_profile.json",
    "LOG // RESOLVING RUNTIMES: React 19, Next.js 16, GSAP, Docker...",
    "LOG // COMPILING SYSTEM ASSETS...",
    "LOG // STATUS: SYSTEM READY. RENDERING CONSOLE LAYOUT."
  ];

  useEffect(() => {
    if (shouldReduceMotion) {
      setBooting(false);
      return;
    }

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootLines.length) {
        setConsoleOutput((prev) => [...prev, bootLines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBooting(false), 500);
      }
    }, 350);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || booting) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, booting]);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
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

  const nameLetters = name.split("");

  if (booting && !shouldReduceMotion) {
    return (
      <div className="min-h-screen bg-[#0b0e14] flex items-center justify-center p-6 font-mono text-[11px] sm:text-xs text-primary">
        <div className="max-w-xl w-full flex flex-col gap-2">
          {consoleOutput.map((line, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-primary/45">&gt;&gt;</span>
              <span className={index === bootLines.length - 1 ? "text-accent font-bold" : ""}>{line}</span>
            </div>
          ))}
          <div className="flex gap-2 items-center">
            <span className="text-primary/45">&gt;&gt;</span>
            <span className="w-1.5 h-4 bg-primary console-cursor" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 grid-bg overflow-hidden"
    >
      {/* Background mouse glow spots */}
      {!shouldReduceMotion && (
        <div
          className="glow-spot absolute opacity-45 pointer-events-none transition-transform"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${mousePos.x - 225}px, ${mousePos.y - 225}px, 0)`,
            willChange: "transform",
          }}
        />
      )}

      {/* Main Container */}
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 md:gap-10"
        >
          {/* Engineering Metadata Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-between border-b border-blueprint-grid pb-3 font-mono text-[10px] sm:text-xs text-foreground/45"
          >
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-primary" />
              <span>SYS.STATUS // ONLINE</span>
            </div>
            <div>
              <span>LOC // 12.9716° N, 77.5946° E</span>
            </div>
          </motion.div>

          {/* Staggered Main Title */}
          <div className="flex flex-col gap-4">
            <motion.div
              variants={itemVariants}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary bg-primary/5 border border-primary/25 px-3 py-1 self-start rounded-none"
            >
              01 // Profile Initialization
            </motion.div>
            <motion.h1
              variants={titleWordVariants}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.05]"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient font-black inline-flex">
                {nameLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.18, y: -6 }}
                    transition={{ type: "spring", stiffness: 450, damping: 8 }}
                    className="inline-block hover:text-accent cursor-default"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </div>

          {/* Subtitle / Role & Details block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col gap-4">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground/90">
                {role}
              </h2>
              <p className="max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed font-sans">
                {tagline}
              </p>
            </motion.div>

            {/* Micro console readout */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 border border-blueprint-grid bg-blueprint-grid/10 p-4 font-mono text-[10px] leading-relaxed text-foreground/50 space-y-1"
            >
              <div className="text-primary font-bold mb-1">// SYSTEM DATA READOUT</div>
              <div>ENV_STRETCH: responsive_blueprint</div>
              <div>DEPLOY_PIPELINE: aws_docker_compose</div>
              <div>ANIMATION_CONTROLLER: gsap_framer_motion</div>
              <div>SERVAL_PORT: localhost:3000</div>
            </motion.div>
          </div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/95 text-background font-mono text-[11px] tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-95 cursor-pointer duration-300 border border-primary font-bold"
            >
              Explore Projects <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={resumeUrl}
              download="Arjun_M_B_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground font-mono text-[11px] tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-95 cursor-pointer duration-300"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground font-mono text-[11px] tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-95 cursor-pointer duration-300"
            >
              Get in Touch <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
