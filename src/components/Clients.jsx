import { motion } from 'framer-motion'

const Clients = () => {
  const clients = [
    'Muslim Travelers', 'Indonesia Embassy', 'Halal Tour Japan', 
    'Family Vacation', 'Business Travelers', 'Student Groups'
  ]

  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Dipercaya Oleh
        </motion.h2>
        <div className="relative">
          <motion.div 
            className="flex gap-8"
            animate={{
              x: [0, -100 * clients.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-48 text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                <p className="font-semibold text-gray-700 whitespace-nowrap">{client}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Clients
