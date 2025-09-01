'use client'

import Head from 'next/head'
import { SEO_CONFIG, SITE_SEO } from '@/app/lib/constants/seo'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object
  noIndex?: boolean
  noFollow?: boolean
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export default function SEOHead({
  title = SEO_CONFIG.defaultTitle,
  description = SEO_CONFIG.defaultDescription,
  keywords = SEO_CONFIG.defaultKeywords,
  canonical,
  ogImage = SEO_CONFIG.defaultOgImage,
  ogType = SEO_CONFIG.defaultOgType,
  twitterCard = SEO_CONFIG.defaultTwitterCard,
  structuredData,
  noIndex = false,
  noFollow = false,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}: SEOHeadProps) {
  const robots = noIndex 
    ? 'noindex, nofollow' 
    : noFollow 
    ? 'index, nofollow' 
    : SEO_CONFIG.robots

  const fullTitle = title.includes(SITE_SEO.siteName) 
    ? title 
    : `${title} | ${SITE_SEO.siteName}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="viewport" content={SEO_CONFIG.viewport} />
      <meta name="theme-color" content={SEO_CONFIG.themeColor} />
      <meta name="color-scheme" content={SEO_CONFIG.colorScheme} />
      <meta name="referrer" content={SEO_CONFIG.referrer} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Language and Locale */}
      <meta property="og:locale" content={SITE_SEO.siteLocale} />
      <link rel="alternate" hrefLang="en" href={SITE_SEO.siteUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || SITE_SEO.siteUrl} />
      <meta property="og:site_name" content={SITE_SEO.siteName} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      
      {/* Article Meta Tags (for blog posts) */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Site Verification */}
      {SEO_CONFIG.googleSiteVerification && (
        <meta name="google-site-verification" content={SEO_CONFIG.googleSiteVerification} />
      )}
      {SEO_CONFIG.bingSiteVerification && (
        <meta name="msvalidate.01" content={SEO_CONFIG.bingSiteVerification} />
      )}
      
      {/* Facebook App ID */}
      {SEO_CONFIG.facebookAppId && (
        <meta property="fb:app_id" content={SEO_CONFIG.facebookAppId} />
      )}
      
      {/* Preconnect for Performance */}
      {SEO_CONFIG.preconnectDomains.map((domain, index) => (
        <link key={index} rel="preconnect" href={domain} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Additional Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": SITE_SEO.siteName,
            "url": SITE_SEO.siteUrl,
            "logo": `${SITE_SEO.siteUrl}/uploads/main-logo.svg`,
            "description": SITE_SEO.siteDescription,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": SITE_SEO.contactInfo.address,
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": SITE_SEO.contactInfo.phone,
              "contactType": "customer service",
              "email": SITE_SEO.contactInfo.email
            },
            "sameAs": Object.values(SITE_SEO.socialMedia),
            "foundingDate": SITE_SEO.business.founded,
            "numberOfEmployees": SITE_SEO.business.employees,
            "award": SITE_SEO.business.awards,
            "knowsAbout": SITE_SEO.business.certifications
          })
        }}
      />
      
      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": SITE_SEO.siteName,
            "description": SITE_SEO.siteDescription,
            "url": SITE_SEO.siteUrl,
            "telephone": SITE_SEO.contactInfo.phone,
            "email": SITE_SEO.contactInfo.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": SITE_SEO.contactInfo.address,
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": SITE_SEO.contactInfo.coordinates.latitude,
              "longitude": SITE_SEO.contactInfo.coordinates.longitude
            },
            "openingHours": "Mo-Su 08:00-18:00",
            "priceRange": "₹₹",
            "servesCuisine": "Organic Fruits",
            "areaServed": "India"
          })
        }}
      />
    </Head>
  )
}
