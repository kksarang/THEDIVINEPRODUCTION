import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { images } from '../../data/images'

export default function AboutPreview() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-luxury grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
            <motion.img style={{ y }} src={images.about} alt="About Divine" className="img-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:right-8 glass rounded-3xl p-6 max-w-[220px] hidden sm:block">
            <p className="font-heading text-5xl text-gold">10+</p>
            <p className="text-grey text-sm mt-1">Years crafting unforgettable nights</p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                Experiences composed
                <br />
                <span className="italic text-gold-light">like cinema</span>
              </>
            }
            subtitle="THE DIVINE PRODUCTION is a luxury event house where creative direction, technical mastery, and hospitality converge. We design nights that feel inevitable — never improvised."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              ['Mission', 'To elevate gatherings into emotional landmarks.'],
              ['Vision', 'To set the gold standard for experiential luxury in India.'],
            ].map(([t, d]) => (
              <div key={t} className="border-l border-gold/30 pl-5">
                <h3 className="font-sub text-xl text-white mb-2">{t}</h3>
                <p className="text-grey text-sm">{d}</p>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-3 font-btn text-xs tracking-[0.25em] uppercase text-gold hover:text-gold-light transition-colors group"
          >
            Read More
            <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
