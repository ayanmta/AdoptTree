'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnalytics } from '@/app/hooks/useAnalytics'

interface UserData {
  name?: string
  email?: string
  location?: {
    country?: string
    city?: string
    region?: string
  }
}

export default function UserDataCollector() {
  const [showCollector, setShowCollector] = useState(false)
  const [userData, setUserData] = useState<UserData>({})
  const [isLoading, setIsLoading] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    // Check if user has already provided data
    const storedUser = localStorage.getItem('baghari_user')
    const consent = localStorage.getItem('baghari_analytics_consent')
    
    if (storedUser && consent === 'true') {
      setHasConsent(true)
      return
    }

    // Show collector after 5 seconds if no data exists
    const timer = setTimeout(() => {
      setShowCollector(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleConsent = (consented: boolean) => {
    setHasConsent(consented)
    localStorage.setItem('baghari_analytics_consent', consented.toString())
    
    trackEvent('analytics_consent', {
      consented,
      timestamp: new Date().toISOString()
    })

    if (!consented) {
      setShowCollector(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Get location data
      let locationData: { country?: string; city?: string; region?: string } = {}
      try {
        const response = await fetch('https://ipapi.co/json/')
        if (response.ok) {
          const data = await response.json()
          locationData = {
            country: data.country_name,
            city: data.city,
            region: data.region
          }
        }
      } catch (error) {
        console.log('Location data not available')
      }

      const finalUserData = {
        ...userData,
        location: locationData
      }

      // Store user data
      localStorage.setItem('baghari_user', JSON.stringify(finalUserData))

      // Track user data collection
      trackEvent('user_data_collected', {
        has_name: !!userData.name,
        has_email: !!userData.email,
        has_location: !!locationData.country,
        timestamp: new Date().toISOString()
      })

      setShowCollector(false)
      
      // Show success message
      setTimeout(() => {
        alert('Thank you! Your preferences have been saved.')
      }, 100)

    } catch (error) {
      console.error('Error saving user data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!showCollector || hasConsent) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="fixed bottom-4 right-4 z-50 max-w-sm w-full"
      >
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Enhance Your Experience
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Help us personalize your visit to Baghari Farm. We respect your privacy and only use this data to improve your experience.
              </p>
            </div>
            <button
              onClick={() => setShowCollector(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name (Optional)
              </label>
              <input
                type="text"
                value={userData.name || ''}
                onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (Optional)
              </label>
              <input
                type="email"
                value={userData.email || ''}
                onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-sage text-white px-4 py-2 rounded-md hover:bg-sage/90 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : 'Save Preferences'}
              </button>
              <button
                type="button"
                onClick={() => handleConsent(false)}
                className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Skip
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to our privacy policy and data collection practices.
            </p>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
