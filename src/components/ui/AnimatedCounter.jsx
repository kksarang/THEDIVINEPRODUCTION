import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedCounter({ end, suffix = '', duration = 2.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl lg:text-7xl text-gold-light">
      {inView ? <CountUp end={end} duration={duration} separator="," /> : 0}
      {suffix}
    </span>
  )
}
