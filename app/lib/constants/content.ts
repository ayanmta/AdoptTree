// Content constants for Baghari Farm website
// This file will be replaced with CMS data in the future

export const SITE_CONFIG = {
  name: "Baghari Farm",
  tagline: "Himalayan Paradise",
  description: "Premium organic fruits from the heart of Himalayas",
  location: "Baghari Village, Himalayas",
  waterSource: "Kathi Gadh",
  altitude: "2,200m",
  phone: "+91 98765 43210",
  email: "info@bagharifarm.com",
  address: "Baghari Village, Himalayan Region, India"
}

// Feature flags
export const FEATURE_FLAGS = {
  SHOW_VISIT_SECTION: false,
  SHOW_TECH_RESEARCH: true,
  SHOW_SEASONS_SECTION: false
}

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home', icon: 'Mountain', authRequired: false },
  { name: 'About', href: '#about', icon: 'Leaf', authRequired: false },
  { name: 'Fruits', href: '#fruits', icon: 'Heart', authRequired: false },
  { name: 'Adopt', href: '/adopt', icon: 'Leaf', authRequired: true },
  { name: 'Contact', href: '#contact', icon: 'Phone', authRequired: false }
]

export const HERO_SECTION = {
  title: "Himalayan",
  subtitle: "Organic Fruits",
  description: "Grown at 2,200m altitude in pristine mountain air",
  cta: {
    primary: "Explore Fruits",
    secondary: "Visit Farm"
  },
  stats: [
    { value: "2,200m", label: "Altitude" },
    { value: "100%", label: "Organic" },
    { value: "15+", label: "Varieties" }
  ],
  video: {
    src: "/uploads/hero-video.mp4",
    poster: "/uploads/hero-poster.jpg"
  }
}

export const HIMALAYAN_BEAUTY_TICKER = {
  title: "Mountain Majesty",
  images: [
    {
      src: "/uploads/ticker1.PNG",
      title: "Mountain Orchard",
      desc: "Apple trees in bloom"
    },
    {
      src: "/uploads/ticker2.PNG",
      title: "Summer Harvest",
      desc: "Fresh mountain fruits"
    },
    {
      src: "/uploads/ticker3.PNG",
      title: "Autumn Colors",
      desc: "Golden harvest season"
    },
    {
      src: "/uploads/ticker4.PNG",
      title: "Winter Majesty",
      desc: "Snow-capped peaks"
    },
    {
      src: "/uploads/ticker5.PNG",
      title: "Himalayan Vista",
      desc: "Breathtaking mountain views"
    },
    {
      src: "/uploads/ticker6.PNG",
      title: "Organic Paradise",
      desc: "Pure natural beauty"
    },
    {
      src: "/uploads/ticker7.png",
      title: "Mountain Life",
      desc: "Authentic Himalayan experience"
    },
    {
      src: "/uploads/ticker8.PNG",
      title: "Nature's Bounty",
      desc: "Rich harvest from the mountains"
    }
  ]
}

export const ABOUT_SECTION = {
  title: "A Legacy in the Mountains",
  description: "A family farm in the heart of the Himalayas, growing premium organic fruits at high altitude",
  features: [
    {
      title: "High Altitude",
      description: "Fruits grown at 2,200m for exceptional flavor",
      icon: "🏔️",
      image: "/uploads/ticker4.PNG"
    },
    {
      title: "Pure Water",
      description: "Irrigated by Kathi Gadh mountain streams",
      icon: "💧",
      image: "/uploads/ticker5.PNG"
    },
    {
      title: "Organic",
      description: "100% natural, pesticide-free farming",
      icon: "🌱",
      image: "/uploads/ticker6.PNG"
    }
  ]
}

export const FRUITS_SECTION = {
  title: "Nature's Finest Harvest",
  description: "Premium organic fruits grown in pristine mountain conditions",
  authRequired: false,
  products: [
    {
      id: 1,
      name: "Himalayan Apples",
      description: "Crisp and sweet, grown at high altitude",
      price: 180,
      image: "/uploads/ticker1.PNG",
      features: ["High altitude", "Organic", "Sweet & Crisp"],
      stats: { altitude: "2,200m", harvest: "Oct-Nov", shelfLife: "2 weeks" }
    },
    {
      id: 2,
      name: "Mountain Plums",
      description: "Juicy wild plums with rich flavor",
      price: 220,
      image: "/uploads/ticker2.PNG",
      features: ["Wild variety", "Rich flavor", "Limited season"],
      stats: { altitude: "2,100m", harvest: "Aug-Sep", shelfLife: "1 week" }
    },
    {
      id: 3,
      name: "Cherry Blossoms",
      description: "Delicate cherries from mountain orchards",
      price: 280,
      image: "/uploads/ticker3.PNG",
      features: ["Early season", "Delicate", "Sweet"],
      stats: { altitude: "2,000m", harvest: "May-Jun", shelfLife: "3 days" }
    },
    {
      id: 4,
      name: "Golden Apricots",
      description: "Sun-kissed apricots from mountain slopes",
      price: 240,
      image: "/uploads/ticker4.PNG",
      features: ["Sun-dried", "Golden", "Nutritious"],
      stats: { altitude: "2,150m", harvest: "Jul-Aug", shelfLife: "1 week" }
    }
  ]
}

export const ADOPT_TREE_SECTION = {
  title: "Own Your Mountain Legacy",
  description: "Own your own fruit tree in the Himalayas and receive regular harvests",
  authRequired: true,
  benefits: [
    {
      text: "Your Legacy Tree",
      image: "/uploads/ticker5.PNG"
    },
    {
      text: "Monthly Updates",
      image: "/uploads/ticker6.PNG"
    },
    {
      text: "Fresh Harvests",
      image: "/uploads/ticker7.png"
    },
    {
      text: "Farm Experience",
      image: "/uploads/ticker8.PNG"
    }
  ],
  cta: "Adopt Now",
  ctaText: "Adopt Now",
  ctaHref: "/adopt",
  tickerImages: [
    {
      src: "/uploads/ticker1.PNG",
      title: "Apple Tree",
      desc: "Sweet Himalayan apples"
    },
    {
      src: "/uploads/ticker2.PNG",
      title: "Plum Tree",
      desc: "Wild mountain plums"
    },
    {
      src: "/uploads/ticker3.PNG",
      title: "Cherry Tree",
      desc: "Delicate cherry blossoms"
    }
  ]
}

export const SEASONS_SECTION = {
  title: "Seasons of the Himalayas",
  description: "Experience the changing beauty of our mountain farm",
  images: [
    {
      src: "/uploads/ticker4.PNG",
      title: "Spring",
      description: "Cherry blossoms bloom",
      season: "Spring",
      altitude: "2,100m",
      temperature: "15-25°C"
    },
    {
      src: "/uploads/ticker5.PNG",
      title: "Summer",
      description: "Lush green orchards",
      season: "Summer",
      altitude: "2,000m",
      temperature: "20-30°C"
    },
    {
      src: "/uploads/ticker6.PNG",
      title: "Autumn",
      description: "Golden harvest time",
      season: "Autumn",
      altitude: "2,150m"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Winter",
      description: "Snow-capped beauty",
      season: "Winter",
      altitude: "2,200m"
    }
  ]
}

export const VISIT_SECTION = {
  title: "Experience the Mountains",
  description: "Experience the magic of Himalayan farming firsthand",
  experienceCards: [
    {
      title: "Farm Tour",
      description: "Guided tour of our mountain orchards",
      icon: "🌿",
      image: "/uploads/ticker7.png",
      features: ["2-hour guided tour", "Fruit tasting", "Mountain views", "Photo opportunities"]
    },
    {
      title: "Harvest Experience",
      description: "Pick your own fruits from our trees",
      icon: "🍎",
      image: "/uploads/ticker8.PNG",
      features: ["Hands-on harvesting", "Fresh fruit picking", "Traditional methods", "Take home fruits"]
    },
    {
      title: "Mountain Adventure",
      description: "Explore the surrounding Himalayan beauty",
      icon: "🏔️",
      image: "/uploads/ticker1.PNG",
      features: ["Nature walks", "Waterfall visits", "Wildlife spotting", "Mountain photography"]
    }
  ],
  contactInfo: {
    phone: "+91 98765 43210",
    email: "visit@bagharifarm.com",
    address: "Baghari Village, Himalayan Region",
    hours: "Daily 8 AM - 6 PM",
    booking: "Book your visit",
    bestTime: "March to November"
  }
}

export const FOOTER_CONTENT = {
  brand: {
    name: "Baghari Farm",
    tagline: "Himalayan Paradise",
    description: "Premium organic fruits from the heart of Himalayas"
  },
  quickLinks: [
    { name: "About Us", href: "#about" },
    { name: "Our Fruits", href: "#fruits" },
    { name: "Tree Adoption", href: "/adopt" },
    { name: "Visit Farm", href: "#contact" }
  ],
  contact: {
    phone: "+91 98765 43210",
    email: "info@bagharifarm.com",
    address: "Baghari Village, Himalayan Region, India"
  },
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/bagharifarm",
      icon: "📘"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/bagharifarm",
      icon: "📷"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/bagharifarm",
      icon: "🐦"
    },
    {
      name: "Map",
      href: "https://maps.google.com/?q=Baghari+Village+Himalayan+Region",
      icon: "🗺️"
    }
  ],
  madeWith: "Made with ❤️ in the Himalayas"
}

export const ADOPT_PAGE_CONTENT = {
  title: "Your Mountain Legacy",
  subtitle: "Own a piece of Himalayan paradise",
  description: "Choose your fruit tree and receive regular harvests from our mountain farm",
  trees: [
    {
      id: 1,
      name: "Apple Tree",
      price: 2500,
      description: "Sweet Himalayan apples grown at high altitude",
      features: ["Annual harvest", "Monthly updates", "Farm visit", "Your name on tree"],
      image: "/uploads/ticker1.PNG"
    },
    {
      id: 2,
      name: "Plum Tree",
      price: 2200,
      description: "Wild mountain plums with rich flavor",
      features: ["Seasonal harvest", "Photo updates", "Farm visit", "Your name on tree"],
      image: "/uploads/ticker2.PNG"
    },
    {
      id: 3,
                 
      name: "Cherry Tree",
      price: 2800,
      description: "Delicate cherries from mountain orchards",
      features: ["Early harvest", "Regular updates", "Farm visit", "Your name on tree"],
      image: "/uploads/ticker3.PNG"
    }
  ]
}

export const TECH_RESEARCH_SECTION = {
  title: "Farm Stories & Insights",
  subtitle: "From the Heart of the Himalayas",
  description: "Personal farming experiences, seasonal updates, and insights from our Himalayan orchard",
  authRequired: true,
  featuredArticle: {
    title: "The Science of High-Altitude Fruit Cultivation",
    excerpt: "Our latest research on optimizing fruit production at 2,200m altitude reveals fascinating insights into climate adaptation and yield optimization.",
    readTime: "8 min read",
    category: "Research",
    image: "/uploads/ticker4.PNG",
    link: "/blog/high-altitude-cultivation"
  },
  recentArticles: [
    {
      title: "Organic Pest Management: A Data-Driven Approach",
      excerpt: "How we're using AI and traditional wisdom to protect our orchards naturally.",
      readTime: "5 min read",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/blog/organic-pest-management"
    },
    {
      title: "Soil Health Monitoring: The Foundation of Quality",
      excerpt: "Real-time soil analysis and its impact on fruit quality and sustainability.",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/blog/soil-health-monitoring"
    },
    {
      title: "Climate Change Adaptation Strategies",
      excerpt: "How Himalayan farmers are adapting to changing weather patterns.",
      readTime: "7 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/blog/climate-adaptation"
    }
  ],
  cta: {
    text: "Explore All Research",
    link: "/blog"
  }
}
