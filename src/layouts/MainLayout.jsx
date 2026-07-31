import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CursorGlow from '../components/shared/CursorGlow'
import FloatingWhatsApp from '../components/shared/FloatingWhatsApp'
import BackToTop from '../components/shared/BackToTop'
import PageLoader from '../components/shared/PageLoader'
import PageTransition from '../components/shared/PageTransition'
import { useLenis } from '../hooks/useLenis'
import { useScrollTop } from '../hooks/useScrollTop'

export default function MainLayout() {
  useLenis()
  useScrollTop()
  const { pathname } = useLocation()

  return (
    <>
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>
          <main className="min-h-screen">
            <Outlet />
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  )
}
