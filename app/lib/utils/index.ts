// Utility functions for the application

export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const formatPrice = (price: number) => {
  return `₹${price}/kg`
}

export const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, string> = {
    Mountain: '🏔️',
    Leaf: '🌱',
    Heart: '❤️',
    Phone: '📞',
    Mail: '📧',
    MapPin: '📍',
    Calendar: '📅',
    ArrowRight: '→',
    Play: '▶️',
    Pause: '⏸️',
    Trees: '🌳',
    Star: '⭐',
    Users: '👥',
    Award: '🏆',
    Clock: '⏰',
    Zap: '⚡',
    CheckCircle: '✅',
    Menu: '☰',
    X: '✕'
  }
  
  return iconMap[iconName] || '•'
}

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
