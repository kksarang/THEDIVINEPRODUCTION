import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  tall = false,
  children,
}) {
  return (
    <section
      className={`relative overflow-hidden ${tall ? 'min-h-[85vh]' : 'min-h-[60vh] md:min-h-[70vh]'} flex items-end`}
    >
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          src={image}
          alt=""
          className="img-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-transparent" />
      </div>

      <div className="container-luxury relative z-10 section-padding w-full pb-20 md:pb-28">
        <Reveal>
          {eyebrow && (
            <p className="font-btn text-[11px] tracking-[0.4em] uppercase text-gold mb-6">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-white max-w-5xl leading-[0.95]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 max-w-2xl text-grey text-lg md:text-xl font-light">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
