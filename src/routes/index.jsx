import { lazy, Suspense, Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

const About = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'))
const Events = lazy(() => import('../pages/Events'))
const EventDetail = lazy(() => import('../pages/EventDetail'))
const Gallery = lazy(() => import('../pages/Gallery'))
const Clients = lazy(() => import('../pages/Clients'))
const Team = lazy(() => import('../pages/Team'))
const Blog = lazy(() => import('../pages/Blog'))
const BlogDetail = lazy(() => import('../pages/BlogDetail'))
const Careers = lazy(() => import('../pages/Careers'))
const Contact = lazy(() => import('../pages/Contact'))
const BookEvent = lazy(() => import('../pages/BookEvent'))
const NotFound = lazy(() => import('../pages/NotFound'))

function Fallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
    </div>
  )
}

class LazyErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Lazy route failed to load:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 text-center">
          <p className="text-grey mb-4">Couldn’t load this page.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="font-btn text-xs tracking-[0.2em] uppercase text-gold border border-gold/40 px-5 py-2.5"
          >
            Retry
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

function LazyPage({ children }) {
  return (
    <LazyErrorBoundary>
      <Suspense fallback={<Fallback />}>{children}</Suspense>
    </LazyErrorBoundary>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<LazyPage><About /></LazyPage>} />
        <Route path="services" element={<LazyPage><Services /></LazyPage>} />
        <Route path="services/:id" element={<LazyPage><ServiceDetail /></LazyPage>} />
        <Route path="events" element={<LazyPage><Events /></LazyPage>} />
        <Route path="events/:id" element={<LazyPage><EventDetail /></LazyPage>} />
        <Route path="gallery" element={<LazyPage><Gallery /></LazyPage>} />
        <Route path="clients" element={<LazyPage><Clients /></LazyPage>} />
        <Route path="team" element={<LazyPage><Team /></LazyPage>} />
        <Route path="blog" element={<LazyPage><Blog /></LazyPage>} />
        <Route path="blog/:id" element={<LazyPage><BlogDetail /></LazyPage>} />
        <Route path="careers" element={<LazyPage><Careers /></LazyPage>} />
        <Route path="contact" element={<LazyPage><Contact /></LazyPage>} />
        <Route path="book-event" element={<LazyPage><BookEvent /></LazyPage>} />
        <Route path="*" element={<LazyPage><NotFound /></LazyPage>} />
      </Route>
    </Routes>
  )
}
