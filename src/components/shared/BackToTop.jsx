import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { useLenisContext } from '../../context/LenisContext'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const { lenis, scrollTo } = useLenisContext()

  useEffect(() => {
    const update = (scroll) => setShow(scroll > 700)

    if (lenis) {
      const onScroll = (e) => update(e.scroll)
      lenis.on('scroll', onScroll)
      update(lenis.scroll)
      return () => lenis.off('scroll', onScroll)
    }

    const onWindowScroll = () => update(window.scrollY)
    window.addEventListener('scroll', onWindowScroll, { passive: true })
    return () => window.removeEventListener('scroll', onWindowScroll)
  }, [lenis])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => scrollTo(0, { duration: 1.1 })}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full glass border border-gold/40 text-gold flex items-center justify-center hover:bg-gold/15 transition-colors"
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
