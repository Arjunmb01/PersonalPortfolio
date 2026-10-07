import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../../lib/constants'

function ProjectRow({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center py-20 border-b border-paper/5"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      data-cursor="view"
    >
      {/* Image — alternates left/right */}
      <div
        className={`relative overflow-hidden aspect-[4/3] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
        {/* Project Number & Category */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-caption text-accent/60 font-mono tracking-widest">
            {project.number || `0${index + 1}`}
          </span>
          <span className="w-6 h-px bg-accent/30" />
          <p className="text-caption text-accent tracking-widest uppercase">
            {project.category}
          </p>
        </div>

        {/* Title */}
        <h3 className="font-serif text-display-md text-paper leading-none mb-6 group-hover:text-accent transition-colors duration-500">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-body text-mist leading-relaxed max-w-lg mb-8">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-caption text-mist border border-paper/10 px-3 py-1 tracking-wide bg-paper/[0.02]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-caption text-paper tracking-widest uppercase hover:text-accent transition-colors duration-300"
            aria-label={`View live demo of ${project.title}`}
          >
            Live Demo
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-caption text-mist tracking-widest uppercase hover:text-paper transition-colors duration-300"
              aria-label={`View GitHub repo for ${project.title}`}
            >
              GitHub Code
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  return (
    <section id="work" className="section-pad px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-20 border-b border-paper/5 pb-8">
          <div>
            <motion.p
              className="text-caption text-accent tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Selected Work
            </motion.p>
            <motion.h2
              className="font-serif text-display-lg text-paper leading-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Built to{' '}
              <span className="font-serif-italic text-accent">impress.</span>
            </motion.h2>
          </div>
          <motion.span
            className="text-caption text-mist tracking-widest hidden md:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {PROJECTS.length} projects
          </motion.span>
        </div>

        {/* Project list */}
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}

        {/* Explore more CTA */}
        <motion.div
          className="mt-20 p-12 lg:p-16 border border-paper/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-paper/[0.01]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="text-caption text-accent tracking-widest uppercase block mb-2">Want to see more?</span>
            <h3 className="font-serif text-display-sm text-paper mb-2">Explore all repositories & experimental builds</h3>
            <p className="text-body text-mist max-w-lg">
              Check out open source libraries, backend services, and interactive experiments on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Arjunmb01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-ink text-caption tracking-widest uppercase hover:bg-accent-light transition-colors duration-300 font-medium whitespace-nowrap"
          >
            See All Works on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
