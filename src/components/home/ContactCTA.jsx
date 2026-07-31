import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { images } from '../../data/images'

export default function ContactCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={images.lighting} alt="" className="img-cover" />
        <div className="absolute inset-0 bg-bg/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/40" />
      </div>
      <div className="container-luxury relative z-10 px-5 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="font-btn text-[11px] tracking-[0.4em] uppercase text-gold mb-6">
            Begin the Journey
          </p>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl mx-auto leading-[1.05]">
            Let&apos;s Create Something{' '}
            <span className="italic gold-text">Extraordinary</span>
          </h2>
          <p className="mt-8 text-grey text-lg max-w-2xl mx-auto">
            Share your vision. We&apos;ll return with a concept worthy of the moment.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button to="/book-event">Book Consultation</Button>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
