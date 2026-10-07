import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'exit'>('loading')
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    // Simulate preload progress
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!)
          setTimeout(() => {
            setPhase('exit')
            setTimeout(onComplete, 700)
          }, 300)
          return 100
        }
        // Accelerate toward 100, but slow near end until images load
        const increment = prev < 70 ? Math.random() * 8 + 4 : Math.random() * 2 + 1
        return Math.min(prev + increment, 100)
      })
    }, 80)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase === 'loading' && (
        <motion.div
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo mark */}
          <motion.div
            className="font-serif-italic text-5xl text-paper mb-16 tracking-tight flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>AMB</span>
            <span className="text-[12px] font-sans text-mist tracking-widest uppercase mt-2">Arjun M B</span>
          </motion.div>

          {/* Progress track */}
          <div className="w-48 h-px bg-paper/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Counter */}
          <motion.p
            className="text-caption text-mist mt-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.round(progress)}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
