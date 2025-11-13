import { motion } from 'framer-motion'

const Hero = ({ scrollToSection }) => {
  return (
    <section 
      id="home" 
      className="relative pt-28 md:pt-24 pb-16 text-white overflow-hidden min-h-[600px] flex items-center"
      style={{
        backgroundImage: 'url(/assets/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Halal Food & Family Trip<br />di Tokyo
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl mb-10 text-white/95 leading-relaxed"
            >
              Melayani Bento Halal, Muslim Aksesoris, dan Family Trip di Tokyo.<br />
              Trusted partner untuk muslim travelers di Jepang!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-white text-primary px-10 py-4 rounded-full hover:bg-gray-100 transition-all font-bold text-lg shadow-xl hover:scale-105"
              >
                Lihat Layanan
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-all font-bold text-lg hover:scale-105"
              >
                Hubungi Kami
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
