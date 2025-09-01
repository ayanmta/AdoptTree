'use client'

import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { X, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function AuthError() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration.'
      case 'AccessDenied':
        return 'You do not have permission to sign in.'
      case 'Verification':
        return 'The verification token has expired or has already been used.'
      default:
        return 'An error occurred during authentication. Please try again.'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/10 via-white to-sage/5 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-2xl font-light text-charcoal mb-4">Authentication Error</h1>
            <p className="text-charcoal/60 mb-6">
              {getErrorMessage(error)}
            </p>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-sage text-white font-medium rounded-xl hover:bg-sage/90 transition-colors duration-200"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
