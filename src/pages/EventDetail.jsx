import { Link, useParams, Navigate } from 'react-router-dom'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { getEventById, relatedEvents } from '../data/events'

export default function EventDetail() {
  const { id } = useParams()
  const event = getEventById(id)
  if (!event) return <Navigate to="/events" replace />
  const related = relatedEvents(event.id, event.category)

  return (
    <>
      <SEO title={event.title} description={event.summary} image={event.image} />
      <PageHero
        eyebrow={`${event.category} · ${event.year}`}
        title={event.title}
        subtitle={`${event.location} · ${event.guests} guests · ${event.client}`}
        image={event.image}
        tall
      />

      <section className="section-padding">
        <div className="container-luxury grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <SectionHeading eyebrow="Overview" title="The experience" />
            <p className="mt-8 text-grey text-lg leading-relaxed">{event.summary}</p>

            <div className="mt-14 space-y-12">
              {[
                ['The Challenge', event.challenge],
                ['Planning', event.planning],
                ['Execution', event.execution],
                ['Result', event.result],
              ].map(([t, d], i) => (
                <Reveal key={t}>
                  <div className="grid md:grid-cols-12 gap-4 border-t border-gold/20 pt-8">
                    <div className="md:col-span-3">
                      <p className="font-btn text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                        0{i + 1}
                      </p>
                      <h3 className="font-sub text-2xl text-white">{t}</h3>
                    </div>
                    <p className="md:col-span-9 text-grey leading-relaxed">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="glass rounded-[2rem] p-8 sticky top-28 space-y-5">
              {[
                ['Client', event.client],
                ['Category', event.category],
                ['Location', event.location],
                ['Year', event.year],
                ['Guests', event.guests],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-4">
                  <span className="text-grey text-sm">{k}</span>
                  <span className="text-white text-sm text-right">{v}</span>
                </div>
              ))}
              <Button to="/book-event" className="w-full mt-4">
                Plan Similar Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-luxury">
          <SectionHeading eyebrow="Gallery" title="Visual archive" className="mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {event.gallery.map((src, i) => (
              <div
                key={src}
                className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}
              >
                <img src={src} alt="" className="img-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-4xl mx-auto text-center">
          <p className="font-btn text-[11px] tracking-[0.3em] uppercase text-gold mb-6">
            Client Feedback
          </p>
          <blockquote className="font-sub text-3xl md:text-4xl text-white leading-relaxed">
            “{event.feedback}”
          </blockquote>
          <p className="mt-8 text-grey">— {event.client}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-luxury">
            <SectionHeading eyebrow="More" title="Related events" className="mb-10" />
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((e) => (
                <Link key={e.id} to={`/events/${e.id}`} className="group block rounded-[1.5rem] overflow-hidden relative aspect-[4/5]">
                  <img src={e.image} alt={e.title} className="img-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <p className="text-gold text-xs font-btn tracking-widest uppercase mb-2">{e.category}</p>
                    <h3 className="font-heading text-2xl text-white">{e.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
