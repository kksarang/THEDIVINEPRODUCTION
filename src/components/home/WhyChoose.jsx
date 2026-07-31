import {
  FiCalendar,
  FiClock,
  FiUsers,
  FiHeart,
  FiShield,
  FiAperture,
  FiCpu,
  FiSmile,
} from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import AnimatedCounter from '../ui/AnimatedCounter'
import GlassCard from '../ui/GlassCard'
import { stats } from '../../data/stats'

const iconMap = { FiCalendar, FiClock, FiUsers, FiHeart }

const reasons = [
  {
    icon: FiAperture,
    title: 'Cinematic Direction',
    text: 'Every production is composed with narrative pacing, light, and emotional architecture.',
  },
  {
    icon: FiShield,
    title: 'Operational Calm',
    text: 'Obsessive planning means show day feels effortless — for you and your guests.',
  },
  {
    icon: FiCpu,
    title: 'Tech Meets Taste',
    text: 'Broadcast AV, kinetic stages, and hybrid streams — never at the cost of elegance.',
  },
  {
    icon: FiSmile,
    title: 'Human Luxury',
    text: 'Hospitality that feels personal, not performative. Guests feel considered.',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-padding relative">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Why Divine"
          title={
            <>
              The difference is in
              <br />
              <span className="italic text-gold-light">the details</span>
            </>
          }
          align="center"
          className="mb-16"
          subtitle="Numbers tell part of the story. Craft tells the rest."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((s, i) => {
            const Icon = iconMap[s.icon] || FiHeart
            return (
              <GlassCard key={s.label} delay={i * 0.08} className="text-center !p-8">
                <Icon className="mx-auto text-gold mb-5" size={22} />
                <AnimatedCounter end={s.value} suffix={s.suffix} />
                <p className="mt-3 font-btn text-[10px] tracking-[0.22em] uppercase text-grey">
                  {s.label}
                </p>
              </GlassCard>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <GlassCard key={r.title} delay={i * 0.1} className="!rounded-[2rem]">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6">
                <r.icon size={22} />
              </div>
              <h3 className="font-sub text-2xl text-white mb-3">{r.title}</h3>
              <p className="text-grey text-sm leading-relaxed">{r.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
