import { motion } from 'framer-motion'
import { ArrowDown, FileText, Sparkles, Server, Cpu, Globe, MapPin, Zap } from 'lucide-react'
import { PERSONAL_INFO } from '../../../lib/constants'

export default function MobileHero() {
  return (
    <div className="relative w-full min-h-screen pt-24 pb-16 px-5 flex flex-col justify-between overflow-hidden bg-ink">
      {/* ── AMBIENT AURORA BACKGROUND GLOWS ── */}
      <div className="absolute top-20 right-[-10%] w-72 h-72 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[45%] left-[-15%] w-80 h-80 rounded-full bg-sky-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-5%] w-72 h-72 rounded-full bg-amber-500/8 blur-[100px] pointer-events-none" />

      {/* ── TOP BADGE & BRAND TYPOGRAPHY ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center mb-6"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-md mb-4 shadow-lg shadow-accent/5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-medium">
            Available for High-Impact Projects
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-[clamp(2.8rem,11vw,4rem)] text-paper leading-[0.95] tracking-tight mb-2">
          ARJUN{' '}
          <span className="font-serif-italic text-accent">M B</span>
        </h1>

        {/* Professional Subtitle */}
        <p className="text-caption text-mist-light tracking-[0.2em] uppercase font-mono text-[11px]">
          Full-Stack Architect &amp; Developer
        </p>
      </motion.div>

      {/* ── CENTERPIECE: CINEMATIC FRAMED PORTRAIT CARD ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[320px] mx-auto my-3"
      >
        {/* Ambient Halo Behind Card */}
        <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-tr from-accent/30 via-accent/5 to-sky-500/20 blur-xl opacity-75" />

        {/* Card Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-accent/30 bg-ink-50 shadow-2xl">
          {/* Top Status Bar in Card */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-3.5 py-2.5 bg-gradient-to-b from-ink/90 to-transparent">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink/70 backdrop-blur-md border border-paper/10 text-[10px] font-mono text-paper/90">
              <MapPin size={10} className="text-accent" />
              <span>Bangalore, India</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/15 backdrop-blur-md border border-accent/30 text-[10px] font-mono text-accent">
              <Sparkles size={10} />
              <span>Production SaaS</span>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="aspect-[4/5] relative">
            <img
              src="/images/arjun_hero.jpg"
              alt="Arjun M B - Full Stack Developer"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            {/* Bottom Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
          </div>

          {/* Floating Technology Pills Anchored on Torso */}
          <div className="absolute bottom-3 inset-x-3 z-20 flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ink/80 backdrop-blur-md border border-paper/15 text-[10.5px] font-mono text-paper">
                <Zap size={11} className="text-emerald-400" />
                <span>React • Next.js 15</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ink/80 backdrop-blur-md border border-paper/15 text-[10.5px] font-mono text-accent">
                <Server size={11} />
                <span>Node • Django</span>
              </span>
            </div>
            <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent/10 backdrop-blur-md border border-accent/25 text-[10.5px] font-mono text-accent">
              <Cpu size={11} />
              <span>Docker &amp; AWS Cloud Infrastructure</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── IMPACT STATEMENT & ACTIONS ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center mt-4 max-w-sm mx-auto"
      >
        <p className="text-body text-mist text-[13.5px] leading-relaxed mb-5">
          Engineering high-throughput server backends and pixel-perfect interactive web apps. Specialized in healthcare SaaS, e-commerce, and real-time systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 w-full">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-ink text-caption tracking-widest uppercase font-semibold hover:bg-accent-light transition-all duration-300 shadow-xl shadow-accent/20"
          >
            <span>Explore Works</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFileName}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-paper/20 bg-paper/[0.03] text-paper text-caption tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300"
          >
            <FileText size={14} />
            <span>Download Resume</span>
          </a>
        </div>
      </motion.div>

      {/* ── MOBILE CAPABILITIES DECK (Quick-View Glass Cards) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative z-10 mt-8 space-y-2.5 max-w-sm mx-auto w-full"
      >
        <div className="flex items-center justify-between px-1 mb-1">
          <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
            Core Engineering Pillars
          </span>
          <span className="text-[10px] font-mono text-mist">
            3 Specializations
          </span>
        </div>

        <div className="p-3 rounded-2xl bg-paper/[0.03] border border-paper/10 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-accent/10 text-accent flex-shrink-0 mt-0.5">
            <Server size={16} />
          </div>
          <div>
            <h4 className="text-[13px] font-medium text-paper">Backend &amp; Distributed APIs</h4>
            <p className="text-[11.5px] text-mist leading-relaxed mt-0.5">
              High-throughput Node.js &amp; Django REST, Redis caching, robust models.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-paper/[0.03] border border-paper/10 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 flex-shrink-0 mt-0.5">
            <Cpu size={16} />
          </div>
          <div>
            <h4 className="text-[13px] font-medium text-paper">Cloud &amp; Containerization</h4>
            <p className="text-[11.5px] text-mist leading-relaxed mt-0.5">
              Production Docker pipelines, AWS CloudFront &amp; EC2 deployment.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-paper/[0.03] border border-paper/10 flex items-start gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 flex-shrink-0 mt-0.5">
            <Globe size={16} />
          </div>
          <div>
            <h4 className="text-[13px] font-medium text-paper">Kinetic &amp; Real-Time Web</h4>
            <p className="text-[11.5px] text-mist leading-relaxed mt-0.5">
              React, Next.js, WebSockets, WebRTC video calling, smooth GSAP motion.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
