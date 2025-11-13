import { motion } from 'framer-motion'
import { IoHome, IoRestaurant, IoLogoWhatsapp } from 'react-icons/io5'

const BottomNav = ({ activeSection, scrollToSection }) => {
  return (
    <motion.nav 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 w-full max-w-full"
    >
      <div className="grid grid-cols-3 gap-1">
        <button 
          onClick={() => scrollToSection('home')}
          className={`flex flex-col items-center py-4 px-2 transition ${
            activeSection === 'home' ? 'text-primary' : 'text-gray-600'
          }`}
        >
          <IoHome className="text-2xl mb-1" />
          <span className="text-xs font-semibold">Home</span>
        </button>
        <a
          href="https://wa.me/818039231907"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center py-4 px-2 transition text-[#25D366] hover:text-[#20BA5A]"
        >
          <IoLogoWhatsapp className="text-2xl mb-1" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <button 
          onClick={() => scrollToSection('menu')}
          className={`flex flex-col items-center py-4 px-2 transition ${
            activeSection === 'menu' ? 'text-primary' : 'text-gray-600'
          }`}
        >
          <IoRestaurant className="text-2xl mb-1" />
          <span className="text-xs font-semibold">Service</span>
        </button>
      </div>
    </motion.nav>
  )
}

export default BottomNav
