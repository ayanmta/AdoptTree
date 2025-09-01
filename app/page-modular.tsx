'use client'

import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import Ticker from './components/sections/Ticker'
import About from './components/sections/About'
import Fruits from './components/sections/Fruits'
import AdoptTree from './components/sections/AdoptTree'
import Seasons from './components/sections/Seasons'
import Visit from './components/sections/Visit'
import Footer from './components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <Ticker />
      <About />
      <Fruits />
      <AdoptTree />
      <Seasons />
      <Visit />
      <Footer />
    </main>
  )
}
