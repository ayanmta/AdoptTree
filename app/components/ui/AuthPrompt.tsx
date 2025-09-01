'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { signIn } from 'next-auth/react'
import { X, Mountain, Heart, Leaf, User, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'

interface AuthPromptProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  title?: string
  description?: string
  mode?: 'signin' | 'signup'
}

export default function AuthPrompt({ 
  isOpen, 
  onClose, 
  onSuccess, 
  title = "Join Our Himalayan Family",
  description = "Sign in to access exclusive content and personalized experiences",
  mode = 'signin'
}: AuthPromptProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(mode === 'signup')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  const handleSocialSignIn = async (provider: string) => {
    setIsLoading(true)
    try {
      const result = await signIn(provider, { 
        callbackUrl: '/',
        redirect: false 
      })
      
      if (result?.ok) {
        onSuccess()
      }
    } catch (error) {
      console.error('Sign in error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCredentialsAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        callbackUrl: '/',
        redirect: false
      })
      
      if (result?.ok) {
        onSuccess()
      }
    } catch (error) {
      console.error('Auth error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-sm bg-white rounded-xl shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 z-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-200"
              aria-label="Close authentication modal"
              type="button"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="relative p-6 pb-4">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-sage/10" />
              
              {/* Simple Logo */}
              <div className="relative flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center p-0 relative overflow-hidden">
                  {/* Premium glass effect */}
                  <div className="absolute inset-0 bg-white/12 backdrop-blur-2xl rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-white/12 to-white/10 rounded-full"></div>
                  
                  {/* Subtle border */}
                  <div className="absolute inset-0 rounded-full border border-white/25"></div>
                  
                  {/* Logo with enhanced visibility */}
                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <Image
                      src="/uploads/main-logo.svg"
                      alt="Baghari Farm"
                      width={24}
                      height={24}
                      className="w-11 h-11 object-contain drop-shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="relative text-center">
                <h2 className="text-xl font-light text-charcoal mb-1">{title}</h2>
                <p className="text-charcoal/60 text-xs leading-relaxed">{description}</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="px-6 pb-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-charcoal/70">
                  <div className="w-4 h-4 bg-sage/10 rounded-full flex items-center justify-center">
                    <Mountain size={12} className="text-sage" />
                  </div>
                  <span>Access exclusive farm stories</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-charcoal/70">
                  <div className="w-4 h-4 bg-sage/10 rounded-full flex items-center justify-center">
                    <Heart size={12} className="text-sage" />
                  </div>
                  <span>Personalized recommendations</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-charcoal/70">
                  <div className="w-4 h-4 bg-sage/10 rounded-full flex items-center justify-center">
                    <Leaf size={12} className="text-sage" />
                  </div>
                  <span>Track your adopted trees</span>
                </div>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="px-6 pb-4 space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialSignIn('google')}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-charcoal text-sm font-medium hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-xs">{isSignUp ? 'Sign up with Google' : 'Continue with Google'}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialSignIn('github')}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-xs">{isSignUp ? 'Sign up with GitHub' : 'Continue with GitHub'}</span>
              </motion.button>
            </div>

            {/* Divider */}
            <div className="relative px-6 pb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">or continue with email</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleCredentialsAuth} className="px-6 pb-4 space-y-3">
              {isSignUp && (
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-charcoal mb-1">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      id="name"
                      type="text"
                      required={isSignUp}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all duration-200 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-charcoal mb-1">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all duration-200 text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-medium text-charcoal mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-8 pr-10 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage/20 focus:border-sage transition-all duration-200 text-sm"
                    placeholder={isSignUp ? "Create a password" : "Enter your password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-sage text-white rounded-lg px-3 py-2 text-sm font-medium hover:bg-sage/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (isSignUp ? 'Creating account...' : 'Signing in...') : (isSignUp ? 'Create account' : 'Sign in')}
              </motion.button>
            </form>

            {/* Toggle Sign In/Sign Up */}
            <div className="px-6 pb-4 text-center">
              <p className="text-xs text-charcoal/60">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-sage hover:text-sage/80 font-medium transition-colors duration-200"
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </button>
              </p>
            </div>

            {/* Footer */}
            <div className="px-6 pb-4 text-center">
              <p className="text-xs text-charcoal/50">
                By continuing, you agree to our{' '}
                <button className="text-sage hover:text-sage/80">Terms</button>
                {' '}and{' '}
                <button className="text-sage hover:text-sage/80">Privacy Policy</button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
