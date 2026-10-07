import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react'

function GithubIcon({ size = 15, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
import { PROJECTS } from '../../lib/constants'

// Categories for filtering
const CATEGORIES = ['All', 'Full-Stack', 'E-commerce', 'Real-time Chat']

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeFilter === 'Full-Stack') return p.category.toLowerCase().includes('saas') || p.category.toLowerCase().includes('full') || p.id === 'medixflow'
        if (activeFilter === 'E-commerce') return p.category.toLowerCase().includes('commerce') || p.id === 'ssk-handlooms' || p.id === 'infinitytech'
        if (activeFilter === 'Real-time Chat') return p.category.toLowerCase().includes('chat') || p.id === 'chatify'
        return true
      })

  // MedixFlow as featured flagship showcase
  const featuredProject = PROJECTS[0]
  const otherProjects = PROJECTS.slice(1)

  return (
    <section id="work" className="section-pad px-6 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Ambient background aura */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-paper/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-4">
              <Sparkles size={13} className="text-accent" />
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                Selected Work // 03
              </span>
            </div>
            <h2 className="font-serif text-display-lg text-paper leading-[1.05]">
              Architected for scale, <br />
              <span className="font-serif-italic text-accent">crafted with precision.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-caption tracking-widest uppercase rounded-full transition-all duration-300 font-mono text-[11px] ${
                  activeFilter === cat
                    ? 'bg-accent text-ink font-medium shadow-lg shadow-accent/20'
                    : 'bg-paper/[0.03] text-mist-light hover:text-paper hover:bg-paper/[0.08] border border-paper/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── FEATURED FLAGSHIP CARD (MedixFlow) ── */}
        {activeFilter === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 rounded-3xl bg-ink-50/70 border border-paper/10 hover:border-accent/30 backdrop-blur-xl overflow-hidden transition-all duration-500 group shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Media Column with Browser Chrome */}
              <div className="lg:col-span-7 flex flex-col bg-ink/60 border-b lg:border-b-0 lg:border-r border-paper/10">
                {/* Browser Mockup Top Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-paper/10 bg-paper/[0.02]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="px-4 py-1 rounded-md bg-paper/5 text-[11px] font-mono text-mist tracking-wider">
                    medixflow.health // production saas
                  </div>
                  <div className="flex items-center gap-1.5 text-accent text-[11px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live System
                  </div>
                </div>

                {/* Screenshot Display */}
                <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:flex-1">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-mono tracking-widest uppercase">
                      Featured Flagship
                    </span>
                    <span className="text-caption font-mono text-mist-light">
                      01 / 04
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-paper mb-4 group-hover:text-accent transition-colors duration-300">
                    {featuredProject.title}
                  </h3>

                  <p className="text-body text-mist leading-relaxed mb-6 text-[14.5px]">
                    {featuredProject.description}
                  </p>

                  {/* Architecture Badges */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="p-3 rounded-xl bg-paper/[0.02] border border-paper/5 flex items-start gap-2.5">
                      <Zap size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[11.5px] font-medium text-paper block">WebRTC Video</span>
                        <span className="text-[10.5px] text-mist">Real-time consultation</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-paper/[0.02] border border-paper/5 flex items-start gap-2.5">
                      <ShieldCheck size={16} className="text-sky-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-[11.5px] font-medium text-paper block">PostgreSQL + Docker</span>
                        <span className="text-[10.5px] text-mist">Containerized APIs</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-mist-light px-2.5 py-1 rounded-md bg-paper/5 border border-paper/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-paper/10">
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-ink text-caption font-medium tracking-widest uppercase hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/15"
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight size={15} />
                  </a>

                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-paper/20 text-paper text-caption tracking-widest uppercase hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      <GithubIcon size={15} />
                      <span>Architecture</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* ── BENTO GRID OF REMAINING / FILTERED PROJECTS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {(activeFilter === 'All' ? otherProjects : filteredProjects).map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group rounded-2xl bg-ink-50/60 border border-paper/10 hover:border-accent/40 backdrop-blur-xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Mockup Chrome */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-paper/10 bg-paper/[0.02]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-paper/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-paper/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-paper/20" />
                    </div>
                    <span className="text-[10px] font-mono text-mist uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Image with zoom & overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink/80">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                    
                    {/* Floating number badge */}
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-ink/80 backdrop-blur-md border border-paper/10 text-[10px] font-mono text-accent">
                      {project.number || `0${idx + 2}`}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-paper mb-2.5 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-body text-mist text-[13.5px] leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[10.5px] font-mono text-mist-light px-2 py-0.5 rounded bg-paper/[0.03] border border-paper/5"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10.5px] font-mono text-accent/80 px-2 py-0.5 rounded bg-accent/5">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-paper/5 flex items-center justify-between mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-wider text-paper hover:text-accent transition-colors duration-300"
                  >
                    <span>View Demo</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-mist hover:text-paper hover:bg-paper/5 transition-colors duration-300"
                      aria-label="View source repository"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* ── BOTTOM GITHUB ARCHIVE CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-8 sm:p-10 rounded-2xl bg-paper/[0.02] border border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-accent/10 text-accent">
              <Layers size={22} />
            </div>
            <div>
              <h4 className="font-serif text-xl text-paper">Want to see more code architectures?</h4>
              <p className="text-caption text-mist mt-0.5">Explore 20+ open source repositories, microservices, and experiments on GitHub.</p>
            </div>
          </div>
          <a
            href="https://github.com/Arjunmb01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-paper/20 text-paper text-caption font-mono uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300 flex-shrink-0"
          >
            <GithubIcon size={15} />
            <span>GitHub Repositories</span>
            <ExternalLink size={13} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
