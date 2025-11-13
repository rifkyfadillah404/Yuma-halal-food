import { motion } from 'framer-motion'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-28 md:pt-24 pb-16 bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            >
              Halal Food & Family Trip<br />di Tokyo
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-white/90"
            >
              Melayani Bento Halal, Souvenir Hijab, dan Family Trip di Tokyo.<br />
              Trusted partner untuk muslim travelers di Jepang!
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold text-lg"
              >
                Lihat Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition font-semibold text-lg"
              >
                Hubungi Kami
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <img src="/assets/logo.jpg" alt="Yuma Halal Food Tokyo" className="w-full max-w-md mx-auto rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
