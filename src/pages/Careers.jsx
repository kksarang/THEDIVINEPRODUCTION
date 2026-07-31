import { useForm } from 'react-hook-form'
import { useState } from 'react'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'
import { careers, benefits, culture } from '../data/stats'
import { images } from '../data/images'
import { sendInquiry } from '../services/email'

export default function Careers() {
  const [selected, setSelected] = useState(careers[0].id)
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await sendInquiry({ ...data, position: selected, type: 'career' })
    setSent(true)
    reset()
  }

  return (
    <>
      <SEO title="Careers" description="Join THE DIVINE PRODUCTION — open roles in creative, production, and hospitality." />
      <PageHero
        eyebrow="Careers"
        title={<>Build nights that <span className="italic text-gold-light">matter</span></>}
        subtitle="Join a team where taste is trained, craft is respected, and calm is a competitive advantage."
        image={images.team}
      />

      <section className="section-padding">
        <div className="container-luxury grid md:grid-cols-3 gap-5 mb-20">
          {culture.map((c, i) => (
            <GlassCard key={c.title} delay={i * 0.1}>
              <h3 className="font-sub text-2xl text-white mb-3">{c.title}</h3>
              <p className="text-grey text-sm">{c.text}</p>
            </GlassCard>
          ))}
        </div>

        <div className="container-luxury">
          <SectionHeading eyebrow="Benefits" title="Why people stay" className="mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b) => (
              <div key={b} className="rounded-2xl border border-gold/15 px-6 py-5 text-grey hover:border-gold/40 hover:text-white transition-colors">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-luxury grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Open Roles" title="Current positions" />
            <div className="mt-10 space-y-3">
              {careers.map((job) => (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => setSelected(job.id)}
                  className={`w-full text-left rounded-2xl p-5 border transition-all ${
                    selected === job.id
                      ? 'border-gold bg-gold/10'
                      : 'border-white/10 hover:border-gold/30'
                  }`}
                >
                  <div className="flex justify-between gap-3 mb-2">
                    <h3 className="font-heading text-2xl text-white">{job.title}</h3>
                    <span className="text-gold text-xs font-btn tracking-wider uppercase shrink-0">{job.type}</span>
                  </div>
                  <p className="text-grey text-sm mb-2">{job.summary}</p>
                  <p className="text-xs text-grey/70">{job.location} · {job.department}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <h3 className="font-heading text-3xl text-white mb-2">Apply now</h3>
              <p className="text-grey text-sm mb-8">
                Applying for:{' '}
                <span className="text-gold">
                  {careers.find((c) => c.id === selected)?.title}
                </span>
              </p>
              {sent ? (
                <div className="text-center py-12">
                  <p className="font-heading text-3xl text-gold mb-3">Application received</p>
                  <p className="text-grey">We&apos;ll review and respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input {...register('name', { required: true })} placeholder="Full name" className="input-field" />
                    <input {...register('email', { required: true })} type="email" placeholder="Email" className="input-field" />
                  </div>
                  <input {...register('phone')} placeholder="Phone" className="input-field" />
                  <input {...register('portfolio')} placeholder="Portfolio / LinkedIn URL" className="input-field" />
                  <textarea {...register('message', { required: true })} rows={5} placeholder="Why Divine?" className="input-field resize-none" />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Submit Application'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .input-field {
          width: 100%;
          background: #161616;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 0.9rem 1.1rem;
          color: white;
          font-size: 0.9rem;
          outline: none;
        }
        .input-field:focus { border-color: rgba(200,162,93,0.5); }
        .input-field::placeholder { color: rgba(184,184,184,0.55); }
      `}</style>
    </>
  )
}
