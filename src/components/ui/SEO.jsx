import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description = 'THE DIVINE PRODUCTION — Creating Experiences, Not Just Events. Premium event management for corporate, weddings, festivals & large-scale productions.',
  image,
}) {
  const full = title
    ? `${title} | THE DIVINE PRODUCTION`
    : 'THE DIVINE PRODUCTION | Creating Experiences, Not Just Events'

  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
