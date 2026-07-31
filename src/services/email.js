import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

const isConfigured =
  SERVICE_ID !== 'YOUR_SERVICE_ID' &&
  TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
  PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'

export async function sendInquiry(data) {
  try {
    if (!isConfigured) {
      // Demo mode — simulate latency so the UI feels real during client review
      await new Promise((r) => setTimeout(r, 800))
      console.info('[EmailJS demo mode]', data)
      return { ok: true, dummy: true }
    }
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
    return { ok: true, dummy: false }
  } catch (err) {
    console.error(err)
    return { ok: false, error: err }
  }
}
