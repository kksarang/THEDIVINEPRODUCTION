import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function GlassCard({ children, className, hover = true, delay = 0 }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div
        className={cn(
          'glass rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]',
          className,
        )}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6, transition: { duration: 0.35 } } : undefined}
      className={cn(
        'glass rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]',
        hover && 'hover:border-gold/40 transition-colors duration-500',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
