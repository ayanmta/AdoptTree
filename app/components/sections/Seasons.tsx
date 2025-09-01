'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SEASONS_SECTION } from '@/app/lib/constants/content'

export default function Seasons() {
  return (
    <section id="seasons" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-charcoal mb-6 font-sans">
            {SEASONS_SECTION.title}
          </h2>
          <p className="text-lg sm:text-xl text-charcoal font-light max-w-3xl mx-auto leading-relaxed font-sans">
            {SEASONS_SECTION.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {SEASONS_SECTION.images.map((season, index) => (
            <motion.div
              key={season.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="enhanced-card overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={season.src}
                    alt={season.title}
                    width={300}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500 season-image"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-light text-charcoal mb-2 font-sans">
                    {season.title}
                  </h3>
                  <p className="text-charcoal font-light text-sm mb-4 leading-relaxed font-sans">
                    {season.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs sm:text-sm text-charcoal font-light">
                    <span>{season.season}</span>
                    <span>{season.altitude}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
