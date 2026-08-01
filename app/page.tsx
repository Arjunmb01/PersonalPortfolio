"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [pathD, setPathD] = useState("");
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const hero = document.getElementById("home");
      const about = document.getElementById("about");
      const skills = document.getElementById("skills");
      const experience = document.getElementById("experience");
      const projects = document.getElementById("projects");
      const contact = document.getElementById("contact");

      if (!hero || !about || !skills || !experience || !projects || !contact) return;

      const getCenterLeft = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY;
        // Position wire 32px to the left of the section container boundaries
        const x = Math.max(24, rect.left - 32);
        const y = rect.top + scrollTop + 60; // Offset from header start
        return { x, y };
      };

      const getBottomLeft = (el: HTMLElement) => {
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY;
        const x = Math.max(24, rect.left - 48);
        const y = rect.top + scrollTop + rect.height - 60;
        return { x, y };
      };

      const pts = [
        getCenterLeft(hero),
        getBottomLeft(hero),
        getCenterLeft(about),
        getBottomLeft(about),
        getCenterLeft(skills),
        getBottomLeft(skills),
        getCenterLeft(experience),
        getBottomLeft(experience),
        getCenterLeft(projects),
        getBottomLeft(projects),
        getCenterLeft(contact)
      ];

      // Generate cubic bezier curve path joining the coordinates
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const curr = pts[i];
        const controlY = (prev.y + curr.y) / 2;
        d += ` C ${prev.x} ${controlY}, ${curr.x} ${controlY}, ${curr.x} ${curr.y}`;
      }
      setPathD(d);
    };

    // Calculate layout with minor delay for initial image/font load spacing
    const delayTimer = setTimeout(handleResize, 800);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, { passive: true });

    return () => {
      clearTimeout(delayTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!pathD || typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();

    // Configure GSAP to draw path dash on scroll
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        if (!path) return;
        const drawLength = pathLength * self.progress;
        path.style.strokeDashoffset = (pathLength - drawLength).toString();
      },
    });

    return () => {
      trigger.kill();
    };
  }, [pathD]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Immersive electrical circuit connector path overlay */}
      <svg
        className="absolute inset-y-0 left-0 w-full h-full pointer-events-none z-10 hidden xl:block"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 0 4px rgba(0, 240, 255, 0.15))" }}
      >
        <path
          ref={pathRef}
          className="connector-cable"
          d={pathD}
        />
        {/* Glow point showing head progress */}
        <path
          className="connector-cable-active"
          d={pathD}
          style={{
            strokeDasharray: "15 300",
            animation: "cursor-blink 2s linear infinite"
          }}
        />
      </svg>

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
