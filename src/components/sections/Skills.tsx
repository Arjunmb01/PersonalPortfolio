import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  Layers,
  ArrowRight
} from 'lucide-react'
import { SKILLS } from '../../lib/constants'

// Detailed skill metadata for interactive highlight
interface SkillItem {
  name: string
  highlight?: boolean
  tag?: string
}

const SKILL_CATEGORIES: {
  id: string
  title: string
  subtitle: string
  icon: typeof Code2
  accentColor: string
  badgeBg: string
  skills: SkillItem[]
}[] = [
  {
    id: 'frontend',
    title: 'Frontend & Kinetic UI',
    subtitle: 'Responsive, accessible, fluid web applications with modern animations',
    icon: Code2,
    accentColor: 'text-amber-400',
    badgeBg: 'bg-amber-400/10 border-amber-400/20 text-amber-300',
    skills: [
      { name: 'React.js', highlight: true, tag: 'Core' },
      { name: 'Next.js 15', highlight: true, tag: 'SSR/SSG' },
      { name: 'TypeScript', highlight: true, tag: 'Strict' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'GSAP 3', tag: 'Motion' },
      { name: 'Framer Motion' },
      { name: 'Redux Toolkit' },
      { name: 'Zustand', tag: 'State' },
      { name: 'HTML5 & Modern CSS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Distributed APIs',
    subtitle: 'High-throughput server architectures, real-time protocols, and secure auth',
    icon: Server,
    accentColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-300',
    skills: [
      { name: 'Node.js', highlight: true, tag: 'Runtime' },
      { name: 'Express.js', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'Django', tag: 'Framework' },
      { name: 'Django REST Framework' },
      { name: 'RESTful API Design', highlight: true },
      { name: 'Socket.IO', tag: 'Real-Time' },
      { name: 'WebRTC', tag: 'Video/Audio' },
      { name: 'JWT Authentication' },
      { name: 'Passport.js' },
    ],
  },
  {
    id: 'database',
    title: 'Databases & In-Memory Cache',
    subtitle: 'Relational data integrity, document persistence, and sub-millisecond caching',
    icon: Database,
    accentColor: 'text-sky-400',
    badgeBg: 'bg-sky-400/10 border-sky-400/20 text-sky-300',
    skills: [
      { name: 'PostgreSQL', highlight: true, tag: 'Relational' },
      { name: 'MongoDB', highlight: true, tag: 'NoSQL' },
      { name: 'Redis', highlight: true, tag: 'Cache & Pub/Sub' },
      { name: 'Database Indexing' },
      { name: 'Schema Architecture' },
      { name: 'Data Aggregation' },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud, DevOps & Tooling',
    subtitle: 'Production infrastructure, containerization, and automated workflows',
    icon: Cloud,
    accentColor: 'text-violet-400',
    badgeBg: 'bg-violet-400/10 border-violet-400/20 text-violet-300',
    skills: [
      { name: 'Docker', highlight: true, tag: 'Container' },
      { name: 'AWS EC2', highlight: true, tag: 'Compute' },
      { name: 'AWS CloudFront', tag: 'CDN' },
      { name: 'Git & GitHub', highlight: true },
      { name: 'Linux Server Admin' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'Razorpay Gateway', tag: 'Payments' },
      { name: 'Cloudinary CDN' },
      { name: 'Vercel Deployment' },
    ],
  },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="section-pad px-6 sm:px-8 lg:px-16 border-t border-paper/10 relative overflow-hidden bg-ink">
      {/* Background architectural glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-paper/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-4">
              <Sparkles size={13} className="text-accent" />
              <span className="text-[10px] font-mono tracking-widest text-accent uppercase">
                Technical Mastery // 04
              </span>
            </div>
            <h2 className="font-serif text-display-lg text-paper leading-[1.05]">
              Battle-tested tooling, <br />
              <span className="font-serif-italic text-accent">engineered for resilience.</span>
            </h2>
          </div>

          <p className="text-body text-mist max-w-md text-[14.5px] leading-relaxed">
            A comprehensive stack honed across enterprise healthcare SaaS, high-speed e-commerce, and real-time interactive communications.
          </p>
        </div>

        {/* ── 4-PILLAR BENTO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const Icon = category.icon

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl bg-ink-50/60 border border-paper/10 hover:border-paper/25 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-2xl bg-paper/[0.03] border border-paper/10 ${category.accentColor}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-[26px] text-paper group-hover:text-accent transition-colors duration-300">
                          {category.title}
                        </h3>
                        <p className="text-caption text-mist text-[12.5px] mt-0.5 line-clamp-1">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-mist-light/60">
                      0{catIdx + 1}
                    </span>
                  </div>

                  {/* Skills Pills Matrix */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {category.skills.map((skill) => {
                      const isHovered = hoveredSkill === skill.name

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group/pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-[13px] font-mono transition-all duration-300 cursor-default ${
                            skill.highlight
                              ? 'bg-paper/[0.04] border-paper/15 text-paper hover:border-accent hover:bg-accent/10 hover:text-accent'
                              : 'bg-paper/[0.015] border-paper/5 text-mist-light hover:border-paper/20 hover:text-paper hover:bg-paper/[0.04]'
                          } ${isHovered ? 'scale-105 shadow-lg' : ''}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            skill.highlight ? 'bg-accent' : 'bg-paper/30'
                          }`} />
                          <span>{skill.name}</span>
                          {skill.tag && (
                            <span className="text-[9.5px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-paper/5 text-accent/80 border border-accent/15">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Sub-card footer */}
                <div className="mt-8 pt-5 border-t border-paper/5 flex items-center justify-between text-[11.5px] font-mono text-mist">
                  <span className="flex items-center gap-1.5 text-accent/90">
                    <CheckCircle2 size={13} className="text-accent" />
                    Production Verified
                  </span>
                  <span>{category.skills.length} Core Technologies</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── ENGINEERING STANDARDS MATRIX (Bottom Telemetry Strip) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-paper/[0.02] border border-paper/10"
        >
          <div className="flex flex-col gap-1 border-r border-paper/5 pr-4 last:border-r-0">
            <span className="text-[11px] font-mono text-accent uppercase tracking-wider">Architecture</span>
            <span className="font-serif text-2xl text-paper">Modular Clean Code</span>
            <span className="text-[12px] text-mist">SOLID & MVC principles</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-paper/5 pr-4 last:border-r-0">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Performance</span>
            <span className="font-serif text-2xl text-paper">&lt; 100ms Latency</span>
            <span className="text-[12px] text-mist">Redis cached endpoints</span>
          </div>

          <div className="flex flex-col gap-1 border-r border-paper/5 pr-4 last:border-r-0">
            <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">DevOps</span>
            <span className="font-serif text-2xl text-paper">Docker Containerized</span>
            <span className="text-[12px] text-mist">Automated AWS workflows</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">Safety</span>
            <span className="font-serif text-2xl text-paper">100% Type-Safe</span>
            <span className="text-[12px] text-mist">TypeScript across client & server</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
