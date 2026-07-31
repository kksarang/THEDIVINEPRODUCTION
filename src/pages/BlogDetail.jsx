import { Link, useParams, Navigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import { getBlogById, blogs } from '../data/blogs'

export default function BlogDetail() {
  const { id } = useParams()
  const blog = getBlogById(id)
  if (!blog) return <Navigate to="/blog" replace />
  const others = blogs.filter((b) => b.id !== id).slice(0, 3)

  return (
    <>
      <SEO title={blog.title} description={blog.excerpt} image={blog.image} />
      <PageHero
        eyebrow={`${blog.category} · ${blog.readTime}`}
        title={blog.title}
        subtitle={`${blog.date} — THE DIVINE PRODUCTION Journal`}
        image={blog.image}
      >
        <Link to="/blog" className="inline-flex items-center gap-2 text-gold font-btn text-xs tracking-[0.2em] uppercase">
          <FiArrowLeft /> Back to Journal
        </Link>
      </PageHero>

      <section className="section-padding">
        <article className="container-luxury max-w-3xl">
          <p className="font-sub text-2xl text-white/90 leading-relaxed mb-10">{blog.excerpt}</p>
          <div className="space-y-6 text-grey text-lg leading-relaxed">
            {blog.content.split('. ').map((sentence, i) => (
              <p key={i}>{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</p>
            ))}
          </div>
        </article>

        <div className="container-luxury mt-24">
          <h3 className="font-heading text-3xl text-white mb-8">Continue reading</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((b) => (
              <Link key={b.id} to={`/blog/${b.id}`} className="group rounded-2xl overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={b.image} alt={b.title} className="img-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <h4 className="font-heading text-xl text-white mt-4 group-hover:text-gold transition-colors">{b.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
