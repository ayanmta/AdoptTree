'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { VISIT_SECTION } from '@/app/lib/constants/content'

export default function Visit() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 sm:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-charcoal mb-6 font-sans">
            {VISIT_SECTION.title}
          </h2>
          <p className="text-lg sm:text-xl text-charcoal font-light max-w-3xl mx-auto leading-relaxed font-sans">
            {VISIT_SECTION.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20 px-4">
          {VISIT_SECTION.experienceCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-center group enhanced-card p-8 elegant-card"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-sage/10 rounded-full flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-light text-charcoal mb-4 font-sans">
                {card.title}
              </h3>
              <p className="text-charcoal font-light mb-6 leading-relaxed text-sm sm:text-base font-sans">
                {card.description}
              </p>
              <ul className="text-xs sm:text-sm text-charcoal font-light space-y-2">
                {card.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center px-4"
        >
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-light text-charcoal mb-6">Plan Your Visit</h3>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="text-left">
                <div className="text-charcoal/60 font-light text-xs sm:text-sm mb-2">Phone</div>
                <div className="text-charcoal font-light text-sm sm:text-base">{VISIT_SECTION.contactInfo.phone}</div>
              </div>
              <div className="text-left">
                <div className="text-charcoal/60 font-light text-xs sm:text-sm mb-2">Email</div>
                <div className="text-charcoal font-light text-sm sm:text-base">{VISIT_SECTION.contactInfo.email}</div>
              </div>
              <div className="text-left">
                <div className="text-charcoal/60 font-light text-xs sm:text-sm mb-2">Address</div>
                <div className="text-charcoal font-light text-sm sm:text-base">{VISIT_SECTION.contactInfo.address}</div>
              </div>
              <div className="text-left">
                <div className="text-charcoal/60 font-light text-xs sm:text-sm mb-2">Hours</div>
                <div className="text-charcoal font-light text-sm sm:text-base">{VISIT_SECTION.contactInfo.hours}</div>
              </div>
            </div>
            
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-sage text-white font-light text-base sm:text-lg tracking-wide hover:bg-sage-dark transition-colors duration-300 rounded-lg">
              {VISIT_SECTION.contactInfo.booking}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
