import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import Button from '../ui/Button'
import { showcaseVideo, videoPoster } from '../../data/images'

function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => i)
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {dots.map((i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold/40 animate-float"
          style={{
            width: 2 + (i % 4),
            height: 2 + (i % 4),
            left: `${(i * 17) % 100}%`,
            top: `${(i * 29) % 100}%`,
            animationDelay: `${i * 0.35}s`,
            opacity: 0.35 + (i % 5) * 0.1,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  // Keep hero copy readable while scrolling — only soft fade, never fully hide the page
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.35])

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={videoPoster}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={videoPoster}
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={showcaseVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,9,0.75)_100%)]" />
      </motion.div>

      <Particles />

      <motion.div style={{ opacity }} className="container-luxury relative z-10 px-5 md:px-8 pt-28 pb-20 w-full">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-btn text-[11px] md:text-xs tracking-[0.4em] uppercase text-gold mb-8"
          >
            The Divine Production
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[3.2rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.92] text-white"
            >
              Creating
              <br />
              <span className="gold-text italic">Extraordinary</span>
              <br />
              Experiences
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 max-w-xl text-grey text-lg md:text-xl font-light"
          >
            Not just events — living cinema for brands, celebrations, and audiences
            who expect the exceptional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button to="/events">Explore Events</Button>
            <Button to="/book-event" variant="outline">
              Book Consultation
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#trusted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-gold/80"
      >
        <span className="font-btn text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <FiArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  )
}
