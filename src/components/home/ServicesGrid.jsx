import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiBriefcase,
  FiAward,
  FiZap,
  FiBookOpen,
  FiStar,
  FiHeart,
  FiMapPin,
  FiTarget,
  FiGrid,
  FiMusic,
  FiArrowUpRight,
} from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { homeServices } from '../../data/services'

const icons = {
  FiBriefcase,
  FiAward,
  FiZap,
  FiBookOpen,
  FiStar,
  FiHeart,
  FiMapPin,
  FiTarget,
  FiGrid,
  FiMusic,
}

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-3xl rounded-full pointer-events-none" />
      <div className="container-luxury relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Craft"
            title={
              <>
                Signature <span className="italic text-gold-light">services</span>
              </>
            }
            subtitle="From boardrooms to ballrooms — each offering is designed with cinematic intention and operational excellence."
          />
          <Link
            to="/services"
            className="font-btn text-xs tracking-[0.25em] uppercase text-gold inline-flex items-center gap-2 shrink-0"
          >
            All Services <FiArrowUpRight />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {homeServices.map((s, i) => {
            const Icon = icons[s.icon] || FiStar
            const tall = i % 5 === 0
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.7 }}
                className={tall ? 'sm:row-span-1' : ''}
              >
                <Link
                  to={`/services/${s.id}`}
                  className="group relative block h-full min-h-[320px] rounded-[1.75rem] overflow-hidden"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="img-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                  <div className="absolute inset-0 p-7 flex flex-col justify-end">
                    <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mb-5 bg-bg/40 backdrop-blur-md">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-3xl text-white mb-2">{s.title}</h3>
                    <p className="text-grey text-sm line-clamp-2 mb-4">{s.short}</p>
                    <span className="font-btn text-[10px] tracking-[0.25em] uppercase text-gold inline-flex items-center gap-2 md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                      Learn More <FiArrowUpRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
