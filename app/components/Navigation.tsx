'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, Search, User, LogOut, LogIn, Trees, BookOpen, ShoppingBag } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'
import { useAuthGuard } from '@/app/hooks/useAuthGuard'
import AuthPrompt from '@/app/components/ui/AuthPrompt'
import { NAVIGATION_ITEMS } from '@/app/lib/constants/content'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { data: session, status } = useSession()
  const { requireAuth, showAuthPrompt, handleAuthSuccess, handleAuthCancel } = useAuthGuard()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string, authRequired: boolean = false) => {
    if (authRequired) {
      requireAuth(() => {
        if (href.startsWith('/')) {
          window.location.href = href
        } else {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    } else {
      if (href.startsWith('/')) {
        window.location.href = href
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed Height Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-sage/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20 relative">
            




            {/* Right-Aligned Navigation - Redesigned */}
            <div className="flex items-center justify-end w-full">
              {/* Primary Navigation Links */}
              <div className="hidden lg:flex items-center space-x-8">
                {/* About Section */}
                <motion.button
                  onClick={() => scrollToSection('#about', false)}
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium text-sm transition-colors duration-300 flex items-center ${
                    scrolled 
                      ? 'text-charcoal/80 hover:text-sage' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <BookOpen size={16} className="mr-2" />
                  Our Story
                </motion.button>
                
                {/* Shop Now Section */}
                <motion.button
                  onClick={() => scrollToSection('#fruits', false)}
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium text-sm transition-colors duration-300 flex items-center ${
                    scrolled 
                      ? 'text-charcoal/80 hover:text-sage' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <ShoppingBag size={16} className="mr-2" />
                  Shop Now
                </motion.button>
                
                {/* Adopt Tree Section */}
                <motion.button
                  onClick={() => scrollToSection('/adopt', true)}
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium text-sm transition-colors duration-300 flex items-center ${
                    scrolled 
                      ? 'text-charcoal/80 hover:text-sage' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <Trees size={16} className="mr-2" />
                  Adopt Tree
                </motion.button>
              </div>

              {/* Auth Section */}
              <div className="flex items-center space-x-3 ml-8">

                {session ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => signOut()}
                    className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      scrolled 
                        ? 'bg-red-50 text-red-600 hover:bg-red-100' 
                        : 'bg-red-500/20 text-red-300 hover:bg-red-500/30'
                    }`}
                  >
                    <LogOut size={14} className="mr-1" />
                    Logout
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAuthModal(true)}
                    className={`flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      scrolled 
                        ? 'bg-sage text-white hover:bg-sage-dark shadow-md' 
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
                    }`}
                  >
                    <LogIn size={14} className="mr-1" />
                    Sign In
                  </motion.button>
                )}
                
                {session && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 transition-colors duration-300 ${
                      scrolled 
                        ? 'text-charcoal/80 hover:text-sage' 
                        : 'text-white/90 hover:text-white'
                    }`}
                    title="Profile"
                  >
                    <User size={18} />
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-sage/10"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="flex items-center space-x-3 p-3 bg-sage/5 rounded-lg">
                <Search size={18} className="text-sage" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="flex-1 bg-transparent text-charcoal placeholder-charcoal/50 font-light text-sm outline-none"
                />
              </div>
              
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('#fruits', false)}
                  className="flex items-center w-full text-left text-charcoal/80 hover:text-sage font-medium text-lg py-3 px-4 bg-sage/5 rounded-lg transition-all duration-300"
                >
                  <ShoppingBag size={20} className="mr-3" />
                  Shop Fresh Fruits
                </button>
                <button
                  onClick={() => scrollToSection('#about', false)}
                  className="flex items-center w-full text-left text-charcoal/80 hover:text-sage font-medium text-lg py-3 px-4 bg-sage/5 rounded-lg transition-all duration-300"
                >
                  <BookOpen size={20} className="mr-3" />
                  Our Story
                </button>
                <button
                  onClick={() => scrollToSection('/adopt', true)}
                  className="flex items-center w-full text-left text-charcoal/80 hover:text-sage font-medium text-lg py-3 px-4 bg-sage/5 rounded-lg transition-all duration-300"
                >
                  <Trees size={20} className="mr-3" />
                  Adopt a Tree
                </button>
              </div>
              
              {/* Mobile Auth */}
              <div className="pt-4 border-t border-sage/20">
                <div className="flex items-center justify-between">
                  <div className="text-charcoal/60 font-light text-sm">
                    +91 98765 43210
                  </div>
                  <div className="flex items-center space-x-2">
                    {session ? (
                      <button
                        onClick={() => signOut()}
                        className="p-2 text-charcoal/80 hover:text-sage transition-colors duration-300"
                      >
                        <LogOut size={18} />
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowAuthModal(true)}
                        className="p-2 text-charcoal/80 hover:text-sage transition-colors duration-300"
                      >
                        <LogIn size={18} />
                      </button>
                    )}
                    <button className="p-2 text-charcoal/80 hover:text-sage transition-colors duration-300">
                      <User size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Independent Floating Logo - Appears on scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-2 left-4 z-50 pointer-events-none"
          >
            {/* Logo Container with Premium Glass Effect */}
            <div className="relative">
              {/* Main Logo Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center p-0 overflow-hidden">
                {/* Premium Glass Effect Layers */}
                <div className="absolute inset-0 bg-white/8 backdrop-blur-2xl rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/8 to-white/6 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-white/6 via-transparent to-white/10 rounded-full"></div>
                
                {/* Subtle Border */}
                <div className="absolute inset-0 rounded-full border border-white/20"></div>
                
                {/* Inner Glow */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
                
                {/* Logo Image */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <Image
                    src="/uploads/main-logo.svg"
                    alt="Baghari Farm"
                    width={128}
                    height={128}
                    className="w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-30 lg:h-30 object-contain drop-shadow-lg"
                  />
                </div>
              </div>
              
              {/* Floating Particles Effect */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -right-3 w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Prompt Modal */}
      <AuthPrompt
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
        title="Join Our Himalayan Family"
        description="Sign in to access exclusive content and personalized experiences"
      />
    </>
  )
}
