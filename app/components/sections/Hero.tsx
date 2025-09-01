'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { HERO_SECTION } from '@/app/lib/constants/content'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black w-full">
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        >
          <source src={HERO_SECTION.video.src} type="video/mp4" />
        </video>
        {/* Dynamic cinematic gradient overlay - lighter */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-red-900/15 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-red-800/8 to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-red-950/20 via-transparent to-black/45"></div>
      </motion.div>

      {/* Pure Logo-Centric Hero */}
      <motion.div 
        className="relative z-10 text-center px-4 w-full flex flex-col items-center justify-center min-h-screen"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-12"
        >


          {/* Simple Centered Logo */}
          <motion.div 
            className="flex justify-center items-center w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="hero-logo w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full flex items-center justify-center p-0 relative overflow-hidden">
              {/* Premium glass effect */}
              <div className="absolute inset-0 bg-white/8 backdrop-blur-2xl rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/8 to-white/6 rounded-full"></div>
              
              {/* Subtle border */}
              <div className="absolute inset-0 rounded-full border border-white/20"></div>
              
              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <Image
                  src="/uploads/main-logo.svg"
                  alt="Baghari Farm"
                  width={300}
                  height={300}
                  className="w-39 h-39 sm:w-47 sm:h-47 md:w-55 md:h-55 lg:w-63 lg:h-63 xl:w-71 xl:h-71 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Minimal Stats */}
          <motion.div 
            className="flex justify-center items-center gap-8 sm:gap-12 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {HERO_SECTION.stats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-light text-white font-sans">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 font-light font-sans">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Engagement Text */}
          <motion.div 
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="text-center space-y-2">
              <p className="text-white/80 font-light text-sm sm:text-base font-sans">
                Scroll to discover our Himalayan paradise
              </p>
              <p className="text-white/60 font-light text-xs sm:text-sm font-sans">
                Seasonal flavors • Pure mountain air • Nature's finest harvest
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
