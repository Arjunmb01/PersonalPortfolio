"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function DiagnosticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hoverLabel, setHoverLabel] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Avoid cursor on touch devices
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial custom cursor position
    gsap.set(cursor, { xPercent: -50, yPercent: -50, x: 0, y: 0 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setCoords({ x: e.clientX, y: e.clientY });
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    // Generic Hover delegation
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, input, textarea, select, [role='button']");

      if (interactiveEl) {
        setIsHovered(true);
        
        // Compute label
        const dataCursor = interactiveEl.getAttribute("data-cursor");
        if (dataCursor) {
          setHoverLabel(dataCursor);
        } else {
          const tagName = interactiveEl.tagName.toLowerCase();
          if (tagName === "a") {
            const href = interactiveEl.getAttribute("href") || "";
            setHoverLabel(`LINK // ${href.startsWith("#") ? href : href.slice(0, 15)}`);
          } else if (tagName === "button" || interactiveEl.getAttribute("role") === "button") {
            setHoverLabel("CMD // EXECUTE");
          } else if (["input", "textarea"].includes(tagName)) {
            setHoverLabel("INPUT // FOCUS");
          } else {
            setHoverLabel("SYS // INTERACT");
          }
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("a, button, input, textarea, select, [role='button']");

      if (interactiveEl) {
        setIsHovered(false);
        setHoverLabel("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovered ? "custom-cursor-active" : ""}`}
      style={{ left: 0, top: 0 }}
    >
      <span className="custom-cursor-text">
        {hoverLabel ? hoverLabel : `SYS.X // ${coords.x.toString().padStart(4, "0")} : Y // ${coords.y.toString().padStart(4, "0")}`}
      </span>
    </div>
  );
}
