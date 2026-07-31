import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        align === 'right' && 'ml-auto text-right',
        className,
      )}
    >
      {eyebrow && (
        <p className="font-btn text-[11px] tracking-[0.35em] uppercase text-gold mb-5">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium',
          light ? 'text-white' : 'text-white',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-grey text-base md:text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
