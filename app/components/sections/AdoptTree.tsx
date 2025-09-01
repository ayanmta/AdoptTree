'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ADOPT_TREE_SECTION } from '@/app/lib/constants/content'
import Ticker from './Ticker'

export default function AdoptTree() {
  return (
    <section id="adopt" className="py-16 sm:py-20 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 font-sans">
            {ADOPT_TREE_SECTION.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal font-light max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 font-sans">
            Own a piece of Himalayan paradise. Your tree, your harvest, your legacy.
          </p>
          
          {/* Main Marketing Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden elegant-card">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Large Image */}
                <div className="relative h-48 sm:h-64 md:h-full min-h-[200px] sm:min-h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Himalayan Apple Orchard"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-charcoal mb-3 sm:mb-4 font-sans">
                    Your Himalayan Legacy
                  </h3>
                  <p className="text-charcoal font-light mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-sans">
                    Join an exclusive community of tree owners. Experience the joy of watching your tree grow, bloom, and bear fruit in the pristine Himalayan mountains.
                  </p>
                  
                  {/* Key Benefits */}
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sage rounded-full"></div>
                      <span className="text-sm text-charcoal font-light">Your name permanently on the tree</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sage rounded-full"></div>
                      <span className="text-sm text-charcoal font-light">Fresh harvests delivered to your door</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sage rounded-full"></div>
                      <span className="text-sm text-charcoal font-light">Monthly photo updates & farm visits</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sage rounded-full"></div>
                      <span className="text-sm text-charcoal font-light">Perfect gift for nature lovers</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-sage text-white font-light text-lg tracking-wide hover:bg-sage-dark transition-colors duration-300 rounded-lg shadow-lg"
                  >
                    Adopt Your Tree Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Benefits Grid with Bigger Images */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {ADOPT_TREE_SECTION.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center enhanced-card p-4 sm:p-6 elegant-card group cursor-pointer"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-sage/10 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-sage/20 transition-colors duration-300">
                  <Image
                    src={benefit.image}
                    alt={benefit.text}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="text-charcoal font-light text-sm sm:text-base font-sans font-medium">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tree Gallery Ticker */}
        <Ticker
          title="Your Future Trees"
          images={ADOPT_TREE_SECTION.tickerImages}
        />
      </div>
    </section>
  )
}
