'use client'

import Image from 'next/image'
import { FOOTER_CONTENT } from '@/app/lib/constants/content'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              {/* Premium Footer Logo - Optimized for Dark Background */}
              <div className="relative">
                {/* Enhanced Glass Container for Dark Background */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full flex items-center justify-center p-0 relative overflow-hidden">
                  {/* Dark Background Glass Effect */}
                  <div className="absolute inset-0 bg-white/15 backdrop-blur-2xl rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/15 to-white/10 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-white/20 rounded-full"></div>
                  
                  {/* Enhanced Border for Dark Background */}
                  <div className="absolute inset-0 rounded-full border border-white/30"></div>
                  
                  {/* Inner Glow for Better Visibility */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* Logo with Enhanced Contrast */}
                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <Image
                      src="/uploads/main-logo.svg"
                      alt="Baghari Farm"
                      width={72}
                      height={72}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain drop-shadow-lg filter brightness-110 contrast-125"
                    />
                  </div>
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-white/5 blur-xl"></div>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-light text-white">{FOOTER_CONTENT.brand.name}</h3>
                <p className="text-white/60 text-xs sm:text-sm font-light">{FOOTER_CONTENT.brand.tagline}</p>
              </div>
            </div>
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              {FOOTER_CONTENT.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-light text-white mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {FOOTER_CONTENT.quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-white font-light transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-light text-white mb-4 sm:mb-6">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-white/60 font-light text-sm sm:text-base">
              <div>{FOOTER_CONTENT.contact.phone}</div>
              <div>{FOOTER_CONTENT.contact.email}</div>
              <div className="text-xs sm:text-sm">{FOOTER_CONTENT.contact.address}</div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base sm:text-lg font-light text-white mb-4 sm:mb-6">Follow Us</h4>
            <div className="flex space-x-3 sm:space-x-4">
              {FOOTER_CONTENT.social.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <span className="text-xs sm:text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm font-light">{FOOTER_CONTENT.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
