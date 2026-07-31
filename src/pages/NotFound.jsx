import Button from '../components/ui/Button'
import SEO from '../components/ui/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="font-btn text-[11px] tracking-[0.4em] uppercase text-gold mb-6">404</p>
          <h1 className="font-heading text-6xl md:text-8xl text-white mb-6">Lost in the lights</h1>
          <p className="text-grey mb-10 max-w-md mx-auto">
            This page doesn&apos;t exist — but your next extraordinary experience can.
          </p>
          <Button to="/">Return Home</Button>
        </div>
      </section>
    </>
  )
}
