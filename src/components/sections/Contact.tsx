import { useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, Link2, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { PERSONAL_INFO } from '../../lib/constants'

const contactLinks = [
  { icon: Mail, label: 'Email', href: `mailto:${PERSONAL_INFO.email}`, display: PERSONAL_INFO.email },
  { icon: Link2, label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, display: '/in/arjun-mb' },
  { icon: Globe, label: 'GitHub', href: PERSONAL_INFO.socials.github, display: 'github.com/Arjunmb01' },
  { icon: ArrowUpRight, label: 'Twitter', href: PERSONAL_INFO.socials.twitter, display: '@arjundev' },
  { icon: MapPin, label: 'Location', href: '#', display: PERSONAL_INFO.location },
]

const projectTypes = [
  'Healthcare / SaaS Platform',
  'Full-Stack Web Application',
  'E-Commerce & Payment Integration',
  'Real-Time Chat / WebSockets',
  'API & System Architecture',
  'Docker & Cloud Deployment',
  'Other',
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      setSubmitted(true)
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Project Inquiry&body=${encodeURIComponent(formState.message)}`
    }
  }

  return (
    <section id="contact" className="section-pad px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20">
          <motion.p
            className="text-caption text-accent tracking-widest uppercase mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contact
          </motion.p>
          <motion.h2
            className="font-serif text-display-lg text-paper leading-none max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            Have an idea?{' '}
            <span className="font-serif-italic text-accent">Let's build it.</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-mist mt-6 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Whether you're looking for a premium portfolio, business website or custom digital product,
            let's create something people remember.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="space-y-0 mb-16">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 border-b border-paper/5 py-6 hover:border-accent/20 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <div className="w-10 h-10 border border-paper/10 flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors duration-300">
                    <link.icon size={16} className="text-mist group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-caption text-mist tracking-widest uppercase mb-0.5">{link.label}</p>
                    <p className="text-body text-paper">{link.display}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-accent text-ink text-caption tracking-widest uppercase hover:bg-accent-light transition-colors duration-300"
              >
                Connect on LinkedIn
              </a>
              <a
                href="/resume.pdf"
                download="Arjun_MB_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-paper/20 text-paper text-caption tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-20">
                <p className="font-serif text-display-sm text-accent mb-4">Thank you.</p>
                <p className="text-body text-mist">I'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-caption text-mist tracking-widest uppercase block mb-3" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full bg-transparent border-b border-paper/15 py-3 text-body text-paper placeholder-mist/40 focus:border-accent outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-caption text-mist tracking-widest uppercase block mb-3" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full bg-transparent border-b border-paper/15 py-3 text-body text-paper placeholder-mist/40 focus:border-accent outline-none transition-colors duration-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-caption text-mist tracking-widest uppercase block mb-3" htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    value={formState.projectType}
                    onChange={e => setFormState(s => ({ ...s, projectType: e.target.value }))}
                    className="w-full bg-ink border-b border-paper/15 py-3 text-body text-paper focus:border-accent outline-none transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="bg-ink text-mist">Select a project type</option>
                    {projectTypes.map(t => (
                      <option key={t} value={t} className="bg-ink text-paper">{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-caption text-mist tracking-widest uppercase block mb-3" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="w-full bg-transparent border-b border-paper/15 py-3 text-body text-paper placeholder-mist/40 focus:border-accent outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-accent text-ink text-caption tracking-widest uppercase hover:bg-accent-light transition-colors duration-300 font-medium"
                >
                  Let's Build →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
