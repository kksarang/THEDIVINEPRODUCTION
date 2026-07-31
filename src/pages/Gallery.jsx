import { useMemo, useState } from 'react'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import Lightbox from '../components/ui/Lightbox'
import { images } from '../data/images'
import { events } from '../data/events'

const cats = ['All', 'Corporate', 'Wedding', 'Festival', 'School', 'Launch']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [tab, setTab] = useState('images')
  const [lightbox, setLightbox] = useState(null)

  const imageList = useMemo(() => {
    if (filter === 'All') return images.gallery
    return events
      .filter((e) => e.category === filter || (filter === 'Launch' && e.category === 'Launch'))
      .flatMap((e) => e.gallery)
      .slice(0, 12)
  }, [filter])

  const videos = events.filter((e) => e.video)

  return (
    <>
      <SEO title="Gallery" description="Image and video gallery from THE DIVINE PRODUCTION experiences." />
      <PageHero
        eyebrow="Archive"
        title={<>A visual <span className="italic text-gold-light">journal</span></>}
        subtitle="Browse atmospheres, stages, and celebrations from across our productions."
        image={images.festival}
      />

      <section className="section-padding">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex gap-4">
              {['images', 'videos'].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  className={`font-btn text-xs tracking-[0.25em] uppercase pb-2 border-b ${
                    tab === t ? 'text-gold border-gold' : 'text-grey border-transparent'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-[10px] font-btn tracking-wider uppercase border ${
                    filter === c
                      ? 'border-gold text-gold'
                      : 'border-white/10 text-grey hover:border-gold/40'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {tab === 'images' ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {imageList.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="break-inside-avoid block w-full rounded-2xl overflow-hidden group"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {videos.map((e) => (
                <div key={e.id} className="relative rounded-[1.5rem] overflow-hidden aspect-video group">
                  <img src={e.image} alt={e.title} className="img-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-bg/40 group-hover:bg-bg/20 transition-colors" />
                  <div className="absolute bottom-0 p-6">
                    <p className="text-gold text-xs font-btn tracking-widest uppercase mb-1">{e.category}</p>
                    <h3 className="font-heading text-2xl text-white">{e.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Lightbox
        images={imageList}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onPrev={() => setLightbox((i) => (i - 1 + imageList.length) % imageList.length)}
        onNext={() => setLightbox((i) => (i + 1) % imageList.length)}
      />
    </>
  )
}
