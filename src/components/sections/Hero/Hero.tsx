import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../../../lib/gsap'
import HeroCanvas, { HeroCanvasHandle } from './HeroCanvas'
import HeroText from './HeroText'

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HeroCanvasHandle>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [indicatorVisible, setIndicatorVisible] = useState(true)

  useEffect(() => {
    const section = sectionRef.current
    const sticky = stickyRef.current
    if (!section || !sticky) return

    // Create the pinned scroll trigger — 300vh of scroll to complete 360°
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=300%',
      pin: sticky,
      pinSpacing: true,
      scrub: 1, // 1s smoothing
      onUpdate: (self) => {
        const progress = self.progress
        setScrollProgress(progress)
        canvasRef.current?.setProgress(progress)

        // Hide scroll indicator after first 5%
        if (progress > 0.05) {
          setIndicatorVisible(false)
        } else {
          setIndicatorVisible(true)
        }
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative"
      aria-label="Hero — 360 degree interactive portrait"
    >
      {/* Pinned sticky container — this stays fixed while parent scrolls */}
      <div
        ref={stickyRef}
        className="relative w-full h-screen overflow-hidden bg-ink"
      >
        {/* ── Canvas frame display ─────────────────────── */}
        <div className="absolute inset-0 z-10">
          <HeroCanvas ref={canvasRef} />
        </div>

        {/* ── Vignette overlay — subtle, helps text legibility ── */}
        <div
          className="absolute inset-0 z-15 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(10,10,10,0.7) 100%)',
          }}
        />

        {/* ── Left edge gradient for text contrast ─── */}
        <div
          className="absolute inset-y-0 left-0 w-64 z-15 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(10,10,10,0.6) 0%, transparent 100%)',
          }}
        />

        {/* ── Right edge gradient ───────────────────── */}
        <div
          className="absolute inset-y-0 right-0 w-64 z-15 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(10,10,10,0.6) 0%, transparent 100%)',
          }}
        />

        {/* ── Typography layer — strictly confined below 80px navbar (pt-24 = 96px) and above bottom indicators (pb-16 = 64px) ── */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center pt-24 pb-16">
          <HeroText scrollProgress={scrollProgress} />
        </div>

        {/* ── Scroll indicator ──────────────────────── */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 transition-opacity duration-700 pointer-events-none px-4 py-2 rounded-full bg-ink/70 backdrop-blur-md border border-paper/10"
          style={{ opacity: indicatorVisible ? 1 : 0 }}
          aria-hidden="true"
        >
          <span className="text-[10px] text-paper/80 tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-accent to-transparent" />
        </div>

        {/* ── Scroll progress badge (bottom-right) ───── */}
        <div
          className="absolute bottom-8 right-8 lg:right-16 z-30 hidden sm:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-ink/70 backdrop-blur-md border border-paper/10 pointer-events-none"
          aria-hidden="true"
        >
          <span className="text-[11px] font-mono text-accent">
            {Math.round(scrollProgress * 100)}%
          </span>
          <div className="w-10 h-[2px] bg-paper/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-100"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
