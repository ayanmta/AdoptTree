'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Hero from './components/sections/Hero'
import Ticker from './components/sections/Ticker'
import Navigation from './components/Navigation'
import { 
  ABOUT_SECTION, 
  FRUITS_SECTION, 
  ADOPT_TREE_SECTION, 
  SEASONS_SECTION, 
  VISIT_SECTION, 
  FOOTER_CONTENT 
} from './lib/constants/content'
import { getIconComponent, formatPrice } from './lib/utils'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Himalayan Beauty Ticker */}
      <Ticker />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sage mb-4">
              {ABOUT_SECTION.title}
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              {ABOUT_SECTION.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ABOUT_SECTION.features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="floating-card p-8 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-sage mb-3">{feature.title}</h3>
                <p className="text-charcoal/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fruits Section */}
      <section id="fruits" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="bg-sage/20 backdrop-blur-sm text-sage px-6 py-2 rounded-full text-sm font-medium border border-sage/30 inline-block mb-4">
              🍎 Fresh from the Himalayas
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-sage mb-6">
              {FRUITS_SECTION.title}
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              {FRUITS_SECTION.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FRUITS_SECTION.products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="floating-card p-6 group cursor-pointer"
              >
                <div className="organic-border overflow-hidden rounded-lg mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-sage">{product.name}</h3>
                  <div className="bg-gradient-to-r from-coral to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {formatPrice(product.price)}
                  </div>
                </div>
                
                <p className="text-charcoal/70 text-sm mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-sage/10 text-sage px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs text-charcoal/60">
                  <div>
                    <div className="font-semibold">Altitude</div>
                    <div>{product.stats.altitude}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Harvest</div>
                    <div>{product.stats.harvest}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Shelf Life</div>
                    <div>{product.stats.shelfLife}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adopt Tree Section */}
      <section id="adopt" className="py-20 bg-gradient-to-br from-sage/10 to-coral/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <div className="bg-gradient-to-r from-sage to-sage-dark text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg inline-block mb-4">
              🏔️ Own a Piece of Himalayan Paradise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sage mb-4">
              {ADOPT_TREE_SECTION.title}
            </h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-8">
              {ADOPT_TREE_SECTION.description}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              {ADOPT_TREE_SECTION.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            <motion.a
              href={ADOPT_TREE_SECTION.ctaHref}
              className="inline-flex items-center gap-2 bg-sage text-white px-8 py-3 rounded-full font-semibold hover:bg-sage-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ADOPT_TREE_SECTION.ctaText}
              <span>→</span>
            </motion.a>
          </motion.div>

          {/* Adopt Tree Ticker */}
          <Ticker 
            title="Tree Adoption Gallery"
            images={ADOPT_TREE_SECTION.tickerImages}
          />
        </div>
      </section>

      {/* Seasons Section */}
      <section id="seasons" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sage mb-4">
              {SEASONS_SECTION.title}
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              {SEASONS_SECTION.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEASONS_SECTION.images.map((season, index) => (
              <motion.div 
                key={season.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="floating-card p-6 group cursor-pointer"
              >
                <div className="organic-border overflow-hidden rounded-lg mb-4">
                  <Image
                    src={season.src}
                    alt={season.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-sage mb-2">{season.title}</h3>
                <p className="text-charcoal/70 text-sm mb-4">{season.description}</p>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-charcoal/60">
                  <div>
                    <div className="font-semibold">Season</div>
                    <div>{season.season}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Temperature</div>
                    <div>{season.temperature}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="bg-sage/20 backdrop-blur-sm text-sage px-6 py-2 rounded-full text-sm font-medium border border-sage/30 inline-block mb-4">
              🏔️ Experience the Himalayas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-sage mb-4">
              {VISIT_SECTION.title}
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              {VISIT_SECTION.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {VISIT_SECTION.experienceCards.map((card, index) => (
              <motion.div 
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="floating-card p-8 text-center"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-sage mb-3">{card.title}</h3>
                <p className="text-charcoal/70 mb-4">{card.description}</p>
                <ul className="text-sm text-charcoal/60 space-y-1">
                  {card.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center"
          >
            <div className="floating-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-sage mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span>📞</span>
                    <span className="font-semibold">Phone:</span>
                  </div>
                  <p className="text-charcoal/70">{VISIT_SECTION.contactInfo.phone}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span>📧</span>
                    <span className="font-semibold">Email:</span>
                  </div>
                  <p className="text-charcoal/70">{VISIT_SECTION.contactInfo.email}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span>📍</span>
                    <span className="font-semibold">Address:</span>
                  </div>
                  <p className="text-charcoal/70">{VISIT_SECTION.contactInfo.address}</p>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span>⏰</span>
                    <span className="font-semibold">Best Time:</span>
                  </div>
                  <p className="text-charcoal/70">{VISIT_SECTION.contactInfo.bestTime}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="logo-background backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Image
                    src="/uploads/main-logo.svg"
                    alt="BAGHARI FARMS Logo"
                    width={40}
                    height={40}
                    className="w-8 h-8 object-contain filter drop-shadow-sm animate-logo-colors"
                  />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-bold text-white">{FOOTER_CONTENT.brand.name}</h3>
                  <p className="text-white/70 text-xs">{FOOTER_CONTENT.brand.tagline}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4">{FOOTER_CONTENT.brand.description}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {FOOTER_CONTENT.quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/60">
                <p>{FOOTER_CONTENT.contact.phone}</p>
                <p>{FOOTER_CONTENT.contact.email}</p>
                <p className="text-sm">{FOOTER_CONTENT.contact.address}</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-2">
                {FOOTER_CONTENT.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-coral transition-all duration-300"
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">{FOOTER_CONTENT.madeWith}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
