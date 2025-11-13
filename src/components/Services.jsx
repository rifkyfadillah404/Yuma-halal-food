import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Services = () => {
  const menuItems = [
    {
      name: 'Bento & Snack Halal',
      description: 'Bento, kue kering, dan snack box halal premium',
      image: '/assets/food/makanan.jpg',
      link: '/bento-snack'
    },
    {
      name: 'Muslim Aksesoris',
      description: 'Paket lengkap aksesoris muslim premium',
      image: '/assets/aksesoris/paket1.jpg',
      link: '/muslim-aksesoris'
    },
    {
      name: 'Family Trip Service',
      description: 'Tour guide, rental mobil, dan itinerary planning lengkap',
      image: '/assets/trip/trip1.jpg',
      link: '/family-trip'
    }
  ]

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
            >
              <div className="h-48 overflow-hidden">
                <motion.img 
                  src={item.image} 
                  alt={item.name} 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-center">
                  {item.link ? (
                    <Link to={item.link}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-8 py-2 rounded-full hover:bg-primary-dark transition font-semibold"
                      >
                        Lihat Detail
                      </motion.button>
                    </Link>
                  ) : (
                    <motion.a 
                      href={`https://wa.me/818039231907?text=Halo, saya tertarik dengan ${item.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-white px-8 py-2 rounded-full hover:bg-primary-dark transition font-semibold"
                    >
                      Pesan
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
