import { useEffect, useState } from 'react'

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* ── BASE LUXURY BLACK VOID ── */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* ── AMBIENT LUMINOUS GLOW ORBS ── */}
      {/* 1. Top-Right Champagne Gold Aura */}
      <div
        className="absolute -top-[15%] right-[-5%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent blur-[140px] transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
        }}
      />

      {/* 2. Mid-Left Cybernetic Azure / Sky Depth Aura */}
      <div
        className="absolute top-[35%] -left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-sky-500/8 via-cyan-500/4 to-transparent blur-[160px] transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px, 0)`,
        }}
      />

      {/* 3. Bottom-Right Warm Amber Light */}
      <div
        className="absolute bottom-[-10%] right-[15%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-amber-500/6 via-accent/4 to-transparent blur-[150px] transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
        }}
      />

      {/* ── ARCHITECTURAL GEOMETRIC MATRIX (Fine Grid & Dot Pattern) ── */}
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(200, 169, 110, 0.35) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 120px 120px, 120px 120px',
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 30%, transparent 95%)',
        }}
      />

      {/* ── VIGNETTE RADIAL DEPTH ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(5,5,5,0.7) 100%)',
        }}
      />

      {/* ── CINEMATIC FILM GRAIN / NOISE OVERLAY ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  )
}
