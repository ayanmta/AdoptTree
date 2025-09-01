'use client'

import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackEvent,
  trackPageView,
  trackSectionView,
  trackButtonClick,
  trackLinkClick,
  trackImageClick,
  trackTickerInteraction,
  trackAdoptTreeClick,
  trackProductView,
  trackScrollDepth,
  trackUserJourney,
  trackPerformance,
  trackError,
  getUserProperties,
  ANALYTICS_EVENTS
} from '@/app/lib/analytics'

export const useAnalytics = () => {
  const pathname = usePathname()

  // Track page views automatically
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname, {
        ...getUserProperties(),
        referrer: document.referrer
      })
    }
  }, [pathname])

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      
      // Track at 25%, 50%, 75%, and 100%
      if ([25, 50, 75, 100].includes(scrollPercent)) {
        trackScrollDepth(scrollPercent, {
          page: pathname
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  // Track performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            trackPerformance('page_load_time', navEntry.loadEventEnd - navEntry.loadEventStart, {
              page: pathname
            })
          }
        }
      })
      
      observer.observe({ entryTypes: ['navigation'] })
      return () => observer.disconnect()
    }
  }, [pathname])

  // Track errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      trackError(event.message, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        page: pathname
      })
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError('Unhandled Promise Rejection', {
        reason: event.reason,
        page: pathname
      })
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    
    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [pathname])

  // Return tracking functions
  return {
    // Page and section tracking
    trackPageView: useCallback((page: string, properties?: Record<string, any>) => {
      return trackPageView(page, properties)
    }, []),
    
    trackSectionView: useCallback((section: string, properties?: Record<string, any>) => {
      return trackSectionView(section, properties)
    }, []),

    // User interaction tracking
    trackButtonClick: useCallback((button: string, properties?: Record<string, any>) => {
      return trackButtonClick(button, properties)
    }, []),

    trackLinkClick: useCallback((link: string, properties?: Record<string, any>) => {
      return trackLinkClick(link, properties)
    }, []),

    trackImageClick: useCallback((image: string, properties?: Record<string, any>) => {
      return trackImageClick(image, properties)
    }, []),

    trackTickerInteraction: useCallback((action: string, properties?: Record<string, any>) => {
      return trackTickerInteraction(action, properties)
    }, []),

    // Business tracking
    trackAdoptTreeClick: useCallback((treeType: string, properties?: Record<string, any>) => {
      return trackAdoptTreeClick(treeType, properties)
    }, []),

    trackProductView: useCallback((product: string, properties?: Record<string, any>) => {
      return trackProductView(product, properties)
    }, []),

    // Journey tracking
    trackUserJourney: useCallback((step: string, properties?: Record<string, any>) => {
      return trackUserJourney(step, properties)
    }, []),

    // Custom events
    trackEvent: useCallback((event: string, properties?: Record<string, any>) => {
      return trackEvent(event, properties)
    }, []),

    // User properties
    getUserProperties: useCallback(() => {
      return getUserProperties()
    }, []),

    // Constants
    ANALYTICS_EVENTS
  }
}
