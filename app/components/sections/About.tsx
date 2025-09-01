'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ABOUT_SECTION } from '@/app/lib/constants/content'

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-charcoal mb-6 font-sans">
            {ABOUT_SECTION.title}
          </h2>
          <p className="text-lg sm:text-xl text-charcoal font-light max-w-3xl mx-auto leading-relaxed font-sans">
            {ABOUT_SECTION.description}
          </p>
        </motion.div>

        {/* Main Story Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 px-4">
          {/* Left Side - Intro Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/uploads/hero-video1.mp4" type="video/mp4" />
                <Image
                  src="/uploads/ticker7.PNG"
                  alt="People working in the farm"
                  fill
                  className="object-cover"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-light">Meet our farming family</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-light text-charcoal mb-4 font-sans">
                  A Family's Journey in the Himalayas
                </h3>
                <div className="w-16 h-px bg-sage mb-6"></div>
              </div>
              
              <div className="space-y-4">
                <p className="text-charcoal/80 font-light leading-relaxed text-base lg:text-lg font-sans">
                  For over 15 years, our family has been cultivating the pristine Himalayan soil, 
                  learning from the mountains and adapting to their rhythms. Every season brings 
                  new challenges and discoveries.
                </p>
                <p className="text-charcoal/80 font-light leading-relaxed text-base lg:text-lg font-sans">
                  From the first apple blossoms of spring to the golden harvest of autumn, 
                  we've built a sustainable farming practice that honors both tradition and innovation.
                </p>
              </div>
          
            </div>
          </motion.div>
        </div>

        {/* Himalayan Beauty Video Carousel - Marketing Hook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-20 px-4"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-light text-charcoal mb-4 font-sans">
              Experience the Himalayan Magic
            </h3>
            <p className="text-charcoal/70 font-light text-base lg:text-lg max-w-2xl mx-auto">
              Where every sunrise paints the mountains golden and every breeze carries the promise of nature's bounty
            </p>
          </div>
          
          {/* Video Carousel Container */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/uploads/hero-video.mp4" type="video/mp4" />
              {/* Fallback image */}
              <Image
                src="/uploads/ticker2.PNG"
                alt="Himalayan landscape"
                fill
                className="object-cover"
              />
            </video>
            
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
            
            {/* Floating Content Cards */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl w-full px-4">
                {/* Card 1 - Sunrise */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20"
                >
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">🌅</div>
                    <h4 className="font-light text-sm sm:text-base mb-1">Golden Dawn</h4>
                    <p className="text-white/80 text-xs sm:text-sm font-light">Where mountains meet the morning sun</p>
                  </div>
                </motion.div>
                
                {/* Card 2 - Apple Orchards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20"
                >
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">🍎</div>
                    <h4 className="font-light text-sm sm:text-base mb-1">Apple Paradise</h4>
                    <p className="text-white/80 text-xs sm:text-sm font-light">Crisp apples kissed by mountain air</p>
                  </div>
                </motion.div>
                
                {/* Card 3 - Serenity */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20"
                >
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">🏔️</div>
                    <h4 className="font-light text-sm sm:text-base mb-1">Pure Serenity</h4>
                    <p className="text-white/80 text-xs sm:text-sm font-light">Nature's untouched beauty</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Subtle Floating Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </motion.div>

        {/* Feature Highlights - Reorganized */}
        <div className="px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-light text-charcoal mb-4 font-sans">
              What Makes Us Different
            </h3>
            <div className="w-16 h-px bg-sage mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {ABOUT_SECTION.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-sage/10 hover:border-sage/30 transition-all duration-300 hover:shadow-lg">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-sage/10 rounded-full flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-sage rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-charcoal mb-3 font-sans text-center">
                    {feature.title}
                  </h4>
                  <p className="text-charcoal/70 font-light leading-relaxed text-sm font-sans text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  )
}
