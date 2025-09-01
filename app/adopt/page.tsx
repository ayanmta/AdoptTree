'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Trees, Heart, Mountain, Leaf } from 'lucide-react'
import Image from 'next/image'

export default function AdoptPage() {
  const [selectedTree, setSelectedTree] = useState(0)

  const trees = [
    {
      id: 1,
      name: "Himalayan Apple Tree",
      type: "Malus domestica",
      age: "3-5 years",
      height: "8-12 feet",
      season: "Autumn Harvest",
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Crisp, sweet apples grown at 2,200m altitude. Perfect for fresh eating and traditional recipes.",
      benefits: ["Organic certification", "Mountain-grown", "Traditional variety", "Sustainable farming"],
      care: "Low maintenance, drought-resistant, perfect for Himalayan climate",
      adoptionIncludes: ["Tree certificate", "Monthly updates", "Harvest sharing", "Farm visit invitation"]
    },
    {
      id: 2,
      name: "Wild Plum Tree",
      type: "Prunus domestica",
      age: "4-6 years",
      height: "10-15 feet",
      season: "Late Summer",
      price: "₹1,800",
      image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Wild mountain plums with intense flavor. Used for jams, preserves, and traditional medicine.",
      benefits: ["Wild variety", "Medicinal properties", "High altitude adapted", "Biodiversity support"],
      care: "Natural growth, minimal intervention, supports local ecosystem",
      adoptionIncludes: ["Tree certificate", "Monthly updates", "Harvest sharing", "Farm visit invitation"]
    },
    {
      id: 3,
      name: "Cherry Blossom Tree",
      type: "Prunus serrulata",
      age: "5-7 years",
      height: "12-18 feet",
      season: "Spring Bloom",
      price: "₹3,200",
      image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Stunning pink blossoms that paint the mountains in spring. Symbol of renewal and beauty.",
      benefits: ["Ornamental beauty", "Spring spectacle", "Tourism attraction", "Cultural significance"],
      care: "Seasonal pruning, spring fertilization, protected from harsh winds",
      adoptionIncludes: ["Tree certificate", "Monthly updates", "Harvest sharing", "Farm visit invitation"]
    }
  ]

  const stats = [
    { value: "500+", label: "Trees Adopted", icon: Trees },
    { value: "98%", label: "Survival Rate", icon: Heart },
    { value: "2,200m", label: "Altitude", icon: Mountain },
    { value: "100%", label: "Organic", icon: Leaf }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Adopting an apple tree was the best decision! The monthly updates and harvest sharing make me feel connected to nature.",
      rating: 5,
      tree: "Himalayan Apple"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "The cherry blossoms are absolutely magical. My family loves visiting during spring to see our tree in full bloom.",
      rating: 5,
      tree: "Cherry Blossom"
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      text: "The wild plum tree produces the most delicious fruits. The traditional recipes shared by the farm are amazing!",
      rating: 5,
      tree: "Wild Plum"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Himalayan Mountains"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/40 to-orange-600/50"></div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 z-10"
        >
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
            <Trees className="w-8 h-8 text-orange-400" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 z-10"
        >
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
            <Heart className="w-6 h-6 text-purple-400" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-20 text-center text-white w-full px-4 md:px-6">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Hero Title */}
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                Adopt a Tree
              </h1>
              <p className="font-crimson text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Connect with nature, support sustainable farming, and become part of our Himalayan family
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-12 pt-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl mb-2">
                    <stat.icon className="w-8 h-8 text-orange-400 mx-auto" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Tree Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your Tree
            </h2>
            <p className="font-crimson text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each tree has its own story, personality, and contribution to our Himalayan ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {trees.map((tree, index) => (
              <div key={tree.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-purple-100">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={tree.image}
                    alt={tree.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold mb-1">{tree.name}</h3>
                    <p className="text-white/90 text-sm">{tree.type}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-purple-600 font-bold">{tree.price}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{tree.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tree.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Adopt This Tree
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
