import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

export interface HeroCanvasHandle {
  setProgress: (progress: number) => void
}

const HeroCanvas = forwardRef<HeroCanvasHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const currentProgressRef = useRef(0)
  const targetProgressRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const imgRef = useRef<HTMLImageElement | null>(null)
  const rafRef = useRef<number>(0)
  const isLoadedRef = useRef(false)

  useImperativeHandle(ref, () => ({
    setProgress: (progress: number) => {
      targetProgressRef.current = Math.max(0, Math.min(1, progress))
    },
  }))

  useEffect(() => {
    const img = new Image()
    img.src = '/images/arjun_hero.jpg'
    img.onload = () => {
      imgRef.current = img
      isLoadedRef.current = true
      draw()
    }
    img.onerror = () => {
      // Fallback to uploaded portrait
      const fallback = new Image()
      fallback.src = '/images/arjun-portrait.jpg'
      fallback.onload = () => {
        imgRef.current = fallback
        isLoadedRef.current = true
        draw()
      }
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      mouseRef.current.targetX = relX * 25
      mouseRef.current.targetY = relY * 20
    }

    const handlePointerLeave = () => {
      mouseRef.current.targetX = 0
      mouseRef.current.targetY = 0
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)

    const resizeCanvas = () => {
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      draw()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop for silky smooth interpolation
    const renderLoop = () => {
      // Smooth progress lerp
      currentProgressRef.current +=
        (targetProgressRef.current - currentProgressRef.current) * 0.12

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08

      draw()
      rafRef.current = requestAnimationFrame(renderLoop)
    }

    rafRef.current = requestAnimationFrame(renderLoop)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  function draw() {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cw = canvas.width
    const ch = canvas.height
    if (cw === 0 || ch === 0) return

    const img = imgRef.current
    const progress = currentProgressRef.current
    const mouse = mouseRef.current

    ctx.save()
    ctx.setTransform(1, 0, 0, 1, 0, 0)

    // Deep luxury dark background
    ctx.fillStyle = '#0a0a0a'
    ctx.fillRect(0, 0, cw, ch)

    if (img && isLoadedRef.current) {
      const iw = img.naturalWidth
      const ih = img.naturalHeight

      if (iw > 0 && ih > 0) {
        const isDesktop = cw > 768 * (window.devicePixelRatio || 1)

        // Fit portrait height comfortably so face, hair, and upper body are framed with elegance
        const targetH = isDesktop ? (ch - 80) * 0.90 : (ch - 80) * 0.85
        const maxW = isDesktop ? cw * 0.46 : cw * 0.95
        const scale = Math.min(maxW / iw, targetH / ih)
        const dw = iw * scale
        const dh = ih * scale

        // ── SCROLL CHOREOGRAPHY ──────────────────────────────────────────────
        // At progress 0: person starts at center or right-center
        // As scroll progress goes down (progress 0 -> 1): person smoothly moves to the LEFT SIDE
        const startX = isDesktop ? (cw - dw) * 0.62 : (cw - dw) * 0.5
        const endX = isDesktop ? cw * 0.04 : cw * 0.02

        // Smooth cubic ease-in-out for fluid deceleration
        const t = progress
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

        const dx = startX + (endX - startX) * eased + mouse.x
        // Vertically center in safe zone below 80px navbar
        const dy = 80 + Math.max(0, (ch - 80 - dh) / 2) + mouse.y

        const centerX = dx + dw / 2
        const centerY = dy + dh * 0.38

        // ── AMBIENT LUXURY BACKLIGHT GLOW (moves with the person) ───────────
        const glowRadius = Math.max(dw, dh) * 0.65
        const glowGrad = ctx.createRadialGradient(
          centerX,
          centerY,
          glowRadius * 0.1,
          centerX,
          centerY,
          glowRadius
        )
        // Warm gold / amber aura blending into deep navy/ink
        glowGrad.addColorStop(0, 'rgba(200, 169, 110, 0.18)')
        glowGrad.addColorStop(0.35, 'rgba(56, 189, 248, 0.09)')
        glowGrad.addColorStop(0.7, 'rgba(10, 10, 10, 0.04)')
        glowGrad.addColorStop(1, 'rgba(10, 10, 10, 0)')

        ctx.fillStyle = glowGrad
        ctx.beginPath()
        ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2)
        ctx.fill()

        // ── DRAW SUBJECT ────────────────────────────────────────────────────
        ctx.save()

        // Subtle scale breathing as person travels left
        const scaleFactor = 1 + eased * 0.04
        ctx.translate(centerX, centerY)
        ctx.scale(scaleFactor, scaleFactor)
        ctx.translate(-centerX, -centerY)

        ctx.drawImage(img, 0, 0, iw, ih, dx, dy, dw, dh)

        // ── BOTTOM SOFT FADE / MASK ─────────────────────────────────────────
        // Seamlessly dissolve bottom torso edge into #0a0a0a background
        const fadeH = dh * 0.35
        const fadeGrad = ctx.createLinearGradient(0, dy + dh - fadeH, 0, dy + dh + 10)
        fadeGrad.addColorStop(0, 'rgba(10, 10, 10, 0)')
        fadeGrad.addColorStop(0.6, 'rgba(10, 10, 10, 0.75)')
        fadeGrad.addColorStop(1, '#0a0a0a')

        ctx.fillStyle = fadeGrad
        ctx.fillRect(dx - 20, dy + dh - fadeH, dw + 40, fadeH + 20)

        // Soft side vignette for cinematic seamless blending
        const leftFade = ctx.createLinearGradient(dx - 10, 0, dx + dw * 0.15, 0)
        leftFade.addColorStop(0, 'rgba(10, 10, 10, 0.6)')
        leftFade.addColorStop(1, 'rgba(10, 10, 10, 0)')
        ctx.fillStyle = leftFade
        ctx.fillRect(dx - 10, dy, dw * 0.15, dh)

        const rightFade = ctx.createLinearGradient(dx + dw - dw * 0.15, 0, dx + dw + 10, 0)
        rightFade.addColorStop(0, 'rgba(10, 10, 10, 0)')
        rightFade.addColorStop(1, 'rgba(10, 10, 10, 0.6)')
        ctx.fillStyle = rightFade
        ctx.fillRect(dx + dw - dw * 0.15, dy, dw * 0.15, dh)

        ctx.restore()
      }
    }

    ctx.restore()
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-label="Portrait of Arjun M B dynamically shifting as you scroll"
      role="img"
      style={{ display: 'block' }}
    />
  )
})

HeroCanvas.displayName = 'HeroCanvas'
export default HeroCanvas
