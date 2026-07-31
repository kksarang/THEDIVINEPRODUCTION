import { images } from './images'

export const events = [
  {
    id: 'lumen-tech-summit',
    title: 'Lumen Tech Summit 2025',
    category: 'Corporate',
    location: 'Mumbai',
    year: '2025',
    guests: '2,400',
    image: images.corporate,
    gallery: [images.corporate, images.stage, images.lighting, images.launch],
    video: true,
    featured: true,
    summary:
      'A two-day leadership summit blending keynote theatre, immersive breakout worlds, and a night of cinematic celebration.',
    challenge:
      'Unify 2,400 delegates across hybrid sessions while maintaining a luxury hospitality standard and broadcast-ready stagecraft.',
    planning:
      'We built a modular stage language, designed lounge ecosystems for networking, and mapped every cue to a minute-by-minute showbible.',
    execution:
      'On-site, a 68-person crew delivered seamless transitions, simultaneous translation, and a keynote reveal with kinetic lighting.',
    result:
      '98% satisfaction score, 4.2M social impressions, and a client renewal for three consecutive years.',
    feedback:
      'Divine transformed our summit into a brand moment. Every detail felt intentional and quietly powerful.',
    client: 'Lumen Technologies',
  },
  {
    id: 'aurum-annual-night',
    title: 'Aurum Annual Night',
    category: 'Annual Day',
    location: 'Bengaluru',
    year: '2024',
    guests: '3,100',
    image: images.awards,
    gallery: [images.awards, images.lighting, images.stage, images.festival],
    video: true,
    featured: true,
    summary:
      'An employee celebration designed as a gold-era film premiere — awards, performances, and emotional storytelling.',
    challenge:
      'Create intimacy for 3,100 people without losing spectacle or emotional connection to company culture.',
    planning:
      'We crafted a narrative arc from founding stories to future visions, with surprise employee films woven into the show.',
    execution:
      'LED worlds, live orchestra cues, and a surprise founder hologram moment closed the night.',
    result:
      'Internal engagement scores rose 27% post-event; highlight film used in global onboarding.',
    feedback:
      'Our people still talk about that night. It felt like cinema, not a corporate function.',
    client: 'Aurum Group',
  },
  {
    id: 'velvet-vows',
    title: 'Velvet Vows — Destination Wedding',
    category: 'Wedding',
    location: 'Udaipur',
    year: '2025',
    guests: '450',
    image: images.wedding,
    gallery: [images.wedding, images.dinner, images.festival, images.lighting],
    video: true,
    featured: true,
    summary:
      'A four-day destination wedding across palace courtyards and lakeside dinners, styled with quiet luxury.',
    challenge:
      'Coordinate multi-venue hospitality for international guests while preserving intimate family rituals.',
    planning:
      'Guest journeys, wardrobe cues, floral architecture, and weather contingencies were designed weeks in advance.',
    execution:
      'Every ceremony flowed with live music, soft lighting, and invisible logistics.',
    result:
      'Featured in two luxury wedding editorials; zero guest logistics complaints.',
    feedback:
      'They protected our peace. We only felt joy — never the complexity behind it.',
    client: 'Private Client',
  },
  {
    id: 'nova-product-reveal',
    title: 'NOVA Product Reveal',
    category: 'Launch',
    location: 'Delhi NCR',
    year: '2024',
    guests: '800',
    image: images.launch,
    gallery: [images.launch, images.lighting, images.corporate, images.stage],
    video: true,
    featured: true,
    summary:
      'A tech product launch with theatrical reveal mechanics, influencer hosting, and global livestream.',
    challenge:
      'Protect secrecy until the exact reveal second while delivering a media-ready spectacle.',
    planning:
      'NDA workflows, dual-redundant streams, and a kinetic product plinth were engineered with the brand team.',
    execution:
      'A 12-second blackout-to-gold reveal sequence became the campaign’s hero asset.',
    result:
      '1.8M livestream views; product waitlist filled in 48 hours.',
    feedback:
      'The reveal felt inevitable and electric. Divine understands drama with discipline.',
    client: 'NOVA Labs',
  },
  {
    id: 'harmony-school-fest',
    title: 'Harmony School Grand Fest',
    category: 'School',
    location: 'Hyderabad',
    year: '2024',
    guests: '5,000',
    image: images.school,
    gallery: [images.school, images.festival, images.stage, images.lighting],
    video: false,
    featured: true,
    summary:
      'A campus festival with student performances, parent hospitality, and professional production standards.',
    challenge:
      'Balance safety and schedule for thousands of students while elevating production quality.',
    planning:
      'Zone planning, rehearsal calendars, and parent lounges were mapped with school leadership.',
    execution:
      'Three stages ran in sync with student-led openings and celebrity closing acts.',
    result:
      'Record parent attendance; school renewed for three-year partnership.',
    feedback:
      'Parents said it felt like a professional concert. Our students felt like stars.',
    client: 'Harmony International School',
  },
  {
    id: 'saffron-nights',
    title: 'Saffron Cultural Festival',
    category: 'Festival',
    location: 'Jaipur',
    year: '2023',
    guests: '12,000',
    image: images.festival,
    gallery: [images.festival, images.lighting, images.stage, images.dinner],
    video: true,
    featured: true,
    summary:
      'A three-day cultural festival celebrating craft, music, and cuisine with multi-zone immersion.',
    challenge:
      'Manage dense crowds across heritage grounds with safety, sound, and cultural authenticity.',
    planning:
      'Crowd simulations, artisan markets, and artist stage plots were designed with local partners.',
    execution:
      'Twelve performance slots daily with culinary stages and night bazaars.',
    result:
      'Sold-out weekends; tourism board collaboration renewed.',
    feedback:
      'Scale without chaos. Culture without compromise. That is rare.',
    client: 'Rajasthan Culture Board',
  },
  {
    id: 'apex-leadership-retreat',
    title: 'Apex Leadership Retreat',
    category: 'Conference',
    location: 'Goa',
    year: '2025',
    guests: '180',
    image: images.office,
    gallery: [images.office, images.dinner, images.corporate, images.wedding],
    video: false,
    featured: false,
    summary:
      'An intimate executive retreat with facilitated sessions, oceanside dinners, and quiet luxury.',
    challenge:
      'Create focus and restoration for C-suite leaders without resort-generic aesthetics.',
    planning:
      'Custom agendas, wellness interludes, and private dining concepts were co-created with HR.',
    execution:
      'Closed-door sessions with discreet AV and sunset closing dinners.',
    result:
      'NPS 92; invited to design the global offsite series.',
    feedback:
      'It felt privately tailored. Exactly what senior leadership needed.',
    client: 'Apex Holdings',
  },
  {
    id: 'eclipse-award-gala',
    title: 'Eclipse Award Gala',
    category: 'Corporate',
    location: 'Chennai',
    year: '2023',
    guests: '900',
    image: images.awards,
    gallery: [images.awards, images.dinner, images.lighting, images.stage],
    video: true,
    featured: false,
    summary:
      'A black-and-gold award night with red-carpet arrivals and orchestral underscoring.',
    challenge:
      'Deliver prestige pacing for 42 award categories without fatigue.',
    planning:
      'Cue compression, film packages, and host scripting kept energy high.',
    execution:
      'A 95-minute ceremony that felt like 60 — with a surprise alumni performance.',
    result:
      'Broadcast cut used nationally; sponsorship renewals at 100%.',
    feedback:
      'Elegant, sharp, and emotionally timed. Our awards finally felt earned.',
    client: 'Eclipse Media',
  },
]

export const categories = [
  'All',
  'Corporate',
  'Wedding',
  'Festival',
  'School',
  'Launch',
  'Annual Day',
  'Conference',
]

export const getEventById = (id) => events.find((e) => e.id === id)
export const featuredEvents = events.filter((e) => e.featured)
export const relatedEvents = (id, cat) =>
  events.filter((e) => e.id !== id && e.category === cat).slice(0, 3)
