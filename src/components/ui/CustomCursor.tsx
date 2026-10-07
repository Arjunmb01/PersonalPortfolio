import { useEffect, useRef, useState } from 'react'

type CursorVariant = 'default' | 'hover' | 'view' | 'explore'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const [variant, setVariant] = useState<CursorVariant>('default')
  const [label, setLabel] = useState('')
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only enable custom cursor on pointer (mouse) devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }

      // Dot follows immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }

      // Detect cursor type from data attributes
      const target = e.target as HTMLElement
      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor') as CursorVariant | null

      if (cursorType === 'view') {
        setVariant('view')
        setLabel('VIEW')
      } else if (cursorType === 'explore') {
        setVariant('explore')
        setLabel('EXPLORE')
      } else if (target.closest('a, button, [role="button"]')) {
        setVariant('hover')
        setLabel('')
      } else {
        setVariant('default')
        setLabel('')
      }
    }

    window.addEventListener('mousemove', moveCursor)

    // Ring lerp animation
    let rafId: number
    function animateRing() {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      rafId = requestAnimationFrame(animateRing)
    }
    animateRing()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const ringSize = variant === 'default' ? 40 : variant === 'hover' ? 56 : 80
  const ringOpacity = variant === 'default' ? 0.5 : 0.8

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ mixBlendMode: 'difference' }}
      >
        <div
          className="bg-paper rounded-full"
          style={{
            width: 8,
            height: 8,
            marginLeft: -4,
            marginTop: -4,
            transition: 'transform 0.1s ease',
          }}
        />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <div
          className="border border-paper rounded-full flex items-center justify-center"
          style={{
            width: ringSize,
            height: ringSize,
            marginLeft: -ringSize / 2,
            marginTop: -ringSize / 2,
            opacity: ringOpacity,
            transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
          }}
        >
          {label && (
            <span
              ref={labelRef}
              className="text-[10px] text-paper tracking-widest uppercase font-medium"
            >
              {label}
            </span>
          )}
        </div>
      </div>
    </>
  )
}
