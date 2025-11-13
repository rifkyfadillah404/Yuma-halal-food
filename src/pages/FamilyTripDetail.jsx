import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaWhatsapp, FaCheckCircle, FaHome, FaUtensils, FaInfoCircle, FaEnvelope, FaCar, FaMapMarkedAlt, FaUserTie, FaClock } from 'react-icons/fa'
import ProductCarousel from '../components/ProductCarousel'
import { useState } from 'react'

const FamilyTripDetail = () => {
  const navigate = useNavigate()
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)

  const handleNavigation = (section) => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const serviceImages = [
    { src: '/assets/trip/trip1.jpg', alt: 'Tokyo Tour Guide' },
    { src: '/assets/trip/trip2.jpg', alt: 'Family Trip Package' },
    { src: '/assets/trip/trip3.jpg', alt: 'Car Rental Service' },
    { src: '/assets/trip/trip4.jpg', alt: 'Custom Itinerary' }
  ]

  const services = [
    {
      name: 'Tour Guide Berpengalaman',
      description: 'Tour guide profesional yang berpengalaman untuk menemani perjalanan keluarga Anda di Tokyo',
      image: '/assets/trip/trip1.jpg',
      features: ['Bahasa Indonesia', 'Pengetahuan Lokal', 'Ramah Keluarga', 'Flexible Schedule']
    },
    {
      name: 'Paket Family Trip Lengkap',
      description: 'Paket wisata keluarga lengkap dengan itinerary yang sudah direncanakan untuk pengalaman terbaik',
      image: '/assets/trip/trip2.jpg',
      features: ['All-in Package', 'Destinasi Populer', 'Halal Friendly', 'Photo Documentation']
    },
    {
      name: 'Rental Mobil + Driver',
      description: 'Layanan rental mobil nyaman dengan driver berpengalaman untuk perjalanan keluarga yang aman',
      image: '/assets/trip/trip3.jpg',
      features: ['Mobil Bersih & Nyaman', 'Driver Profesional', 'Asuransi Lengkap', 'Free WiFi']
    },
    {
      name: 'Custom Itinerary Planning',
      description: 'Perencanaan itinerary khusus sesuai keinginan dan kebutuhan keluarga Anda',
      image: '/assets/trip/trip4.jpg',
      features: ['Personalized Plan', 'Budget Friendly', 'Konsultasi Gratis', 'Detail Lengkap']
    }
  ]

  const currentService = services[currentServiceIndex]

  const handleOrder = () => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan layanan family trip yuma`)
    window.open(`https://wa.me/818039231907?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-4 md:py-6 sticky top-0 z-50 shadow-xl backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full hover:bg-white/30 transition-all shadow-lg"
                >
                  <FaArrowLeft className="text-sm md:text-base" />
                  <span className="font-medium text-sm md:text-base hidden sm:inline">Kembali</span>
                </motion.button>
              </Link>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-2xl font-bold">Family Trip Service</h1>
                <p className="text-xs md:text-sm text-white/80">Complete Travel Solutions</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => handleNavigation('home')}
                className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
              >
                <FaHome />
                <span>Home</span>
              </button>
              <button 
                onClick={() => handleNavigation('menu')}
                className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
              >
                <FaUtensils />
                <span>Menu</span>
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
              >
                <FaInfoCircle />
                <span>Tentang</span>
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="flex items-center gap-2 text-white/90 hover:text-white font-medium transition-colors"
              >
                <FaEnvelope />
                <span>Kontak</span>
              </button>
            </nav>

            <div className="md:hidden">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all"
                >
                  <FaHome />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold">
              Professional Travel Service
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Family Trip Service
            <span className="block text-primary">di Tokyo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Layanan lengkap tour guide, rental mobil, dan perencanaan itinerary untuk liburan keluarga yang sempurna
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Image Carousel */}
              <div className="bg-gray-50 p-6 md:p-8 flex items-center justify-center">
                <div className="w-full">
                  <ProductCarousel 
                    images={serviceImages} 
                    onSlideChange={setCurrentServiceIndex}
                  />
                </div>
              </div>

              {/* Right Side - Service Details */}
              <motion.div 
                key={currentServiceIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="p-8 md:p-12 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Keunggulan Layanan:</h4>
                    <div className="space-y-3">
                      {currentService.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                            <FaCheckCircle className="text-white text-lg" />
                          </div>
                          <span className="text-gray-800 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleOrder}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:from-green-600 hover:to-green-700 transition-all shadow-xl shadow-green-500/30 text-lg"
                  >
                    <FaWhatsapp size={24} />
                    Konsultasi via WhatsApp
                  </motion.button>
                  <p className="text-center text-sm text-gray-500">
                    Free consultation & Best service guaranteed
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FamilyTripDetail
