import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hello%20THE%20DIVINE%20PRODUCTION"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}
