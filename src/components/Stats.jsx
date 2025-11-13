import { motion } from 'framer-motion'
import { IoCalendar, IoPeople, IoGrid, IoCheckmarkCircle } from 'react-icons/io5'

const Stats = () => {
  const stats = [
    { 
      number: '2+', 
      label: 'Tahun di Tokyo',
      icon: IoCalendar,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      number: '100+', 
      label: 'Happy Travelers',
      icon: IoPeople,
      color: 'from-green-500 to-green-600'
    },
    { 
      number: '3', 
      label: 'Layanan Utama',
      icon: IoGrid,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      number: '100%', 
      label: 'Halal Certified',
      icon: IoCheckmarkCircle,
      color: 'from-primary to-primary-dark'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform`}>
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
