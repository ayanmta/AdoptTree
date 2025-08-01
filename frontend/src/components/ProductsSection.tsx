'use client';

import { useQuery, gql } from '@apollo/client';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

// GraphQL query for products (will be used when Strapi is connected)
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      data {
        id
        attributes {
          title
          description
          price
          rating
          category
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

// Mock data for now (will be replaced with Strapi data)
const mockProducts = [
  {
    id: '1',
    title: 'Organic Tomatoes',
    description: 'Fresh, ripe organic tomatoes grown with care in our sustainable farm.',
    price: 4.99,
    imageUrl: '/images/tomatoes.jpg',
    rating: 5,
    category: 'Vegetables'
  },
  {
    id: '2',
    title: 'Fresh Basil',
    description: 'Aromatic basil leaves perfect for your culinary creations.',
    price: 3.49,
    imageUrl: '/images/basil.jpg',
    rating: 4,
    category: 'Herbs'
  },
  {
    id: '3',
    title: 'Organic Carrots',
    description: 'Sweet and crunchy organic carrots, rich in nutrients.',
    price: 2.99,
    imageUrl: '/images/carrots.jpg',
    rating: 5,
    category: 'Vegetables'
  },
  {
    id: '4',
    title: 'Fresh Strawberries',
    description: 'Juicy, sweet strawberries picked at peak ripeness.',
    price: 6.99,
    imageUrl: '/images/strawberries.jpg',
    rating: 5,
    category: 'Fruits'
  },
  {
    id: '5',
    title: 'Organic Kale',
    description: 'Nutrient-rich kale, perfect for healthy smoothies and salads.',
    price: 3.99,
    imageUrl: '/images/kale.jpg',
    rating: 4,
    category: 'Vegetables'
  },
  {
    id: '6',
    title: 'Fresh Mint',
    description: 'Refreshing mint leaves for teas and cocktails.',
    price: 2.49,
    imageUrl: '/images/mint.jpg',
    rating: 4,
    category: 'Herbs'
  }
];

const ProductsSection = () => {
  // Uncomment when Strapi is connected
  // const { loading, error, data } = useQuery(GET_PRODUCTS);
  
  // For now, use mock data
  const loading = false;
  const error = null;
  const products = mockProducts;

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-red-600">Error loading products. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Fresh from Our Farm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our selection of organic, sustainably grown produce, 
            carefully harvested and delivered to your table.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 hover-lift">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection; 