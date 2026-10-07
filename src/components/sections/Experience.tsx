import { motion } from 'framer-motion'
import { EXPERIENCES } from '../../lib/constants'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="section-pad px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p
            className="text-caption text-accent tracking-widest uppercase mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Career & Experience
          </motion.p>
          <motion.h2
            className="font-serif text-display-lg text-paper leading-none max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Building products{' '}
            <span className="font-serif-italic text-accent">in the real world.</span>
          </motion.h2>
        </div>

        <div className="relative border-l border-paper/10 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              className="relative group"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              {/* Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-ink border-2 border-accent transition-transform duration-300 group-hover:scale-125" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-serif text-display-sm text-paper group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-body text-mist-light mt-1">
                    <Briefcase size={15} className="text-accent" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-caption text-accent/80 font-mono tracking-widest uppercase">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-body text-mist max-w-2xl leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-caption text-mist border border-paper/10 px-3 py-1 tracking-wide bg-paper/[0.02]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
