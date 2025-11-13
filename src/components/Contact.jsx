import { motion } from 'framer-motion'
import { IoLocationSharp, IoTime, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Melayani Acara Anda
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Hubungi kami untuk informasi halal food, muslim aksesoris, atau booking family trip
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <motion.a 
              href="https://wa.me/818039231907" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#25D366] text-white px-12 py-4 rounded-full hover:bg-[#20BA5A] transition font-semibold text-lg flex items-center justify-center gap-2"
            >
              <IoLogoWhatsapp className="text-2xl" /> WhatsApp
            </motion.a>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <IoLocationSharp className="text-2xl" /> Alamat
              </h3>
              <p className="text-gray-300">Shibuya, Tokyo<br />Japan</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <IoTime className="text-2xl" /> Jam Operasional
              </h3>
              <p className="text-gray-300">Setiap Hari<br />09:00 - 21:00 JST</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <IoLogoInstagram className="text-2xl" /> Instagram
              </h3>
              <a 
                href="https://www.instagram.com/vajapan.food" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                @vajapan.food
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
