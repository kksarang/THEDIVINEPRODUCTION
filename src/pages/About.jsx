import { motion } from 'framer-motion'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ContactCTA from '../components/home/ContactCTA'
import { images } from '../data/images'
import { timeline, values, awards } from '../data/stats'
import { team } from '../data/team'

export default function About() {
  const founder = team[0]

  return (
    <>
      <SEO title="About" description="Discover the story, mission, and craft behind THE DIVINE PRODUCTION." />
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Crafted for those who
            <br />
            expect <span className="italic text-gold-light">more</span>
          </>
        }
        subtitle="A decade of composing experiences that feel like living cinema — for brands, families, and audiences across India."
        image={images.about}
        tall
      />

      <section className="section-padding">
        <div className="container-luxury grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <p className="font-btn text-[11px] tracking-[0.35em] uppercase text-gold mb-5">Company Story</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white leading-tight mb-6">
              Born from a belief that events could feel like <span className="italic text-gold-light">film</span>
            </h2>
            <p className="text-grey leading-relaxed mb-5">
              THE DIVINE PRODUCTION began in 2015 with a small crew and an outsized standard —
              every cue intentional, every entrance considered, every guest journey designed.
            </p>
            <p className="text-grey leading-relaxed">
              Today we produce across corporate summits, luxury weddings, festivals, and brand
              spectacles — still guided by the same quiet obsession with craft.
            </p>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4] sm:mt-12">
              <img src={images.stage} alt="" className="img-cover" loading="lazy" />
            </div>
            <div className="rounded-[2rem] overflow-hidden aspect-[3/4]">
              <img src={images.lighting} alt="" className="img-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-luxury grid md:grid-cols-2 gap-8">
          {[
            ['Mission', 'To elevate gatherings into emotional landmarks through cinematic craft and radical ownership.'],
            ['Vision', 'To set the gold standard for experiential luxury — where taste, technology, and hospitality converge.'],
          ].map(([t, d], i) => (
            <GlassCard key={t} delay={i * 0.1} className="!p-10 !rounded-[2.2rem]">
              <p className="font-btn text-[10px] tracking-[0.3em] uppercase text-gold mb-4">0{i + 1}</p>
              <h3 className="font-heading text-4xl text-white mb-4">{t}</h3>
              <p className="text-grey text-lg leading-relaxed">{d}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Values"
            title={<>Principles that shape every <span className="italic text-gold-light">production</span></>}
            className="mb-14"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="relative pt-10 border-t border-gold/30"
              >
                <span className="absolute top-0 right-0 font-heading text-5xl text-gold/20">0{i + 1}</span>
                <h3 className="font-sub text-2xl text-white mb-3">{v.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Timeline"
            title={<>Our <span className="italic text-gold-light">journey</span></>}
            className="mb-16"
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/25" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.05} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 ? '' : ''}`}>
                  <div className={`${i % 2 ? 'md:order-2 md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <p className="font-btn text-gold tracking-[0.25em] text-sm mb-2">{t.year}</p>
                    <h3 className="font-heading text-3xl text-white mb-3">{t.title}</h3>
                    <p className="text-grey">{t.text}</p>
                  </div>
                  <div className={`hidden md:block ${i % 2 ? 'md:order-1' : ''}`} />
                  <span className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold top-2" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading eyebrow="Recognition" title="Achievements" className="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((a, i) => (
              <GlassCard key={a.title} delay={i * 0.08} className="text-center">
                <p className="font-heading text-4xl text-gold mb-3">{a.year}</p>
                <h3 className="font-sub text-xl text-white mb-2">{a.title}</h3>
                <p className="text-grey text-sm">{a.org}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary overflow-hidden">
        <div className="container-luxury grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img src={founder.image} alt={founder.name} className="img-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-4 glass rounded-2xl p-5 hidden sm:block"
            >
              <p className="font-heading text-2xl text-white">{founder.name}</p>
              <p className="text-gold text-sm">{founder.role}</p>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Founder"
              title={<>A standard, not a <span className="italic text-gold-light">template</span></>}
              subtitle={founder.bio}
            />
            <p className="mt-6 text-grey leading-relaxed max-w-xl">
              “We don’t decorate evenings. We compose them — so when the lights rise, the room
              already knows how to feel.”
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="flex items-end justify-between gap-6 mb-12">
            <SectionHeading eyebrow="People" title="Meet the team" />
            <Button to="/team" variant="outline" className="hidden md:inline-flex">
              View Team
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.slice(0, 4).map((m) => (
              <div key={m.id} className="group">
                <div className="aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-4">
                  <img src={m.image} alt={m.name} className="img-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <h3 className="font-heading text-2xl text-white">{m.name}</h3>
                <p className="text-gold text-sm mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading eyebrow="Spaces" title="Office gallery" className="mb-12" />
          <div className="grid md:grid-cols-3 gap-4">
            {[images.office, images.team, images.stage].map((src, i) => (
              <div
                key={src}
                className={`rounded-[1.5rem] overflow-hidden ${i === 1 ? 'md:translate-y-8' : ''}`}
              >
                <div className="aspect-[4/3]">
                  <img src={src} alt="" className="img-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
