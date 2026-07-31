import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay, FiX } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { showcaseVideo, videoPoster } from '../../data/images'
import { useLenisContext } from '../../context/LenisContext'

export default function VideoShowcase() {
  const [open, setOpen] = useState(false)
  const { stop, start } = useLenisContext()

  useEffect(() => {
    if (!open) return undefined
    stop()
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      start()
    }
  }, [open, stop, start])

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="On Film"
          title={
            <>
              Moments that <span className="italic text-gold-light">move</span>
            </>
          }
          align="center"
          className="mb-14"
          subtitle="A glimpse into the atmospheres we build — light, sound, and human emotion in frame."
        />

        <div className="relative aspect-video rounded-[2rem] overflow-hidden group">
          <img src={videoPoster} alt="Showreel preview" className="img-cover" />
          <div className="absolute inset-0 bg-bg/45 group-hover:bg-bg/35 transition-colors" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play showreel"
          >
            <span className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-gold/50 bg-bg/50 backdrop-blur-md flex items-center justify-center text-gold animate-pulse-gold group-hover:scale-110 transition-transform">
              <FiPlay size={28} className="ml-1" />
            </span>
          </button>
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div>
              <p className="font-btn text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                Showreel 2025
              </p>
              <h3 className="font-heading text-3xl md:text-4xl text-white">The Divine Standard</h3>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Showreel player"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gold"
              aria-label="Close"
            >
              <FiX size={28} />
            </button>
            <video
              controls
              autoPlay
              playsInline
              className="w-full max-w-5xl rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={showcaseVideo} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
