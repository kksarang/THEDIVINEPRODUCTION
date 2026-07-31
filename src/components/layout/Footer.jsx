import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import Button from '../ui/Button'

const quick = [
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/clients', label: 'Clients' },
  { to: '/team', label: 'Team' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { to: '/services/corporate-events', label: 'Corporate Events' },
  { to: '/services/wedding-management', label: 'Weddings' },
  { to: '/services/annual-day', label: 'Annual Days' },
  { to: '/services/product-launches', label: 'Product Launches' },
  { to: '/services/festival', label: 'Festivals' },
  { to: '/services/entertainment-booking', label: 'Entertainment' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const subscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
  }

  return (
    <footer className="relative border-t border-gold/15 bg-primary overflow-hidden">
      <div className="absolute -top-40 right-0 w-[480px] h-[480px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="container-luxury px-5 md:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <p className="font-btn text-[10px] tracking-[0.35em] uppercase text-gold mb-3">
              Creating Experiences
            </p>
            <h2 className="font-heading text-4xl text-white mb-6">
              THE DIVINE <span className="text-gold">PRODUCTION</span>
            </h2>
            <p className="text-grey max-w-sm leading-relaxed mb-8">
              A premium event management house crafting cinematic experiences for
              corporate brands, luxury weddings, and large-scale productions.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaInstagram, href: 'https://instagram.com' },
                { Icon: FaFacebookF, href: 'https://facebook.com' },
                { Icon: FaLinkedinIn, href: 'https://linkedin.com' },
                { Icon: FaWhatsapp, href: 'https://wa.me/919876543210' },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center text-gold-light hover:bg-gold hover:text-primary transition-all duration-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-btn text-[11px] tracking-[0.25em] uppercase text-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quick.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-grey hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-btn text-[11px] tracking-[0.25em] uppercase text-gold mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-grey hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-btn text-[11px] tracking-[0.25em] uppercase text-gold mb-6">
              Newsletter
            </h3>
            <p className="text-grey text-sm mb-5">
              Insights on luxury production, stagecraft, and experience design.
            </p>
            <form onSubmit={subscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-secondary border border-white/10 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-grey/60 focus:outline-none focus:border-gold/50"
              />
              <Button type="submit" variant="outline" className="w-full">
                Subscribe <FiArrowRight />
              </Button>
              {done && (
                <p className="text-gold text-xs tracking-wide">Thank you for joining.</p>
              )}
            </form>
            <div className="mt-8 text-sm text-grey space-y-1">
              <p>+91 98765 43210</p>
              <p>hello@thedivineproduction.com</p>
              <p>Mumbai · Bengaluru · Delhi NCR</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-grey tracking-wide">
          <p>© {new Date().getFullYear()} THE DIVINE PRODUCTION. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-gold">
              Privacy
            </Link>
            <Link to="/contact" className="hover:text-gold">
              Terms
            </Link>
            <Link to="/book-event" className="hover:text-gold">
              Book Event
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
