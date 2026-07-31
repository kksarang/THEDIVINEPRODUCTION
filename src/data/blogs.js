import { images } from './images'

export const blogs = [
  {
    id: 'cinematic-corporate-events',
    title: 'How Cinematic Design Elevates Corporate Events',
    category: 'Corporate',
    date: '12 Jun 2025',
    readTime: '6 min',
    image: images.corporate,
    excerpt:
      'Why narrative arcs, lighting grammar, and intentional silence are becoming the new language of executive gatherings.',
    content:
      'Corporate events no longer succeed on logistics alone. Today’s audiences — even internal ones — expect the emotional clarity of cinema. At THE DIVINE PRODUCTION, we begin with a question: what should the room feel like at minute twelve? From there, lighting, pacing, and hospitality become instruments of story. The result is not louder events — it is more memorable ones.',
  },
  {
    id: 'destination-wedding-checklist',
    title: 'The Quiet Luxury Destination Wedding Checklist',
    category: 'Weddings',
    date: '28 May 2025',
    readTime: '8 min',
    image: images.wedding,
    excerpt:
      'A refined framework for couples who want beauty without noise — and hospitality without stress.',
    content:
      'Destination weddings fail when aesthetics outrun operations. Our checklist begins with guest energy maps, weather contingencies, and vendor redundancy — then layers design. Luxury is not excess. Luxury is the absence of friction.',
  },
  {
    id: 'stage-design-trends',
    title: 'Stage Design Trends That Photograph Like Film',
    category: 'Production',
    date: '04 May 2025',
    readTime: '5 min',
    image: images.stage,
    excerpt:
      'Negative space, kinetic LED, and practical light sources are redefining premium stages in 2025.',
    content:
      'The best stages today are designed for both eyes and cameras. We design sightlines for the last row and frames for the highlight film. Restraint is the new spectacle.',
  },
  {
    id: 'hybrid-events-playbook',
    title: 'A Playbook for Hybrid Events That Feel Present',
    category: 'Technology',
    date: '18 Apr 2025',
    readTime: '7 min',
    image: images.launch,
    excerpt:
      'Streaming is not an afterthought. It is a second venue that deserves its own creative direction.',
    content:
      'Hybrid fails when remote guests receive a security camera feed. We design dedicated camera grammar, graphics, and host energy for the stream — so distance never feels like exclusion.',
  },
  {
    id: 'festival-crowd-flow',
    title: 'Designing Crowd Flow for Cultural Festivals',
    category: 'Festivals',
    date: '02 Apr 2025',
    readTime: '6 min',
    image: images.festival,
    excerpt:
      'Safety, delight, and discovery can coexist when zones are designed like chapters.',
    content:
      'Crowd flow is creative work. Entrances set tone. Pathways create discovery. Quiet zones restore energy. Festivals succeed when people feel guided without feeling managed.',
  },
  {
    id: 'award-night-pacing',
    title: 'Why Award Night Pacing Matters More Than Decor',
    category: 'Corporate',
    date: '15 Mar 2025',
    readTime: '4 min',
    image: images.awards,
    excerpt:
      'Guests forgive imperfect florals. They never forgive a ceremony that loses its pulse.',
    content:
      'We script award nights like films: setup, rise, release. Films between categories. Hosts who land jokes and land dignity. Decor supports the night. Pacing defines it.',
  },
]

export const blogCategories = ['All', 'Corporate', 'Weddings', 'Production', 'Technology', 'Festivals']
export const getBlogById = (id) => blogs.find((b) => b.id === id)
