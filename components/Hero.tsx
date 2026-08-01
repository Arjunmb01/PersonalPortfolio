import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail, Download, Terminal as TerminalIcon } from "lucide-react";
import { portfolioContent } from "@/lib/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrambleLetter = ({ char }: { char: string }) => {
  const [displayChar, setDisplayChar] = useState(char);
  const chars = "0101XY_+$#@?<>[];#%";

  const triggerScramble = () => {
    if (char === " ") return;
    let count = 0;
    const interval = setInterval(() => {
      setDisplayChar(chars[Math.floor(Math.random() * chars.length)]);
      count++;
      if (count > 7) {
        clearInterval(interval);
        setDisplayChar(char);
      }
    }, 45);
  };

  useEffect(() => {
    // Initial load scramble
    const delay = setTimeout(triggerScramble, Math.random() * 800 + 300);
    return () => clearTimeout(delay);
  }, []);

  return (
    <motion.span
      whileHover={{ scale: 1.15, y: -4 }}
      onHoverStart={triggerScramble}
      transition={{ type: "spring", stiffness: 450, damping: 9 }}
      className="inline-block hover:text-accent cursor-default font-black"
    >
      {displayChar === " " ? "\u00A0" : displayChar}
    </motion.span>
  );
};

export default function Hero() {
  const { name, role, tagline, resumeUrl } = portfolioContent.personalInfo;
  const shouldReduceMotion = useReducedMotion();
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [booting, setBooting] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  // Expanded Terminal boot lines for operating system immersion
  const bootLines = [
    "SYS // INITIALIZING MISSION CONTROL CORE...",
    "KERN // LOADING CONFIG: fullstack_developer_profile.json",
    "DEPS // RESOLVING RUNTIMES: React 19, Next.js 16, GSAP, Docker...",
    "NETW // ESTABLISHING COMMUNICATIONS AT 12.9716° N, 77.5946° E...",
    "LOGS // PORT 3000 STATUS: LISTENING...",
    "SEC // SHIELD DRIVERS: ACTIVE (JWT, JWT_HMAC_SHA256)",
    "SYS // SYSTEM DIAGNOSTIC COMPLETED: 0 ERRORS // 0 WARNINGS",
    "SYS // LAUNCHING COMMAND INTERFACE... WELCOME OPERATOR."
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
        setTimeout(() => setBooting(false), 400);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || booting) return;
    gsap.registerPlugin(ScrollTrigger);

    // Grid Parallax animation
    if (gridRef.current && homeRef.current) {
      gsap.to(gridRef.current, {
        scrollTrigger: {
          trigger: homeRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 120,
        scale: 1.04,
        ease: "none",
      });
    }
  }, [shouldReduceMotion, booting]);

  const nameLetters = name.split("");

  if (booting && !shouldReduceMotion) {
    return (
      <div className="min-h-screen bg-[#0b0e14] flex items-center justify-center p-6 font-mono text-[10px] sm:text-xs text-primary">
        <div className="max-w-xl w-full flex flex-col gap-2.5">
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
      ref={homeRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden"
    >
      {/* Background blueprint grid with parallax */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid-bg opacity-35 pointer-events-none"
        style={{ willChange: "transform" }}
      />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8 md:gap-10"
        >
          {/* Engineering Metadata Header */}
          <div
            className="flex flex-wrap items-center justify-between border-b border-blueprint-grid pb-3 font-mono text-[10px] sm:text-xs text-foreground/45"
          >
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-3.5 h-3.5 text-primary" />
              <span>SYS.STATUS // HOST ONLINE</span>
            </div>
            <div>
              <span>LOC // 12.9716° N, 77.5946° E</span>
            </div>
          </div>

          {/* Staggered Main Title */}
          <div className="flex flex-col gap-4">
            <div
              className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary bg-primary/5 border border-primary/25 px-3 py-1 self-start rounded-none"
            >
              01 // Profile Initialization
            </div>
            <h1
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[1.05]"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient font-black inline-flex">
                {nameLetters.map((char, index) => (
                  <ScrambleLetter key={index} char={char} />
                ))}
              </span>
            </h1>
          </div>

          {/* Subtitle / Role & Details block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground/90">
                {role}
              </h2>
              <p className="max-w-2xl text-base sm:text-lg text-foreground/60 leading-relaxed font-sans">
                {tagline}
              </p>
            </div>

            {/* Micro console readout */}
            <div
              className="lg:col-span-4 border border-blueprint-grid bg-blueprint-grid/10 p-4 font-mono text-[10px] leading-relaxed text-foreground/50 space-y-1"
            >
              <div className="text-primary font-bold mb-1">// SYSTEM DATA READOUT</div>
              <div>ENV_STRETCH: responsive_blueprint</div>
              <div>DEPLOY_PIPELINE: aws_docker_compose</div>
              <div>ANIMATION_CONTROLLER: gsap_framer_motion</div>
              <div>SERVAL_PORT: localhost:3000</div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href="#projects"
              data-cursor="GOTO // PROJECTS"
              className="flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/95 text-background font-mono text-[11px] tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-95 cursor-pointer duration-300 border border-primary font-bold"
            >
              Explore Projects <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={resumeUrl}
              download="Arjun_M_B_Resume.pdf"
              data-cursor="SYS.GET // RESUME.PDF"
              className="flex items-center gap-2 px-6 py-3.5 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground font-mono text-[11px] tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-95 cursor-pointer duration-300"
            >
              Download CV <Download className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              data-cursor="MSG // REACH OUT"
              className="flex items-center gap-2 px-6 py-3.5 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground font-mono text-[11px] tracking-wider uppercase transition-all hover:scale-[1.02] active:scale-95 cursor-pointer duration-300"
            >
              Get in Touch <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
