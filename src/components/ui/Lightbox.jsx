import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index == null) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          type="button"
          className="absolute top-6 right-6 text-white/80 hover:text-gold transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX size={28} />
        </button>
        <button
          type="button"
          className="absolute left-4 md:left-8 text-white/70 hover:text-gold"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous"
        >
          <FiChevronLeft size={36} />
        </button>
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          src={images[index]}
          alt=""
          className="max-h-[82vh] max-w-[92vw] object-contain rounded-xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          type="button"
          className="absolute right-4 md:right-8 text-white/70 hover:text-gold"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next"
        >
          <FiChevronRight size={36} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
