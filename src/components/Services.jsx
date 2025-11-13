import { motion } from 'framer-motion'

const Services = () => {
  const menuItems = [
    {
      name: 'Bento Halal',
      price: '¥1,200',
      description: 'Bento box halal dengan lauk pilihan',
      image: '/assets/makanan.jpg'
    },
    {
      name: 'Kue Kering',
      price: '¥800',
      description: 'Nastar, kastengel, dan kue kering lainnya',
      image: '/assets/nastar.jpg'
    },
    {
      name: 'Snack Box',
      price: '¥500',
      description: 'Paket snack halal untuk acara',
      image: '/assets/donut.jpg'
    },
    {
      name: 'Souvenir Hijab',
      price: 'Sesuai Stock',
      description: 'Koleksi hijab cantik dari Tokyo',
      image: '/assets/sovenir.jpg'
    },
    {
      name: 'Tour Guide Service',
      price: '¥15,000/hari',
      description: 'Tour guide berpengalaman untuk keluarga',
      image: '/assets/tour.png'
    },
    {
      name: 'Rental Mobil + Itinerary',
      price: 'Hubungi Kami',
      description: 'Paket lengkap rental mobil dan planning trip',
      image: '/assets/rental.png'
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Halal Food, Souvenir Hijab, dan Family Trip Service di Tokyo
          </p>
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
