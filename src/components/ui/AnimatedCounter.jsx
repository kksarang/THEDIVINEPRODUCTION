import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function formatNumber(value) {
  return Math.round(value).toLocaleString('en-US')
}

export default function AnimatedCounter({ end, suffix = '', duration = 2.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return undefined

    const target = Number(end) || 0
    if (target <= 0) {
      setValue(0)
      return undefined
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setValue(target)
      return undefined
    }

    let frame = 0
    const start = performance.now()
    const ms = Math.max(0.4, duration) * 1000

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / ms)
      // easeOutCubic
      const eased = 1 - (1 - progress) ** 3
      setValue(target * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, end, duration])

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl lg:text-7xl text-gold-light">
      {formatNumber(value)}
      {suffix}
    </span>
  )
}
