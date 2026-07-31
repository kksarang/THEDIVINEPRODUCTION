import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiArrowUpRight } from 'react-icons/fi'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import { blogs, blogCategories } from '../data/blogs'
import { images } from '../data/images'

export default function Blog() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchCat = cat === 'All' || b.category === cat
      const matchQ =
        !q ||
        b.title.toLowerCase().includes(q.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(q.toLowerCase())
      return matchCat && matchQ
    })
  }, [cat, q])

  const recent = blogs.slice(0, 3)

  return (
    <>
      <SEO title="Blog" description="Insights on luxury event production, stagecraft, and experience design." />
      <PageHero
        eyebrow="Journal"
        title={<>Ideas from the <span className="italic text-gold-light">studio</span></>}
        subtitle="Essays and notes on cinematic events, hospitality, and production craft."
        image={images.office}
      />

      <section className="section-padding">
        <div className="container-luxury grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-grey" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-secondary border border-white/10 rounded-full pl-11 pr-5 py-3.5 text-sm text-white placeholder:text-grey/50 focus:outline-none focus:border-gold/40"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-10">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 rounded-full text-[10px] font-btn tracking-wider uppercase border ${
                    cat === c ? 'bg-gold text-primary border-gold' : 'border-gold/25 text-grey'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {filtered.map((b, i) => (
                <Reveal key={b.id}>
                  <Link
                    to={`/blog/${b.id}`}
                    className={`group grid md:grid-cols-12 gap-6 items-center ${i % 2 ? '' : ''}`}
                  >
                    <div className="md:col-span-5 rounded-[1.5rem] overflow-hidden aspect-[16/11]">
                      <img src={b.image} alt={b.title} className="img-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div className="md:col-span-7">
                      <p className="font-btn text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
                        {b.category} · {b.date} · {b.readTime}
                      </p>
                      <h2 className="font-heading text-3xl md:text-4xl text-white group-hover:text-gold-light transition-colors mb-4">
                        {b.title}
                      </h2>
                      <p className="text-grey mb-4">{b.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-gold text-xs font-btn tracking-[0.2em] uppercase">
                        Read Article <FiArrowUpRight />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
              {filtered.length === 0 && (
                <p className="text-grey">No articles match your search.</p>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="glass rounded-[2rem] p-8 sticky top-28">
              <SectionHeading eyebrow="Sidebar" title="Recent posts" />
              <div className="mt-8 space-y-6">
                {recent.map((b) => (
                  <Link key={b.id} to={`/blog/${b.id}`} className="flex gap-4 group">
                    <img src={b.image} alt="" className="w-20 h-20 rounded-xl object-cover" loading="lazy" />
                    <div>
                      <p className="font-heading text-lg text-white group-hover:text-gold transition-colors leading-snug">
                        {b.title}
                      </p>
                      <p className="text-grey text-xs mt-1">{b.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
