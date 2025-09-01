'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav 
      className={`flex items-center space-x-1 text-sm text-charcoal/60 ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 mx-1 text-charcoal/40" />
            )}
            {item.current ? (
              <span 
                className="text-sage font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : item.href ? (
              <Link
                href={item.href}
                className="hover:text-sage transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal/40">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Structured data for breadcrumbs
export function generateBreadcrumbStructuredData(items: BreadcrumbItem[], baseUrl: string) {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    "item": item.href ? `${baseUrl}${item.href}` : undefined
  }))

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  }
}
