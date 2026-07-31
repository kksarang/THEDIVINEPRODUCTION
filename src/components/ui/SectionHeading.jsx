import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}) {
  const reduced = useReducedMotion()
  const Wrapper = reduced ? 'div' : motion.div

  return (
    <Wrapper
      {...(!reduced && {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2, margin: '0px 0px -40px 0px' },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      })}
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
    </Wrapper>
  )
}
