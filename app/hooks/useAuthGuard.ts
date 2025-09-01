'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface UseAuthGuardOptions {
  redirectTo?: string
  showPrompt?: boolean
}

export function useAuthGuard(options: UseAuthGuardOptions = {}) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [showAuthPrompt, setShowAuthPrompt] = useState(false)
  
  const { redirectTo = '/auth/signin', showPrompt = true } = options

  const requireAuth = (callback?: () => void) => {
    if (status === 'loading') {
      // Still loading, wait
      return false
    }
    
    if (status === 'unauthenticated') {
      if (showPrompt) {
        // Show auth prompt instead of immediate redirect
        setShowAuthPrompt(true)
      } else {
        // Direct redirect
        router.push(redirectTo)
      }
      return false
    }
    
    // User is authenticated
    if (callback) {
      callback()
    }
    return true
  }

  const handleAuthSuccess = () => {
    setShowAuthPrompt(false)
    // Optionally redirect to the intended destination
  }

  const handleAuthCancel = () => {
    setShowAuthPrompt(false)
  }

  return {
    session,
    status,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading',
    requireAuth,
    showAuthPrompt,
    handleAuthSuccess,
    handleAuthCancel
  }
}
