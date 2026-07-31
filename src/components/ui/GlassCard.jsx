import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function GlassCard({ children, className, hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
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
