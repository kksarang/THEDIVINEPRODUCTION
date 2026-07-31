import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  const baseId = useId()

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-panel-${i}`
        const buttonId = `${baseId}-button-${i}`
        return (
          <div
            key={item.q}
            className="glass rounded-2xl overflow-hidden transition-colors duration-300 hover:border-gold/35"
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-6 px-6 md:px-8 py-6 text-left"
            >
              <span className="font-sub text-lg md:text-xl text-white">{item.q}</span>
              <span className="text-gold shrink-0" aria-hidden>
                {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 md:px-8 pb-7 text-grey leading-relaxed max-w-3xl">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
