import Marquee from '../ui/Marquee'
import { clients } from '../../data/clients'

export default function TrustedCompanies() {
  return (
    <section id="trusted" className="py-6 bg-primary/50">
      <p className="text-center font-btn text-[10px] tracking-[0.4em] uppercase text-gold mb-2 pt-8">
        Trusted by Visionary Brands
      </p>
      <Marquee items={clients.map((c) => c.name)} />
    </section>
  )
}
