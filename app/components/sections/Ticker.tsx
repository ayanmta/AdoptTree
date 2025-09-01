'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { HIMALAYAN_BEAUTY_TICKER } from '@/app/lib/constants/content'

interface TickerProps {
  title?: string
  images?: Array<{
    src: string
    title: string
    desc: string
  }>
}

export default function Ticker({
  title = HIMALAYAN_BEAUTY_TICKER.title,
  images = HIMALAYAN_BEAUTY_TICKER.images
}: TickerProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const ref = useRef(null)
  const tickerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  // Duplicate images for infinite scroll - ensure smooth loop with 8 images
  const duplicatedImages = [...images, ...images, ...images]

  const handleImageClick = (image: any) => {
    setSelectedImage(image)
  }

  const closeOverlay = () => {
    setSelectedImage(null)
  }

  const navigateToImage = (direction: 'prev' | 'next') => {
    if (selectedImage) {
      const currentIndex = images.findIndex(img => img.src === selectedImage.src)
      let newIndex
      
      if (direction === 'prev') {
        newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1
      } else {
        newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0
      }
      
      setSelectedImage(images[newIndex])
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (selectedImage) {
          navigateToImage('prev')
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (selectedImage) {
          navigateToImage('next')
        }
      } else if (e.key === 'Escape') {
        if (selectedImage) {
          closeOverlay()
        }
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Parallax Background - Desktop Only */}
      <motion.div 
        className="absolute inset-0 z-0 hidden md:block"
        style={{ y }}
      >
        <div className="w-full h-full bg-gradient-to-br from-sage/5 via-white to-sage/5"></div>
      </motion.div>
      
      {/* Static Background - Mobile Only */}
      <div className="absolute inset-0 z-0 md:hidden">
        <div className="w-full h-full bg-gradient-to-br from-sage/5 via-white to-sage/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-4"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-charcoal mb-2 sm:mb-3 md:mb-4 font-sans">
            {title}
          </h2>
          <div className="w-8 sm:w-12 md:w-16 lg:w-24 h-px bg-sage/30 mx-auto"></div>
        </motion.div>

        {/* Ticker Container */}
        <div 
          ref={tickerRef}
          className="relative overflow-hidden px-1 sm:px-2 md:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`ticker-container ${isPaused ? 'paused' : ''}`}>
            <div className="ticker-track">
              {duplicatedImages.map((image, index) => (
                <motion.div
                  key={`${image.title}-${index}`}
                  className="ticker-item w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 group cursor-pointer elegant-card"
                  onClick={() => handleImageClick(image)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-24 sm:h-36 md:h-48 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110 ticker-image"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-light mb-1 sm:mb-2 font-sans">{image.title}</h3>
                    <p className="text-xs text-white/80 font-light font-sans">{image.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Image Overlay with Keyboard Navigation */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={closeOverlay}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-2xl font-light text-white mb-2">{selectedImage.title}</h3>
                <p className="text-white/80 font-light">{selectedImage.desc}</p>
                <p className="text-white/60 text-sm mt-2">Use ← → arrow keys to navigate, ESC to close</p>
              </div>
              <button
                onClick={closeOverlay}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
