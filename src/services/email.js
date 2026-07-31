import emailjs from '@emailjs/browser'

const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export async function sendInquiry(data) {
  // Dummy EmailJS integration — replace IDs before production
  try {
    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      await new Promise((r) => setTimeout(r, 900))
      console.info('[EmailJS Dummy]', data)
      return { ok: true, dummy: true }
    }
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
    return { ok: true }
  } catch (err) {
    console.error(err)
    return { ok: false, error: err }
  }
}
