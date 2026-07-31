import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import { featuredEvents } from '../../data/events'

export default function FeaturedEvents() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Featured <span className="italic text-gold-light">experiences</span>
              </>
            }
          />
          <div className="flex flex-wrap gap-2">
            {['Corporate', 'Annual Day', 'Festival', 'School', 'Launch', 'Wedding'].map((c) => (
              <Link
                key={c}
                to={`/events?category=${encodeURIComponent(c)}`}
                className="px-4 py-2 rounded-full border border-gold/25 text-xs font-btn tracking-wider uppercase text-grey hover:text-gold hover:border-gold/50 transition-colors"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-5 space-y-5">
          {featuredEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="break-inside-avoid"
            >
              <Link to={`/events/${event.id}`} className="group block relative rounded-[1.5rem] overflow-hidden">
                <div className={`${i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="img-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-btn text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                    {event.category} · {event.year}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl text-white flex items-center gap-2">
                    {event.title}
                    <FiArrowUpRight className="md:opacity-0 md:group-hover:opacity-100 transition-opacity text-gold opacity-100" />
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
