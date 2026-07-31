import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const Home = lazy(() => import('../pages/Home'))
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
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="w-10 h-10 rounded-full border-2 border-gold/30 border-t-gold animate-spin" />
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="clients" element={<Clients />} />
          <Route path="team" element={<Team />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-event" element={<BookEvent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
