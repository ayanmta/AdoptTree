import { NAVIGATION_ITEMS, FRUITS_SECTION, ADOPT_TREE_SECTION, TECH_RESEARCH_SECTION } from '@/app/lib/constants/content'

export interface AuthRequiredContent {
  id: string
  authRequired: boolean
  title?: string
  description?: string
}

// Define which content requires authentication
export const AUTH_REQUIRED_CONTENT: AuthRequiredContent[] = [
  {
    id: 'adopt-tree',
    authRequired: true,
    title: 'Adopt a Tree',
    description: 'Sign in to adopt your own Himalayan fruit tree'
  },
  {
    id: 'farm-stories',
    authRequired: true,
    title: 'Farm Stories & Insights',
    description: 'Sign in to access exclusive farm stories and insights'
  },
  {
    id: 'personalized-recommendations',
    authRequired: true,
    title: 'Personalized Recommendations',
    description: 'Sign in to get personalized fruit recommendations'
  },
  {
    id: 'tree-tracking',
    authRequired: true,
    title: 'Track Your Trees',
    description: 'Sign in to track your adopted trees'
  },
  {
    id: 'harvest-updates',
    authRequired: true,
    title: 'Harvest Updates',
    description: 'Sign in to receive personalized harvest updates'
  }
]

// Check if a specific content requires authentication
export function isAuthRequired(contentId: string): boolean {
  const content = AUTH_REQUIRED_CONTENT.find(item => item.id === contentId)
  return content?.authRequired || false
}

// Get auth prompt details for content
export function getAuthPromptDetails(contentId: string): { title: string; description: string } | null {
  const content = AUTH_REQUIRED_CONTENT.find(item => item.id === contentId)
  if (!content?.authRequired) return null
  
  return {
    title: content.title || 'Authentication Required',
    description: content.description || 'Sign in to access this content'
  }
}

// Check if navigation item requires auth
export function isNavigationAuthRequired(href: string): boolean {
  const navItem = NAVIGATION_ITEMS.find(item => item.href === href)
  return navItem?.authRequired || false
}

// Get all auth-required content IDs
export function getAuthRequiredContentIds(): string[] {
  return AUTH_REQUIRED_CONTENT
    .filter(item => item.authRequired)
    .map(item => item.id)
}

// Check if section requires authentication
export function isSectionAuthRequired(sectionId: string): boolean {
  switch (sectionId) {
    case 'adopt-tree':
    case 'farm-stories':
    case 'tech-research':
      return true
    case 'fruits':
    case 'about':
    case 'seasons':
    case 'visit':
      return false
    default:
      return false
  }
}
