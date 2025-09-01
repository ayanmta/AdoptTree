'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TECH_RESEARCH_SECTION } from '@/app/lib/constants/content'

export default function TechResearch() {
  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-charcoal mb-4 font-sans">
            Farm Stories & Insights
          </h2>
          <p className="text-lg text-charcoal/70 font-light max-w-2xl mx-auto leading-relaxed font-sans">
            Personal farming experiences, seasonal updates, and insights from our Himalayan orchard
          </p>
        </motion.div>

        {/* Featured Blog Post - Magazine Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-20"
        >
          <article className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Left Half - Image */}
            <div className="relative h-96 lg:h-full overflow-hidden">
              <Image
                src={TECH_RESEARCH_SECTION.featuredArticle.image}
                alt={TECH_RESEARCH_SECTION.featuredArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Right Half - Content */}
            <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="px-3 py-1 bg-sage/20 text-sage text-sm font-medium rounded-full border border-sage/30">
                  {TECH_RESEARCH_SECTION.featuredArticle.category}
                </span>
                <span className="ml-4 text-sm text-charcoal/50 font-light">
                  {TECH_RESEARCH_SECTION.featuredArticle.readTime}
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-light text-charcoal mb-6 font-sans leading-tight">
                {TECH_RESEARCH_SECTION.featuredArticle.title}
              </h3>
              
              <p className="text-base text-charcoal/80 font-light leading-relaxed mb-6 font-sans">
                {TECH_RESEARCH_SECTION.featuredArticle.excerpt}
              </p>
              
              <p className="text-sm text-charcoal/70 font-light leading-relaxed mb-8 font-sans">
                Every season brings new challenges and discoveries in our mountain orchard. 
                From the first blossoms of spring to the golden harvest of autumn, 
                we're constantly learning and adapting our farming practices.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-sage text-white font-medium text-sm tracking-wide hover:bg-sage-dark transition-colors duration-300 rounded-lg self-start"
              >
                Read Full Story →
              </motion.button>
            </div>
          </article>
        </motion.div>

        {/* Recent Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light text-charcoal mb-8 font-sans text-center">
            Recent Stories
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {TECH_RESEARCH_SECTION.recentArticles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 mb-4 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-sage/20 text-sage text-xs font-medium rounded-full border border-sage/30">
                    {article.category}
                  </span>
                  <span className="text-xs text-charcoal/50 font-light">
                    {article.readTime}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-charcoal mb-2 font-sans group-hover:text-sage transition-colors duration-300">
                  {article.title}
                </h4>
                
                <p className="text-sm text-charcoal/70 font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Farm Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-sage/5 border border-sage/20 p-8 rounded-lg">
            <h3 className="text-2xl font-light text-charcoal mb-8 font-sans text-center">
              Farm Highlights
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-medium text-sage mb-2">15+</div>
                <div className="text-sm text-charcoal/70 font-light">Years of Farming</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-sage mb-2">8</div>
                <div className="text-sm text-charcoal/70 font-light">Fruit Varieties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-medium text-sage mb-2">100%</div>
                <div className="text-sm text-charcoal/70 font-light">Organic Methods</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-charcoal mb-3 font-sans">
              Stay Connected
            </h3>
            <p className="text-charcoal/70 font-light mb-6 font-sans text-sm">
              Get seasonal updates, farming tips, and stories from our Himalayan orchard.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-charcoal text-white font-medium text-sm tracking-wide hover:bg-sage transition-colors duration-300 rounded-lg"
            >
              Explore All Stories
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
