import { motion } from 'framer-motion'
import { IoCheckmarkCircle } from 'react-icons/io5'

const About = () => {
  const features = [
    '100% Halal Certified',
    'Tour Guide Berpengalaman',
    'Lokasi Strategis Shibuya',
    'Layanan 24/7'
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-white">
              <iframe 
                src="https://lottie.host/embed/b0dc5cf0-652b-4a0f-b460-4919d45e2e87/81e6HfogCH.lottie"
                className="w-full h-96"
                style={{ border: 'none' }}
                title="Yuma Halal Food Animation"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang Yuma Halal Food
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Berlokasi di Shibuya, Tokyo, Yuma Halal Food hadir sebagai solusi lengkap untuk kebutuhan 
              muslim travelers di Jepang. Kami menyediakan halal food, souvenir hijab, dan layanan family trip 
              yang akan membuat perjalanan Anda lebih nyaman dan berkesan.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Dengan pengalaman melayani ribuan traveler muslim, kami memahami kebutuhan Anda. Dari bento halal 
              segar hingga tour guide profesional, kami siap menemani perjalanan Anda di Tokyo.
            </p>
            <div className="flex flex-wrap gap-4">
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
