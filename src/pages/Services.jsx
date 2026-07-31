import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Accordion from '../components/ui/Accordion'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import { services, eventProcess } from '../data/services'
import { serviceFaqs } from '../data/faqs'
import { images } from '../data/images'

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Explore premium event production services by THE DIVINE PRODUCTION." />
      <PageHero
        eyebrow="Capabilities"
        title={<>Services designed for <span className="italic text-gold-light">impact</span></>}
        subtitle="Full-spectrum production — from creative direction to the final cue — for corporate, celebration, and culture."
        image={images.stage}
      />

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Portfolio of Craft"
            title="Every discipline, one standard"
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.06}>
                <Link
                  to={`/services/${s.id}`}
                  className="group block relative rounded-[1.75rem] overflow-hidden aspect-[4/5]"
                >
                  <img src={s.image} alt={s.title} className="img-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-heading text-3xl text-white mb-2">{s.title}</h3>
                    <p className="text-grey text-sm line-clamp-2 mb-3">{s.short}</p>
                    <span className="font-btn text-[10px] tracking-[0.25em] uppercase text-gold inline-flex items-center gap-2">
                      Explore <FiArrowUpRight />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Process"
            title={<>How an experience is <span className="italic text-gold-light">born</span></>}
            align="center"
            className="mb-16"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventProcess.map((p, i) => (
              <div key={p.step} className="relative rounded-[2rem] border border-gold/15 bg-secondary/50 p-8 overflow-hidden">
                <span className="font-heading text-7xl text-gold/15 absolute -top-2 -right-1">{p.step}</span>
                <p className="font-btn text-[10px] tracking-[0.3em] uppercase text-gold mb-4">Step {p.step}</p>
                <h3 className="font-sub text-2xl text-white mb-3">{p.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Service questions" />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={serviceFaqs} />
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-luxury glass rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
              Ready to inquire?
            </h2>
            <p className="text-grey max-w-md">Tell us about your event — we&apos;ll craft a tailored proposal.</p>
          </div>
          <Button to="/book-event">Start Inquiry</Button>
        </div>
      </section>
    </>
  )
}
