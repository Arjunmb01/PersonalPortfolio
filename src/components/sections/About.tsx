import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../../lib/constants'
import { useEffect, useState } from 'react'

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''))
  const suffix = value.replace(/[0-9.]/g, '')
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!inView || hasRun.current) return
    hasRun.current = true

    const duration = 1800
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * numericPart)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, numericPart])

  const display = numericPart % 1 !== 0
    ? count.toFixed(2)
    : Math.round(count).toString()

  return <span>{display}{suffix}</span>
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section-pad px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          className="text-caption text-accent tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          About
        </motion.p>

        {/* Main heading */}
        <motion.h2
          className="font-serif text-display-lg text-paper max-w-4xl mb-12 leading-none"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Engineering with precision,{' '}
          <span className="font-serif-italic text-accent">building for scale.</span>
        </motion.h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.p
            className="text-body-lg text-mist leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            I am a Full-Stack Developer based in Bangalore, India. I build robust web applications,
            responsive interfaces, and scalable containerized APIs. My expertise spans JavaScript, TypeScript,
            Python, React, Next.js, Node.js/Express, and Django REST Framework.
          </motion.p>

          <motion.p
            className="text-body text-mist leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            I have delivered production-grade solutions across healthcare, e-commerce, EdTech, and FinTech —
            deploying them on AWS with Docker. I enjoy writing clean, high-performance code and designing resilient system architectures.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-paper/5 pt-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }}
            >
              <p className="font-serif text-display-md text-paper mb-2">
                <AnimatedCounter value={stat.value} inView={inView} />
              </p>
              <p className="text-caption text-mist tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
