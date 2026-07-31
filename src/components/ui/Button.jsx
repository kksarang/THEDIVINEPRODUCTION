import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const base =
  'font-btn inline-flex items-center justify-center gap-2 rounded-full text-xs md:text-sm tracking-[0.18em] uppercase font-medium transition-all duration-500 relative overflow-hidden'

const variants = {
  primary:
    'bg-gold text-primary px-8 py-4 hover:bg-gold-light shadow-[0_0_40px_rgba(200,162,93,0.25)]',
  outline:
    'border border-gold/50 text-gold-light px-8 py-4 hover:bg-gold/10 hover:border-gold',
  ghost: 'text-gold-light px-6 py-3 hover:text-gold',
  dark: 'bg-secondary text-white border border-white/10 px-8 py-4 hover:border-gold/40',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className,
  type = 'button',
  onClick,
  disabled,
}) {
  const classes = cn(base, variants[variant], disabled && 'opacity-50 cursor-not-allowed', className)
  const content = (
    <motion.span whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
