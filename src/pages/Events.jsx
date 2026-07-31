import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FiArrowUpRight, FiPlay } from 'react-icons/fi'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { events, categories } from '../data/events'
import { images } from '../data/images'

export default function Events() {
  const [params] = useSearchParams()
  const categoryParam = params.get('category') || 'All'
  const [filter, setFilter] = useState(
    categories.includes(categoryParam) ? categoryParam : 'All',
  )
  const [view, setView] = useState('gallery')

  useEffect(() => {
    setFilter(categories.includes(categoryParam) ? categoryParam : 'All')
  }, [categoryParam])

  const filtered = useMemo(
    () => (filter === 'All' ? events : events.filter((e) => e.category === filter)),
    [filter],
  )

  return (
    <>
      <SEO title="Events" description="Explore our luxury event portfolio across corporate, weddings, festivals and more." />
      <PageHero
        eyebrow="Portfolio"
        title={<>Work that defines <span className="italic text-gold-light">the standard</span></>}
        subtitle="A curated selection of productions — each with its own visual language and operational excellence."
        image={images.lighting}
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2.5 rounded-full font-btn text-[10px] tracking-[0.2em] uppercase border transition-all ${
                    filter === c
                      ? 'bg-gold text-primary border-gold'
                      : 'border-gold/25 text-grey hover:border-gold/50 hover:text-gold'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {['gallery', 'videos', 'cases'].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setView(v)}
                  className={`px-4 py-2 rounded-full text-xs font-btn tracking-wider uppercase ${
                    view === v ? 'text-gold' : 'text-grey'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {view === 'cases' ? (
            <div className="space-y-8">
              {filtered.map((e, i) => (
                <Reveal key={e.id}>
                  <Link
                    to={`/events/${e.id}`}
                    className={`grid lg:grid-cols-12 gap-6 items-center group ${i % 2 ? 'direction-rtl' : ''}`}
                  >
                    <div className={`lg:col-span-7 rounded-[2rem] overflow-hidden aspect-[16/10] ${i % 2 ? 'lg:order-2' : ''}`}>
                      <img src={e.image} alt={e.title} className="img-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                      <p className="font-btn text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
                        {e.category} · {e.location}
                      </p>
                      <h3 className="font-heading text-4xl text-white mb-4 group-hover:text-gold-light transition-colors">
                        {e.title}
                      </h3>
                      <p className="text-grey mb-6">{e.summary}</p>
                      <span className="inline-flex items-center gap-2 text-gold font-btn text-xs tracking-[0.2em] uppercase">
                        View Case Study <FiArrowUpRight />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((e, i) => (
                <Reveal key={e.id} delay={(i % 3) * 0.08}>
                  <Link to={`/events/${e.id}`} className="group block relative rounded-[1.5rem] overflow-hidden aspect-[4/5]">
                    <img src={e.image} alt={e.title} className="img-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                    {view === 'videos' && e.video && (
                      <span className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center text-gold">
                        <FiPlay size={14} className="ml-0.5" />
                      </span>
                    )}
                    <div className="absolute bottom-0 p-6">
                      <p className="font-btn text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                        {e.category}
                      </p>
                      <h3 className="font-heading text-2xl text-white">{e.title}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-luxury">
          <SectionHeading eyebrow="Insights" title="What our case studies prove" className="mb-10" />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ['Scale with soul', 'Large audiences never dilute intimacy when guest journeys are designed.'],
              ['Reveal with control', 'Spectacle works when secrecy, timing, and tech redundancy align.'],
              ['Luxury is calm', 'The best compliment is a client who never felt the complexity.'],
            ].map(([t, d]) => (
              <div key={t} className="glass rounded-3xl p-8">
                <h3 className="font-sub text-2xl text-white mb-3">{t}</h3>
                <p className="text-grey text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
