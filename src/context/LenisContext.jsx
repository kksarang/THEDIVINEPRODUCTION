import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext(null)

export function LenisProvider({ children }) {
  const lenisRef = useRef(null)
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = instance
    setLenis(instance)

    let rafId = 0
    const raf = (time) => {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        instance.scrollTo(el, { offset: -80 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafId)
      instance.destroy()
      lenisRef.current = null
      setLenis(null)
    }
  }, [])

  const api = useMemo(
    () => ({
      lenis,
      scrollTo: (target, options) => {
        const instance = lenisRef.current
        if (instance) instance.scrollTo(target, options)
        else if (typeof target === 'number') window.scrollTo(0, target)
      },
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
    }),
    [lenis],
  )

  return <LenisContext.Provider value={api}>{children}</LenisContext.Provider>
}

export function useLenisContext() {
  const ctx = useContext(LenisContext)
  if (!ctx) {
    return {
      lenis: null,
      scrollTo: (target) => {
        if (typeof target === 'number') window.scrollTo({ top: target, behavior: 'smooth' })
      },
      stop: () => {},
      start: () => {},
    }
  }
  return ctx
}
