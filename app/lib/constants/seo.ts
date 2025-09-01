// SEO Constants for Baghari Farm website
// This file will be replaced with CMS data in the future

export const SITE_SEO = {
  // Basic Site Information
  siteName: "Baghari Farm",
  siteDescription: "Premium organic fruits from the heart of Himalayas. Fresh apples, plums, cherries, and more grown at 2,200m altitude in Baghari Village.",
  siteUrl: "https://bagharifarm.com",
  siteLanguage: "en",
  siteLocale: "en_IN",
  siteType: "website",
  
  // Contact Information
  contactInfo: {
    phone: "+91 98765 43210",
    email: "info@bagharifarm.com",
    address: "Baghari Village, Himalayan Region, India",
    coordinates: {
      latitude: "30.3753",
      longitude: "78.7821"
    }
  },
  
  // Social Media
  socialMedia: {
    facebook: "https://facebook.com/bagharifarm",
    instagram: "https://instagram.com/bagharifarm",
    twitter: "https://twitter.com/bagharifarm",
    youtube: "https://youtube.com/@bagharifarm",
    whatsapp: "https://wa.me/919876543210"
  },
  
  // Business Information
  business: {
    name: "Baghari Farm",
    type: "Farm",
    category: "Agriculture",
    founded: "2015",
    employees: "15-20",
    certifications: ["Organic Certified", "Himalayan Fresh", "Sustainable Farming"],
    awards: ["Best Organic Farm 2023", "Himalayan Excellence Award 2022"]
  }
}

export const PAGE_SEO = {
  home: {
    title: "Baghari Farm - Premium Organic Fruits from the Himalayas | Fresh Apples, Plums & More",
    description: "Discover premium organic fruits grown at 2,200m altitude in the Himalayas. Fresh apples, plums, cherries, and apricots from Baghari Farm. 100% organic, pesticide-free fruits delivered to your doorstep.",
    keywords: "organic fruits, Himalayan apples, fresh fruits, organic farm, Baghari Farm, mountain fruits, pesticide-free, sustainable farming, Indian organic fruits",
    canonical: "https://bagharifarm.com",
    ogImage: "https://bagharifarm.com/uploads/hero-image.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Baghari Farm",
      "url": "https://bagharifarm.com",
      "logo": "https://bagharifarm.com/uploads/main-logo.svg",
      "description": "Premium organic fruits from the heart of Himalayas",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Baghari Village",
        "addressRegion": "Himalayan Region",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 98765 43210",
        "contactType": "customer service",
        "email": "info@bagharifarm.com"
      },
      "sameAs": [
        "https://facebook.com/bagharifarm",
        "https://instagram.com/bagharifarm",
        "https://twitter.com/bagharifarm"
      ]
    }
  },
  
  about: {
    title: "About Baghari Farm - Our Story, Mission & Himalayan Farming Practices",
    description: "Learn about Baghari Farm's journey in organic farming at 2,200m altitude. Discover our sustainable practices, mountain water irrigation, and commitment to delivering the finest Himalayan fruits.",
    keywords: "about Baghari Farm, Himalayan farming, organic practices, sustainable agriculture, mountain farming, Kathi Gadh water, high altitude farming",
    canonical: "https://bagharifarm.com/about",
    ogImage: "https://bagharifarm.com/uploads/about-farm.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Baghari Farm",
      "description": "Located in the heart of the Himalayas, Baghari Farm is a premium organic fruit farm that grows a variety of fruits at high altitude.",
      "foundingDate": "2015",
      "location": {
        "@type": "Place",
        "name": "Baghari Village",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.3753",
          "longitude": "78.7821"
        }
      }
    }
  },
  
  fruits: {
    title: "Premium Organic Fruits - Himalayan Apples, Plums, Cherries & More | Baghari Farm",
    description: "Explore our premium selection of organic fruits grown at high altitude. Himalayan apples, wild plums, cherry blossoms, golden apricots, and creamy avocados. Fresh, pesticide-free, and sustainably grown.",
    keywords: "Himalayan apples, organic plums, cherry fruits, golden apricots, avocado, organic fruits online, fresh fruits delivery, mountain fruits",
    canonical: "https://bagharifarm.com/fruits",
    ogImage: "https://bagharifarm.com/uploads/fruits-collection.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Premium Organic Fruits",
      "description": "Collection of premium organic fruits grown at high altitude",
      "itemListElement": [
        {
          "@type": "Product",
          "name": "Himalayan Apples",
          "description": "Sweet and crisp apples grown at high altitude",
          "category": "Organic Fruits",
          "brand": {
            "@type": "Brand",
            "name": "Baghari Farm"
          },
          "offers": {
            "@type": "Offer",
            "price": "180",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "Product",
          "name": "Mountain Plums",
          "description": "Juicy plums with rich flavor",
          "category": "Organic Fruits",
          "brand": {
            "@type": "Brand",
            "name": "Baghari Farm"
          },
          "offers": {
            "@type": "Offer",
            "price": "220",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      ]
    }
  },
  
  adopt: {
    title: "Adopt a Tree - Own Your Himalayan Fruit Tree | Baghari Farm Tree Adoption Program",
    description: "Adopt your own fruit tree in the Himalayas and receive regular updates, harvests, and mountain visits. Choose from apple, plum, or cherry trees. Your name on a wooden pallet, monthly photos, and fresh harvests.",
    keywords: "tree adoption, adopt a tree, Himalayan fruit tree, apple tree adoption, plum tree adoption, cherry tree adoption, farm visit, tree ownership",
    canonical: "https://bagharifarm.com/adopt",
    ogImage: "https://bagharifarm.com/uploads/tree-adoption.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tree Adoption Program",
      "description": "Adopt your own fruit tree in the Himalayas",
      "provider": {
        "@type": "Organization",
        "name": "Baghari Farm"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "offers": {
        "@type": "Offer",
        "price": "2500",
        "priceCurrency": "INR",
        "description": "Apple Tree Adoption"
      }
    }
  },
  
  contact: {
    title: "Contact Baghari Farm - Visit Our Himalayan Farm | Book Farm Tours & Experiences",
    description: "Contact Baghari Farm to book farm tours, harvest experiences, and mountain adventures. Visit our Himalayan farm, experience organic farming, and taste fresh fruits. Located in Baghari Village.",
    keywords: "contact Baghari Farm, farm visit, Himalayan farm tour, harvest experience, mountain adventure, farm booking, visit farm",
    canonical: "https://bagharifarm.com/contact",
    ogImage: "https://bagharifarm.com/uploads/farm-tour.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "Baghari Farm",
      "description": "Organic fruit farm in the Himalayas offering tours and experiences",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Baghari Village",
        "addressRegion": "Himalayan Region",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "30.3753",
        "longitude": "78.7821"
      },
      "openingHours": "Mo-Su 08:00-18:00",
      "telephone": "+91 98765 43210"
    }
  }
}

export const PRODUCT_SEO = {
  apples: {
    title: "Himalayan Apples - Premium Organic Apples from Baghari Farm | Fresh & Crisp",
    description: "Hand-picked Himalayan apples grown at 2,200m altitude. Crisp, sweet, and 100% organic. Rich in antioxidants, perfect for juicing and baking. Direct from our mountain orchards to your table.",
    keywords: "Himalayan apples, organic apples, fresh apples, mountain apples, apple delivery, organic apple farm, crisp apples",
    canonical: "https://bagharifarm.com/fruits/himalayan-apples",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Himalayan Apples",
      "description": "Sweet and crisp apples grown at high altitude",
      "category": "Organic Fruits",
      "brand": {
        "@type": "Brand",
        "name": "Baghari Farm"
      },
      "offers": {
        "@type": "Offer",
        "price": "180",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Baghari Farm"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    }
  },
  
  plums: {
    title: "Wild Himalayan Plums - Organic Mountain Plums | Baghari Farm",
    description: "Discover authentic wild Himalayan plums grown in pristine mountain conditions. Naturally sweet, rich in vitamins, perfect for preserves or fresh eating. Limited seasonal availability.",
    keywords: "Himalayan plums, wild plums, organic plums, mountain plums, plum preserves, fresh plums",
    canonical: "https://bagharifarm.com/fruits/wild-plums",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Wild Himalayan Plums",
      "description": "Naturally sweet plums grown in mountain conditions",
      "category": "Organic Fruits",
      "brand": {
        "@type": "Brand",
        "name": "Baghari Farm"
      },
      "offers": {
        "@type": "Offer",
        "price": "220",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }
  }
}

export const BLOG_SEO = {
  farming: {
    title: "Organic Farming in the Himalayas - Sustainable Practices at Baghari Farm",
    description: "Discover our sustainable organic farming practices in the Himalayas. Learn about high-altitude farming, natural pest control, and mountain water irrigation techniques.",
    keywords: "organic farming, Himalayan farming, sustainable agriculture, mountain farming, natural pest control",
    canonical: "https://bagharifarm.com/blog/organic-farming-himalayas",
    publishedTime: "2024-01-15T10:00:00Z",
    modifiedTime: "2024-01-15T10:00:00Z",
    author: "Baghari Farm Team",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Organic Farming in the Himalayas",
      "description": "Sustainable farming practices at Baghari Farm",
      "author": {
        "@type": "Organization",
        "name": "Baghari Farm"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Baghari Farm",
        "logo": {
          "@type": "ImageObject",
          "url": "https://bagharifarm.com/uploads/main-logo.svg"
        }
      },
      "datePublished": "2024-01-15T10:00:00Z",
      "dateModified": "2024-01-15T10:00:00Z"
    }
  }
}

export const SEO_CONFIG = {
  // Default meta tags
  defaultTitle: "Baghari Farm - Premium Organic Fruits from the Himalayas",
  defaultDescription: "Premium organic fruits grown at 2,200m altitude in the Himalayas. Fresh apples, plums, cherries, and more from Baghari Farm.",
  defaultKeywords: "organic fruits, Himalayan farm, fresh fruits, sustainable farming, Baghari Farm",
  
  // Open Graph defaults
  defaultOgImage: "https://bagharifarm.com/uploads/og-default.jpg",
  defaultOgType: "website",
  
  // Twitter defaults
  defaultTwitterCard: "summary_large_image",
  twitterHandle: "@bagharifarm",
  
  // Additional meta tags
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  googlebot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  
  // Performance and security
  themeColor: "#9CAF88",
  colorScheme: "light",
  referrer: "origin-when-cross-origin",
  
  // Verification codes (replace with actual codes)
  googleSiteVerification: "your-google-verification-code",
  bingSiteVerification: "your-bing-verification-code",
  
  // Analytics (replace with actual IDs)
  googleAnalyticsId: "G-XXXXXXXXXX",
  googleTagManagerId: "GTM-XXXXXXX",
  
  // Social media verification
  facebookAppId: "your-facebook-app-id",
  
  // Additional links
  alternateLanguages: [
    { hreflang: "en", href: "https://bagharifarm.com" },
    { hreflang: "hi", href: "https://bagharifarm.com/hi" }
  ],
  
  // Preconnect domains for performance
  preconnectDomains: [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://www.google-analytics.com"
  ]
}
