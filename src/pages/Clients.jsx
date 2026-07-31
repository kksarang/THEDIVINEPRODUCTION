import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import Testimonials from '../components/home/Testimonials'
import Marquee from '../components/ui/Marquee'
import ContactCTA from '../components/home/ContactCTA'
import { clients, industries, partnerships } from '../data/clients'
import { featuredEvents } from '../data/events'
import { images } from '../data/images'
import { Link } from 'react-router-dom'

export default function Clients() {
  return (
    <>
      <SEO title="Clients" description="Brands and partners who trust THE DIVINE PRODUCTION." />
      <PageHero
        eyebrow="Partnerships"
        title={<>Trusted by those who <span className="italic text-gold-light">lead</span></>}
        subtitle="From technology giants to cultural institutions — relationships built on craft and calm."
        image={images.corporate}
      />

      <section className="py-10">
        <Marquee items={clients.map((c) => c.name)} />
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading eyebrow="Logos" title="Brand partners" className="mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <GlassCard key={c.name} delay={(i % 4) * 0.05} className="text-center !py-10">
                <p className="font-heading text-2xl text-white">{c.name}</p>
                <p className="text-gold text-xs font-btn tracking-widest uppercase mt-3">{c.industry}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-luxury">
          <SectionHeading eyebrow="Case Studies" title="Shared victories" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-5">
            {featuredEvents.slice(0, 3).map((e) => (
              <Link key={e.id} to={`/events/${e.id}`} className="group rounded-[1.5rem] overflow-hidden relative aspect-[4/5]">
                <img src={e.image} alt={e.title} className="img-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="text-gold text-xs mb-2">{e.client}</p>
                  <h3 className="font-heading text-2xl text-white">{e.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading eyebrow="Alliances" title="Brand partnerships" className="mb-12" />
          <div className="grid lg:grid-cols-3 gap-5">
            {partnerships.map((p, i) => (
              <GlassCard key={p.title} delay={i * 0.1}>
                <p className="font-btn text-[10px] tracking-[0.25em] uppercase text-gold mb-4">{p.brand}</p>
                <h3 className="font-sub text-2xl text-white mb-3">{p.title}</h3>
                <p className="text-grey text-sm">{p.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading eyebrow="Industries" title="Sectors we serve" align="center" className="mb-12" />
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-6 py-3 rounded-full border border-gold/25 text-sm text-grey hover:text-gold hover:border-gold/50 transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactCTA />
    </>
  )
}
