import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import Button from '../ui/Button'
import { homeServices } from '../../data/services'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  {
    to: '/services',
    label: 'Services',
    mega: true,
  },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/clients', label: 'Clients' },
  { to: '/team', label: 'Team' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMega(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-bg/85 backdrop-blur-xl border-b border-gold/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-luxury px-5 md:px-8 flex items-center justify-between gap-6">
        <Link to="/" className="relative z-10 group">
          <p className="font-btn text-[9px] tracking-[0.35em] uppercase text-gold mb-0.5">
            Est. 2015
          </p>
          <h1 className="font-heading text-xl md:text-2xl tracking-wide text-white group-hover:text-gold-light transition-colors">
            THE DIVINE <span className="text-gold">PRODUCTION</span>
          </h1>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((link) =>
            link.mega ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setMega(true)}
                onMouseLeave={() => setMega(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-btn text-[11px] tracking-[0.18em] uppercase px-3 py-2 inline-flex items-center gap-1 transition-colors ${
                      isActive ? 'text-gold' : 'text-white/75 hover:text-gold-light'
                    }`
                  }
                >
                  {link.label}
                  <FiChevronDown size={12} />
                </NavLink>
                <AnimatePresence>
                  {mega && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
                    >
                      <div className="glass-strong rounded-3xl p-6 w-[640px] grid grid-cols-2 gap-2 shadow-2xl">
                        {homeServices.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services/${s.id}`}
                            className="rounded-2xl px-4 py-3 hover:bg-gold/10 transition-colors"
                          >
                            <p className="font-sub text-white text-base">{s.title}</p>
                            <p className="text-grey text-xs mt-1 line-clamp-1">{s.short}</p>
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="col-span-2 mt-2 text-center font-btn text-[11px] tracking-[0.2em] uppercase text-gold py-3 border-t border-gold/15"
                        >
                          View All Services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-btn text-[11px] tracking-[0.18em] uppercase px-3 py-2 transition-colors ${
                    isActive ? 'text-gold' : 'text-white/75 hover:text-gold-light'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden xl:block">
          <Button to="/book-event" variant="primary" className="!px-6 !py-3 !text-[10px]">
            Book Event
          </Button>
        </div>

        <button
          type="button"
          className="xl:hidden text-white z-10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden overflow-hidden bg-bg/95 backdrop-blur-xl border-b border-gold/10"
          >
            <div className="px-6 py-8 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-heading text-3xl ${isActive ? 'text-gold' : 'text-white'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button to="/book-event" className="mt-4 w-full">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
