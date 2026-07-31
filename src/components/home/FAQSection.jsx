import SectionHeading from '../ui/SectionHeading'
import Accordion from '../ui/Accordion'
import { faqs } from '../../data/faqs'

export default function FAQSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-luxury grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions,
                <br />
                <span className="italic text-gold-light">answered</span>
              </>
            }
            subtitle="Everything you need to know before we begin crafting your experience."
          />
        </div>
        <div className="lg:col-span-8">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  )
}
