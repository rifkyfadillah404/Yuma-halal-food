import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ProductCarousel = ({ images, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const onSlideChangeRef = useRef(onSlideChange)

  useEffect(() => {
    onSlideChangeRef.current = onSlideChange
  }, [onSlideChange])

  useEffect(() => {
    if (onSlideChangeRef.current) {
      onSlideChangeRef.current(currentIndex)
    }
  }, [currentIndex])

  const handleNextSlide = () => {
    console.log('Next clicked, current:', currentIndex)
    setCurrentIndex((prev) => {
      const next = (prev + 1) % images.length
      console.log('Next index:', next)
      return next
    })
  }

  const handlePrevSlide = () => {
    console.log('Prev clicked, current:', currentIndex)
    setCurrentIndex((prev) => {
      const next = (prev - 1 + images.length) % images.length
      console.log('Prev index:', next)
      return next
    })
  }

  const handleGoToSlide = (index) => {
    console.log('Go to slide:', index)
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full">
      <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={`slide-${currentIndex}`}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full object-cover absolute inset-0"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all z-20 hover:scale-110"
            >
              <FaChevronLeft className="text-gray-800 text-lg" />
            </button>

            <button
              type="button"
              onClick={handleNextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all z-20 hover:scale-110"
            >
              <FaChevronRight className="text-gray-800 text-lg" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleGoToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75 w-2'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <button
              type="button"
              key={index}
              onClick={() => handleGoToSlide(index)}
              className={`relative h-20 rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-4 ring-primary scale-105'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductCarousel
