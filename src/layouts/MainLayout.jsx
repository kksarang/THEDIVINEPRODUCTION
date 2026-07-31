import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CursorGlow from '../components/shared/CursorGlow'
import FloatingWhatsApp from '../components/shared/FloatingWhatsApp'
import BackToTop from '../components/shared/BackToTop'
import PageLoader from '../components/shared/PageLoader'
import PageTransition from '../components/shared/PageTransition'
import RouteErrorBoundary from '../components/shared/RouteErrorBoundary'
import { useScrollTop } from '../hooks/useScrollTop'

export default function MainLayout() {
  useScrollTop()
  const { pathname } = useLocation()

  return (
    <>
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={pathname}>
          <main className="min-h-screen">
            <RouteErrorBoundary key={pathname}>
              <Outlet />
            </RouteErrorBoundary>
          </main>
        </PageTransition>
      </AnimatePresence>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  )
}
