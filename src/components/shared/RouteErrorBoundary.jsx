import { Component } from 'react'

export default class RouteErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Route render error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg px-6 text-center">
          <p className="font-btn text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Something went wrong
          </p>
          <h1 className="font-heading text-3xl md:text-4xl text-white mb-6">
            This page failed to load
          </h1>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="font-btn text-xs tracking-[0.2em] uppercase px-6 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-bg transition-colors"
          >
            Reload
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
