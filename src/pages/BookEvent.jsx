import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import { images } from '../data/images'
import { sendInquiry } from '../services/email'

const steps = ['Personal', 'Event', 'Details', 'Review']

export default function BookEvent() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, watch, trigger, formState: { isSubmitting } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventType: 'Corporate Events',
      date: '',
      guests: '',
      budget: '',
      venue: '',
      requirements: '',
    },
  })
  const values = watch()

  const next = async () => {
    const fields = [
      ['name', 'email', 'phone'],
      ['eventType', 'date', 'guests'],
      ['budget', 'venue', 'requirements'],
      [],
    ][step]
    const ok = fields.length ? await trigger(fields) : true
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1))
  }

  const onSubmit = async (data) => {
    setError('')
    const result = await sendInquiry({ ...data, type: 'book-event' })
    if (!result.ok) {
      setError('Unable to submit right now. Please email hello@thedivineproduction.com or try again.')
      return
    }
    setDone(true)
  }

  return (
    <>
      <SEO title="Book Event" description="Book a consultation with THE DIVINE PRODUCTION — multi-step luxury inquiry." />
      <PageHero
        eyebrow="Inquiry"
        title={<>Book your <span className="italic text-gold-light">experience</span></>}
        subtitle="A few details help us prepare a thoughtful first conversation."
        image={images.awards}
      />

      <section className="section-padding">
        <div className="container-luxury max-w-3xl">
          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center glass rounded-[2.5rem] p-12 md:p-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.15 }}
                className="w-20 h-20 mx-auto rounded-full border border-gold flex items-center justify-center text-gold mb-8"
              >
                <FiCheck size={32} />
              </motion.div>
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                Request received
              </h2>
              <p className="text-grey max-w-md mx-auto mb-8">
                Thank you, {values.name || 'friend'}. Our team will review your brief and reach out within 24 hours.
              </p>
              <Button to="/">Return Home</Button>
            </motion.div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-12 gap-2">
                {steps.map((s, i) => (
                  <div key={s} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-btn text-xs border transition-all ${
                        i <= step
                          ? 'bg-gold text-primary border-gold'
                          : 'border-white/15 text-grey'
                      }`}
                    >
                      {i < step ? <FiCheck /> : i + 1}
                    </div>
                    <span className={`font-btn text-[9px] tracking-[0.2em] uppercase hidden sm:block ${i <= step ? 'text-gold' : 'text-grey'}`}>
                      {s}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-[2rem] p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-4"
                  >
                    {step === 0 && (
                      <>
                        <h2 className="font-heading text-3xl text-white mb-6">Personal details</h2>
                        <input {...register('name', { required: true })} placeholder="Full name *" className="field" />
                        <input {...register('email', { required: true })} type="email" placeholder="Email *" className="field" />
                        <input {...register('phone', { required: true })} placeholder="Phone *" className="field" />
                      </>
                    )}
                    {step === 1 && (
                      <>
                        <h2 className="font-heading text-3xl text-white mb-6">Event details</h2>
                        <select {...register('eventType', { required: true })} className="field">
                          {['Corporate Events', 'Wedding', 'Annual Day', 'Product Launch', 'Festival', 'School Event', 'Other'].map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                        <input {...register('date', { required: true })} type="date" className="field" />
                        <input {...register('guests', { required: true })} placeholder="Expected guests *" className="field" />
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <h2 className="font-heading text-3xl text-white mb-6">Budget & venue</h2>
                        <select {...register('budget', { required: true })} className="field">
                          <option value="">Select budget range *</option>
                          <option value="5-15L">₹5L – ₹15L</option>
                          <option value="15-40L">₹15L – ₹40L</option>
                          <option value="40L-1Cr">₹40L – ₹1Cr</option>
                          <option value="1Cr+">₹1Cr+</option>
                        </select>
                        <input {...register('venue', { required: true })} placeholder="Preferred venue / city *" className="field" />
                        <textarea {...register('requirements')} rows={5} placeholder="Requirements, themes, artists..." className="field resize-none" />
                      </>
                    )}
                    {step === 3 && (
                      <>
                        <h2 className="font-heading text-3xl text-white mb-6">Review & submit</h2>
                        <div className="space-y-3 text-sm">
                          {Object.entries(values).map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                              <span className="text-grey capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="text-white text-right">{v || '—'}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex flex-wrap gap-3 justify-between">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    className={step === 0 ? 'invisible' : ''}
                  >
                    <FiArrowLeft /> Back
                  </Button>
                  {step < steps.length - 1 ? (
                    <Button type="button" onClick={next}>
                      Continue <FiArrowRight />
                    </Button>
                  ) : (
                    <div className="flex flex-col items-end gap-3">
                      {error && <p className="text-sm text-red-300">{error}</p>}
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                      </Button>
                    </div>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      <style>{`
        .field {
          width: 100%;
          background: #161616;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 0.95rem 1.15rem;
          color: white;
          font-size: 0.9rem;
          outline: none;
        }
        .field:focus { border-color: rgba(200,162,93,0.5); }
        .field::placeholder { color: rgba(184,184,184,0.55); }
        .field option { background: #161616; }
      `}</style>
    </>
  )
}
