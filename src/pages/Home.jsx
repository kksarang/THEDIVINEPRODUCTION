import SEO from '../components/ui/SEO'
import Hero from '../components/home/Hero'
import TrustedCompanies from '../components/home/TrustedCompanies'
import AboutPreview from '../components/home/AboutPreview'
import ServicesGrid from '../components/home/ServicesGrid'
import WhyChoose from '../components/home/WhyChoose'
import FeaturedEvents from '../components/home/FeaturedEvents'
import VideoShowcase from '../components/home/VideoShowcase'
import Testimonials from '../components/home/Testimonials'
import InstagramFeed from '../components/home/InstagramFeed'
import FAQSection from '../components/home/FAQSection'
import ContactCTA from '../components/home/ContactCTA'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="THE DIVINE PRODUCTION — Creating Experiences, Not Just Events. Premium event management for corporate, weddings, festivals & large-scale productions."
      />
      <Hero />
      <TrustedCompanies />
      <AboutPreview />
      <ServicesGrid />
      <WhyChoose />
      <FeaturedEvents />
      <VideoShowcase />
      <Testimonials />
      <InstagramFeed />
      <FAQSection />
      <ContactCTA />
    </>
  )
}
