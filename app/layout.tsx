import './globals.css'
import type { Metadata } from 'next'
import SessionProvider from './providers/SessionProvider'
import { SEO_CONFIG, SITE_SEO } from './lib/constants/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_SEO.siteUrl),
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: `%s | ${SITE_SEO.siteName}`,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.defaultKeywords,
  authors: [{ name: SITE_SEO.siteName }],
  creator: SITE_SEO.siteName,
  publisher: SITE_SEO.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: SITE_SEO.siteLocale,
    url: SITE_SEO.siteUrl,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    siteName: SITE_SEO.siteName,
    images: [
      {
        url: SEO_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.defaultTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SEO_CONFIG.twitterHandle,
    creator: SEO_CONFIG.twitterHandle,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: SEO_CONFIG.googleSiteVerification,
    yandex: SEO_CONFIG.bingSiteVerification,
  },
  alternates: {
    canonical: SITE_SEO.siteUrl,
    languages: {
      'en': SITE_SEO.siteUrl,
      'hi': `${SITE_SEO.siteUrl}/hi`,
    },
  },
  category: 'agriculture',
  classification: 'organic farming',
  other: {
    'theme-color': SEO_CONFIG.themeColor,
    'color-scheme': SEO_CONFIG.colorScheme,
    'referrer': SEO_CONFIG.referrer,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
          <html lang="en">
        <body className="bg-cream">
          <SessionProvider>
            {children}
          </SessionProvider>
        </body>
      </html>
  )
}
