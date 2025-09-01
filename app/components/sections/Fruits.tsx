'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FRUITS_SECTION } from '@/app/lib/constants/content'
import { formatPrice } from '@/app/lib/utils'

export default function Fruits() {
  return (
    <section id="fruits" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 font-sans">
            {FRUITS_SECTION.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal font-light max-w-3xl mx-auto leading-relaxed font-sans">
            {FRUITS_SECTION.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 mb-8 sm:mb-12">
          {FRUITS_SECTION.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="enhanced-card overflow-hidden elegant-card">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500 product-image"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-sage text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-light">
                    {formatPrice(product.price)}
                  </div>
                </div>
                
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl font-light text-charcoal mb-2 font-sans">
                    {product.name}
                  </h3>
                  <p className="text-charcoal font-light text-sm mb-4 leading-relaxed font-sans">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-sage/10 text-sage px-2 py-1 rounded-full font-light"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-xs sm:text-sm text-charcoal font-light">
                    <span>{product.stats.altitude}</span>
                    <span>{product.stats.harvest}</span>
                    <span>{product.stats.shelfLife}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center px-4"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-charcoal/70 font-light mb-6 font-sans">
              Discover our complete collection of Himalayan organic fruits and seasonal specialties
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-sage text-white font-medium text-base sm:text-lg tracking-wide hover:bg-sage-dark transition-colors duration-300 rounded-lg"
            >
              View All Products →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
