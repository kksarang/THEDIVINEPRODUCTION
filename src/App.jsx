import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AppRoutes from './routes'
import RouteErrorBoundary from './components/shared/RouteErrorBoundary'
import { LenisProvider } from './context/LenisContext'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/THEDIVINEPRODUCTION">
        <RouteErrorBoundary>
          <LenisProvider>
            <AppRoutes />
          </LenisProvider>
        </RouteErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  )
}
