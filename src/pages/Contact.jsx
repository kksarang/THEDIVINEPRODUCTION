import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import { faqs } from '../data/faqs'
import { images } from '../data/images'
import { sendInquiry } from '../services/email'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    await sendInquiry({ ...data, type: 'contact' })
    setSent(true)
    reset()
  }

  return (
    <>
      <SEO title="Contact" description="Contact THE DIVINE PRODUCTION — offices in Mumbai, Bengaluru, and Delhi NCR." />
      <PageHero
        eyebrow="Contact"
        title={<>Let&apos;s begin the <span className="italic text-gold-light">conversation</span></>}
        subtitle="Share your vision. Our producers will respond with clarity and care."
        image={images.office}
      />

      <section className="section-padding">
        <div className="container-luxury grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: FiPhone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
              { icon: FiMail, label: 'Email', value: 'hello@thedivineproduction.com', href: 'mailto:hello@thedivineproduction.com' },
              { icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919876543210' },
              { icon: FiMapPin, label: 'Studios', value: 'Mumbai · Bengaluru · Delhi NCR', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass rounded-2xl p-6 flex gap-4 items-start">
                <span className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-btn text-[10px] tracking-[0.25em] uppercase text-gold mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-white text-lg hover:text-gold-light transition-colors">{value}</a>
                  ) : (
                    <p className="text-white text-lg">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <h2 className="font-heading text-3xl text-white mb-6">Send a message</h2>
              {sent ? (
                <div className="py-16 text-center">
                  <p className="font-heading text-4xl text-gold mb-3">Message sent</p>
                  <p className="text-grey">We&apos;ll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input {...register('name', { required: true })} placeholder="Name" className="field" />
                    <input {...register('email', { required: true })} type="email" placeholder="Email" className="field" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input {...register('phone')} placeholder="Phone" className="field" />
                    <input {...register('company')} placeholder="Company / Occasion" className="field" />
                  </div>
                  <textarea {...register('message', { required: true })} rows={6} placeholder="Tell us about your event..." className="field resize-none" />
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 pb-20">
        <div className="container-luxury rounded-[2rem] overflow-hidden border border-gold/15 aspect-[21/9] min-h-[280px]">
          <iframe
            title="Office map"
            src="https://maps.google.com/maps?q=Mumbai%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full grayscale contrast-125 opacity-80"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-luxury grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Before you write" />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs.slice(0, 4)} />
          </div>
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
      `}</style>
    </>
  )
}
