import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ContactCTA from '../components/home/ContactCTA'
import { team } from '../data/team'
import { images } from '../data/images'

const departments = [
  { title: 'Photography Team', text: 'Editorial eyes for every night — portraits, details, and press-ready selects.' },
  { title: 'Stage Team', text: 'Scenic builders and designers who turn concepts into structures that perform.' },
  { title: 'Operations', text: 'The calm center — vendors, timelines, contingencies, and guest flow.' },
]

export default function Team() {
  const [founder, ...rest] = team

  return (
    <>
      <SEO title="Team" description="Meet the creative and production minds behind THE DIVINE PRODUCTION." />
      <PageHero
        eyebrow="People"
        title={<>The minds behind the <span className="italic text-gold-light">magic</span></>}
        subtitle="Creators, producers, and hospitality leaders united by a single standard of excellence."
        image={images.team}
      />

      <section className="section-padding">
        <div className="container-luxury grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img src={founder.image} alt={founder.name} className="img-cover" />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <p className="font-btn text-[11px] tracking-[0.35em] uppercase text-gold mb-4">Founder</p>
            <h2 className="font-heading text-5xl text-white mb-2">{founder.name}</h2>
            <p className="text-gold mb-6">{founder.role}</p>
            <p className="text-grey text-lg leading-relaxed max-w-xl">{founder.bio}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-luxury">
          <SectionHeading eyebrow="Leadership" title="Creative & production leads" className="mb-14" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((m, i) => (
              <Reveal key={m.id} delay={(i % 3) * 0.08}>
                <div className="group">
                  <div className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden mb-5">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="img-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-5 left-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={m.social.linkedin} className="w-9 h-9 rounded-full bg-gold text-primary flex items-center justify-center">
                        <FaLinkedinIn size={14} />
                      </a>
                      <a href={m.social.instagram} className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center">
                        <FaInstagram size={14} />
                      </a>
                    </div>
                  </div>
                  <h3 className="font-heading text-2xl text-white">{m.name}</h3>
                  <p className="text-gold text-sm mt-1 mb-3">{m.role}</p>
                  <p className="text-grey text-sm leading-relaxed">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury grid md:grid-cols-3 gap-6">
          {departments.map((d, i) => (
            <div key={d.title} className="border border-gold/20 rounded-[2rem] p-8 hover:bg-gold/5 transition-colors">
              <span className="font-heading text-5xl text-gold/30">0{i + 1}</span>
              <h3 className="font-sub text-2xl text-white mt-4 mb-3">{d.title}</h3>
              <p className="text-grey text-sm">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
