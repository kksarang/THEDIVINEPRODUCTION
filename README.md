# THEDIVINEPRODUCTION

# THE DIVINE PRODUCTION

Premium event management website — **Creating Experiences, Not Just Events**.

## Stack

- React + Vite
- Tailwind CSS v4
- React Router
- Framer Motion + GSAP
- Lenis smooth scroll
- Swiper, React CountUp, React Hook Form
- React Helmet Async
- EmailJS (dummy integration)

## Getting started

```bash
cd the-divine-production
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Structure

```
src/
  components/   # UI, layout, home, shared
  pages/        # Route pages
  layouts/      # Main shell
  hooks/        # Lenis, scroll, mouse
  data/         # Dummy content
  services/     # EmailJS helper
  routes/       # Lazy-loaded routes
  styles/       # Global theme via index.css
```

## EmailJS

Replace placeholders in `src/services/email.js` before going live:

- `YOUR_SERVICE_ID`
- `YOUR_TEMPLATE_ID`
- `YOUR_PUBLIC_KEY`

Until then, form submissions simulate success and log to the console.
