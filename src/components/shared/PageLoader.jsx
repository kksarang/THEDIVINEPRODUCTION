import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const preferReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = preferReduced ? 400 : 1400
    const t = setTimeout(() => setShow(false), delay)
    // Hard failsafe — never leave the splash covering the app
    const failsafe = setTimeout(() => setShow(false), 3200)
    return () => {
      clearTimeout(t)
      clearTimeout(failsafe)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <p className="font-btn text-[10px] tracking-[0.45em] uppercase text-gold mb-4">
              The Divine Production
            </p>
            <p className="font-heading text-4xl md:text-5xl gold-text">
              Creating Experiences
            </p>
            <div className="mt-10 mx-auto h-[2px] w-40 bg-secondary overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="h-full w-1/2 gold-gradient"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
