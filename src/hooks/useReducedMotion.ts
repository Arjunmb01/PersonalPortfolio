import { useEffect } from 'react'

export function useReducedMotion(): boolean {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  return mediaQuery.matches
}

export function useReducedMotionEffect(callback: () => void) {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!mediaQuery.matches) {
      callback()
    }
  }, [callback])
}
