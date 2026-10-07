import { ArrowDown, FileText, Send, Sparkles, Server, Cpu, Globe } from 'lucide-react'
import { PERSONAL_INFO } from '../../../lib/constants'

interface HeroTextProps {
  scrollProgress: number
}

export default function HeroText({ scrollProgress }: HeroTextProps) {
  // Phase 1 (Initial view): 0 -> 0.22
  const phase1Opacity = Math.max(0, 1 - scrollProgress / 0.18)
  const phase1TranslateY = -scrollProgress * 20

  // Phase 2 (Mid-scroll — person has moved left, rich stats/capabilities deck appears on right): 0.18 -> 0.80
  // Clean plateau curve: fade-in (0.18 -> 0.28), solid (0.28 -> 0.68), fade-out (0.68 -> 0.80)
  let phase2Opacity = 0
  if (scrollProgress >= 0.18 && scrollProgress <= 0.80) {
    if (scrollProgress < 0.28) {
      phase2Opacity = (scrollProgress - 0.18) / 0.10
    } else if (scrollProgress <= 0.68) {
      phase2Opacity = 1
    } else {
      phase2Opacity = (0.80 - scrollProgress) / 0.12
    }
  }
  const phase2TranslateY = (1 - Math.min(Math.max((scrollProgress - 0.18) / 0.10, 0), 1)) * 14

  // Phase 3 (End of hero glide — action launchpad): 0.76 -> 1.0
  const phase3Progress = Math.min(Math.max((scrollProgress - 0.76) / 0.16, 0), 1)
  const phase3Opacity = phase3Progress
  const phase3TranslateY = (1 - phase3Progress) * 14

  const isPhase1Active = phase1Opacity > 0.01
  const isRightActive = phase2Opacity > 0.01 || phase3Opacity > 0.01

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pointer-events-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">

        {/* ── PHASE 1: INITIAL HERO BRANDING (Left Column) ────────────────── */}
        <div
          className={`w-full max-w-md lg:max-w-lg transition-opacity duration-300 ${
            !isPhase1Active ? 'hidden md:block' : 'block'
          }`}
          style={{
            opacity: phase1Opacity,
            transform: `translateY(${phase1TranslateY}px)`,
            pointerEvents: phase1Opacity > 0.4 ? 'auto' : 'none',
            visibility: phase1Opacity <= 0.01 ? 'hidden' : 'visible',
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/5 backdrop-blur-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10.5px] font-mono tracking-widest text-accent uppercase">
              Available for Projects
            </span>
          </div>

          <p className="text-caption text-mist-light tracking-widest uppercase mb-1.5">
            Full-Stack Developer
          </p>

          <h1 className="font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] text-paper leading-[0.95] tracking-tight mb-3">
            ARJUN
            <br />
            <span className="font-serif-italic text-accent">M B</span>
          </h1>

          <p className="text-body text-mist max-w-sm leading-relaxed mb-4">
            Crafting scalable server architectures with Node.js &amp; Django, and engineering pixel-perfect frontend experiences in React &amp; Next.js.
          </p>

          <div className="flex items-center gap-3 text-caption text-mist font-mono tracking-wider">
            <span>Bangalore, India</span>
            <span className="text-accent/40">•</span>
            <span>Docker &amp; AWS</span>
          </div>
        </div>

        {/* ── RIGHT COLUMN: CAPABILITY DECK & ACTION LAUNCHPAD ────────────── */}
        <div
          className={`grid grid-cols-1 grid-rows-1 justify-items-end w-full max-w-md lg:max-w-[460px] md:ml-auto ${
            !isRightActive ? 'hidden md:grid' : 'grid'
          }`}
        >
          {/* ── PHASE 2: CAPABILITY DECK (Reveals on Right as Arjun moves Left) ── */}
          <div
            className="col-start-1 row-start-1 w-full transition-all duration-300"
            style={{
              opacity: Math.min(phase2Opacity, 1),
              transform: `translateY(${phase2TranslateY}px)`,
              pointerEvents: phase2Opacity > 0.4 ? 'auto' : 'none',
              visibility: phase2Opacity <= 0.01 ? 'hidden' : 'visible',
            }}
          >
            <div className="p-4 sm:p-5 rounded-2xl bg-ink-50/90 backdrop-blur-xl border border-paper/10 shadow-2xl space-y-3">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-paper/10 pb-2.5">
                <div>
                  <span className="text-[10px] font-mono text-accent tracking-widest uppercase block mb-0.5">
                    Engineering Focus
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-paper leading-tight">
                    Full-Stack Architecture &amp; APIs
                  </h3>
                </div>
                <Sparkles size={20} className="text-accent animate-pulse flex-shrink-0 ml-2" />
              </div>

              {/* Capability Items */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-paper/[0.02] border border-paper/5">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0 mt-0.5">
                    <Server size={16} />
                  </div>
                  <div>
                    <h4 className="text-body text-[13.5px] font-medium text-paper">Backend &amp; Distributed APIs</h4>
                    <p className="text-caption text-mist leading-relaxed mt-0.5">
                      High-throughput Node.js &amp; Django REST, Redis caching, robust models.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-paper/[0.02] border border-paper/5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 flex-shrink-0 mt-0.5">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <h4 className="text-body text-[13.5px] font-medium text-paper">Cloud &amp; Containerization</h4>
                    <p className="text-caption text-mist leading-relaxed mt-0.5">
                      Production Docker pipelines, AWS CloudFront &amp; EC2 deployment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-paper/[0.02] border border-paper/5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0 mt-0.5">
                    <Globe size={16} />
                  </div>
                  <div>
                    <h4 className="text-body text-[13.5px] font-medium text-paper">Kinetic &amp; Real-Time Web</h4>
                    <p className="text-caption text-mist leading-relaxed mt-0.5">
                      React, Next.js, WebSockets, WebRTC video calling, smooth GSAP motion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-paper/10 text-[11px] font-mono text-mist-light">
                <span className="text-accent">4+ Production SaaS Projects</span>
                <span>Scroll for works ↓</span>
              </div>
            </div>
          </div>

          {/* ── PHASE 3: FINAL CALL TO ACTION (Action Launchpad) ─────────────── */}
          <div
            className="col-start-1 row-start-1 w-full transition-all duration-300"
            style={{
              opacity: phase3Opacity,
              transform: `translateY(${phase3TranslateY}px)`,
              pointerEvents: phase3Opacity > 0.4 ? 'auto' : 'none',
              visibility: phase3Opacity <= 0.01 ? 'hidden' : 'visible',
            }}
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-ink-50/90 backdrop-blur-xl border border-accent/25 shadow-2xl">
              <p className="text-[10px] font-mono text-accent tracking-widest uppercase mb-2">
                Explore Portfolio
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-paper leading-tight mb-3">
                Ready to explore the{' '}
                <span className="font-serif-italic text-accent">creations?</span>
              </h2>
              <p className="text-body text-mist leading-relaxed mb-6">
                Dive into MedixFlow, SSK Handlooms, and scalable platforms engineered end-to-end.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-ink text-caption tracking-widest uppercase font-medium hover:bg-accent-light transition-colors duration-300 pointer-events-auto"
                >
                  <span>View Works</span>
                  <ArrowDown size={14} />
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download={PERSONAL_INFO.resumeFileName}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-paper/20 text-paper text-caption tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300 pointer-events-auto"
                >
                  <FileText size={14} />
                  <span>Resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-paper/10 text-paper text-caption tracking-widest uppercase hover:bg-paper/20 transition-colors duration-300 pointer-events-auto"
                >
                  <Send size={14} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
