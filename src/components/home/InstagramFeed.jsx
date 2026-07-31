import { FaInstagram } from 'react-icons/fa'
import { images } from '../../data/images'
import Reveal from '../ui/Reveal'

const feed = images.gallery.slice(0, 8)

export default function InstagramFeed() {
  return (
    <section className="section-padding pt-0">
      <div className="container-luxury">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-btn text-[11px] tracking-[0.35em] uppercase text-gold mb-4">
              @thedivineproduction
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-white">
              Moments from the <span className="italic text-gold-light">feed</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 font-btn text-xs tracking-[0.25em] uppercase text-gold"
          >
            <FaInstagram size={18} /> Follow Us
          </a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {feed.map((src, i) => (
            <a
              key={src}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto md:min-h-[360px]' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt=""
                className="img-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/50 transition-colors flex items-center justify-center">
                <FaInstagram className="text-gold opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100" size={28} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
