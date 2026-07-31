import { Link, useParams, Navigate } from 'react-router-dom'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import { services, eventProcess } from '../data/services'
import { serviceFaqs } from '../data/faqs'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)
  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <SEO title={service.title} description={service.short} image={service.image} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.short}
        image={service.image}
      >
        <Link to="/services" className="inline-flex items-center gap-2 text-gold font-btn text-xs tracking-[0.2em] uppercase">
          <FiArrowLeft /> All Services
        </Link>
      </PageHero>

      <section className="section-padding">
        <div className="container-luxury grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title="The Divine approach" />
            <p className="mt-8 text-grey text-lg leading-relaxed">{service.description}</p>
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-sub text-2xl text-white mb-5">Features</h3>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-grey">
                      <FiCheck className="text-gold mt-1 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-sub text-2xl text-white mb-5">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-grey">
                      <FiCheck className="text-gold mt-1 shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="glass rounded-[2rem] p-8 sticky top-28">
              <p className="font-btn text-[10px] tracking-[0.3em] uppercase text-gold mb-3">Inquire</p>
              <h3 className="font-heading text-3xl text-white mb-4">Plan this experience</h3>
              <p className="text-grey text-sm mb-8">Share dates, scale, and vision — we&apos;ll respond with a concept direction.</p>
              <Button to="/book-event" className="w-full mb-3">Book Consultation</Button>
              <Button to="/contact" variant="outline" className="w-full">Contact</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-luxury">
          <SectionHeading eyebrow="Gallery" title="Visual language" className="mb-10" />
          <div className="grid md:grid-cols-3 gap-4">
            {service.gallery.map((src, i) => (
              <div key={src} className={`rounded-3xl overflow-hidden aspect-[4/3] ${i === 1 ? 'md:translate-y-6' : ''}`}>
                <img src={src} alt="" className="img-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading eyebrow="Process" title="From brief to afterglow" className="mb-12" />
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {eventProcess.map((p) => (
              <div key={p.step} className="min-w-[260px] glass rounded-3xl p-6">
                <p className="font-heading text-4xl text-gold mb-3">{p.step}</p>
                <h3 className="font-sub text-xl text-white mb-2">{p.title}</h3>
                <p className="text-grey text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-luxury grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Common questions" />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={serviceFaqs} />
          </div>
        </div>
      </section>
    </>
  )
}
