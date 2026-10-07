import { lazy, Suspense, useState, useCallback } from 'react'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About'
import Marquee from './components/sections/Marquee'
import Loader from './components/ui/Loader'
import CustomCursor from './components/ui/CustomCursor'
import AmbientBackground from './components/ui/AmbientBackground'

// Lazy-load below-fold sections for performance
const Experience = lazy(() => import('./components/sections/Experience'))
const Work = lazy(() => import('./components/sections/Work'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Services = lazy(() => import('./components/sections/Services'))
const WhyMe = lazy(() => import('./components/sections/WhyMe'))
const Achievements = lazy(() => import('./components/sections/Achievements'))
const Community = lazy(() => import('./components/sections/Community'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Contact = lazy(() => import('./components/sections/Contact'))
const FinalCTA = lazy(() => import('./components/sections/FinalCTA'))

function SectionFallback() {
  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="w-8 h-px bg-accent/30 animate-pulse" />
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Initialize Lenis smooth scroll
  useLenis()

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {/* Custom cursor — desktop only */}
      <CustomCursor />

      {/* Loading screen */}
      {!loaded && <Loader onComplete={handleLoadComplete} />}

      {/* Main app */}
      <div
        className="relative min-h-screen bg-ink text-paper"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <AmbientBackground />
        <Navbar />

        <main id="main-content" className="relative z-10">
          {/* Hero — critical path, not lazy */}
          <Hero />

          {/* About + Marquee — eager */}
          <About />
          <Marquee />

          {/* Below-fold sections — lazy loaded */}
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Work />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Services />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <WhyMe />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Achievements />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Community />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <FinalCTA />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  )
}
