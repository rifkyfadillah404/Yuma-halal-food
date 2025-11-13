import { motion } from 'framer-motion'
import { IoCheckmarkCircle } from 'react-icons/io5'

const About = () => {
  const features = [
    '100% Halal',
    'Tour Guide Berpengalaman',
    'Lokasi Strategis Shibuya',
    'Layanan 24/7'
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <img 
                src="/assets/orang.png" 
                alt="Yuma Team" 
                className="w-48 h-auto md:w-64 object-contain"
              />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Tentang Kami
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Berlokasi di Shibuya, Tokyo, Yuma Halal Food hadir sebagai solusi lengkap untuk kebutuhan 
              muslim travelers di Jepang. Kami menyediakan halal food, muslim aksesoris, dan layanan family trip 
              yang akan membuat perjalanan Anda lebih nyaman dan berkesan.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Dengan pengalaman melayani ribuan traveler muslim, kami memahami kebutuhan Anda. Dari bento halal 
              segar hingga tour guide profesional, kami siap menemani perjalanan Anda di Tokyo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <IoCheckmarkCircle className="text-2xl text-green-500" />
                  <span className="font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
