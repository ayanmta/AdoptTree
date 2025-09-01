'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useAuthGuard } from '@/app/hooks/useAuthGuard'
import AuthPrompt from './AuthPrompt'

interface AuthProtectedButtonProps {
  children: ReactNode
  onClick?: () => void
  authRequired?: boolean
  authPromptTitle?: string
  authPromptDescription?: string
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function AuthProtectedButton({
  children,
  onClick,
  authRequired = false,
  authPromptTitle = "Join Our Himalayan Family",
  authPromptDescription = "Sign in to access exclusive content and personalized experiences",
  className = "",
  disabled = false,
  type = "button"
}: AuthProtectedButtonProps) {
  const { requireAuth, showAuthPrompt, handleAuthSuccess, handleAuthCancel } = useAuthGuard()

  const handleClick = () => {
    if (authRequired) {
      requireAuth(() => {
        if (onClick) {
          onClick()
        }
      })
    } else {
      if (onClick) {
        onClick()
      }
    }
  }

  return (
    <>
      <motion.button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={className}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {children}
      </motion.button>

      {/* Auth Prompt Modal */}
      <AuthPrompt
        isOpen={showAuthPrompt}
        onClose={handleAuthCancel}
        onSuccess={handleAuthSuccess}
        title={authPromptTitle}
        description={authPromptDescription}
      />
    </>
  )
}
