import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="font-btn text-[10px] tracking-[0.45em] uppercase text-gold mb-4">
              The Divine Production
            </p>
            <h1 className="font-heading text-4xl md:text-5xl gold-text">
              Creating Experiences
            </h1>
            <div className="mt-10 mx-auto h-[2px] w-40 bg-secondary overflow-hidden rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="h-full w-1/2 gold-gradient"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
