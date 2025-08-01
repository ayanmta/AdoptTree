'use client';

import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  category: string;
}

const ProductCard = ({ id, title, description, price, imageUrl, rating, category }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
          {/* Placeholder for Strapi image */}
          <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-400 flex items-center justify-center">
            <span className="text-green-600 font-semibold text-lg">🌱</span>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
            <Heart className="w-4 h-4 text-green-600" />
          </button>
          <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
            <ShoppingCart className="w-4 h-4 text-green-600" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800 text-lg group-hover:text-green-600 transition-colors duration-200">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2">
          {description}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({rating})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${price.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200 hover-lift">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 