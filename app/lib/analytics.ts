// Analytics utility for comprehensive user tracking
import { track } from '@vercel/analytics'

// Event types for better organization
export const ANALYTICS_EVENTS = {
  // Page interactions
  PAGE_VIEW: 'page_view',
  SECTION_VIEW: 'section_view',
  
  // User engagement
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  FORM_SUBMIT: 'form_submit',
  
  // Content interactions
  IMAGE_CLICK: 'image_click',
  VIDEO_PLAY: 'video_play',
  TICKER_INTERACTION: 'ticker_interaction',
  
  // Navigation
  NAVIGATION: 'navigation',
  SCROLL_DEPTH: 'scroll_depth',
  
  // Business actions
  ADOPT_TREE_CLICK: 'adopt_tree_click',
  PRODUCT_VIEW: 'product_view',
  CONTACT_CLICK: 'contact_click',
  
  // User journey
  USER_JOURNEY_START: 'user_journey_start',
  USER_JOURNEY_COMPLETE: 'user_journey_complete',
  
  // Performance
  PERFORMANCE_METRIC: 'performance_metric',
  ERROR_OCCURRED: 'error_occurred'
} as const

// User properties for segmentation
export interface UserProperties {
  device_type?: 'mobile' | 'desktop' | 'tablet'
  browser?: string
  os?: string
  country?: string
  city?: string
  referrer?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  user_type?: 'new' | 'returning'
  session_duration?: number
  pages_viewed?: number
}

// Enhanced tracking function
export const trackEvent = (
  event: string,
  properties?: Record<string, any>,
  userProperties?: UserProperties
) => {
  try {
    // Add timestamp
    const eventData = {
      ...properties,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
    }

    // Track with Vercel Analytics
    track(event, eventData)

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event, eventData)
    }

    return true
  } catch (error) {
    console.error('Analytics tracking error:', error)
    return false
  }
}

// Page view tracking
export const trackPageView = (page: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, {
    page,
    title: typeof document !== 'undefined' ? document.title : '',
    ...properties
  })
}

// Section view tracking
export const trackSectionView = (section: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.SECTION_VIEW, {
    section,
    ...properties
  })
}

// Button click tracking
export const trackButtonClick = (button: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.BUTTON_CLICK, {
    button,
    ...properties
  })
}

// Link click tracking
export const trackLinkClick = (link: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.LINK_CLICK, {
    link,
    ...properties
  })
}

// Image interaction tracking
export const trackImageClick = (image: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.IMAGE_CLICK, {
    image,
    ...properties
  })
}

// Ticker interaction tracking
export const trackTickerInteraction = (action: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.TICKER_INTERACTION, {
    action,
    ...properties
  })
}

// Business action tracking
export const trackAdoptTreeClick = (treeType: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.ADOPT_TREE_CLICK, {
    tree_type: treeType,
    ...properties
  })
}

// Product view tracking
export const trackProductView = (product: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.PRODUCT_VIEW, {
    product,
    ...properties
  })
}

// Scroll depth tracking
export const trackScrollDepth = (depth: number, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, {
    depth_percentage: depth,
    ...properties
  })
}

// User journey tracking
export const trackUserJourney = (step: string, properties?: Record<string, any>) => {
  return trackEvent('user_journey_step', {
    step,
    ...properties
  })
}

// Performance tracking
export const trackPerformance = (metric: string, value: number, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.PERFORMANCE_METRIC, {
    metric,
    value,
    ...properties
  })
}

// Error tracking
export const trackError = (error: string, properties?: Record<string, any>) => {
  return trackEvent(ANALYTICS_EVENTS.ERROR_OCCURRED, {
    error,
    ...properties
  })
}

// Get user properties
export const getUserProperties = (): UserProperties => {
  if (typeof window === 'undefined') return {}

  const userAgent = navigator.userAgent
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  const isTablet = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent)
  
  let deviceType: 'mobile' | 'desktop' | 'tablet' = 'desktop'
  if (isMobile) deviceType = 'mobile'
  if (isTablet) deviceType = 'tablet'

  return {
    device_type: deviceType,
    browser: getBrowserInfo(userAgent),
    os: getOSInfo(userAgent),
    referrer: document.referrer,
    utm_source: getUTMParameter('utm_source'),
    utm_medium: getUTMParameter('utm_medium'),
    utm_campaign: getUTMParameter('utm_campaign'),
  }
}

// Helper functions
const getBrowserInfo = (userAgent: string): string => {
  if (userAgent.includes('Chrome')) return 'Chrome'
  if (userAgent.includes('Firefox')) return 'Firefox'
  if (userAgent.includes('Safari')) return 'Safari'
  if (userAgent.includes('Edge')) return 'Edge'
  return 'Other'
}

const getOSInfo = (userAgent: string): string => {
  if (userAgent.includes('Windows')) return 'Windows'
  if (userAgent.includes('Mac')) return 'macOS'
  if (userAgent.includes('Linux')) return 'Linux'
  if (userAgent.includes('Android')) return 'Android'
  if (userAgent.includes('iOS')) return 'iOS'
  return 'Other'
}

const getUTMParameter = (param: string): string => {
  if (typeof window === 'undefined') return ''
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param) || ''
}
