import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrandButton } from '../ui/brand-button';
import { useCartStore } from '../../store/cartStore';
import { lankyProducts } from '../../data/products';
import { ShoppingCart, Heart, Filter } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  const { addItem } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'T-Shirts', 'Hoodies'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? lankyProducts 
    : lankyProducts.filter(product => product.category === selectedCategory);

  return (
    <section className="py-20 px-4 bg-background min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Shop Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover bold streetwear that makes a statement. Every piece is designed 
            with premium materials and typography artistry.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Filter className="w-5 h-5 text-muted-foreground mt-2 mr-2" />
          {categories.map((category) => (
            <BrandButton
              key={category}
              variant={selectedCategory === category ? "lanky" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="min-w-24"
            >
              {category}
            </BrandButton>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="brand-card overflow-hidden">
                {/* Product Image */}
                <div className="relative overflow-hidden bg-lanky-secondary/10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => addItem(product)}
                        className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  {/* Material & Sizes */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.material}</p>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.slice(0, 4).map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {size}
                        </span>
                      ))}
                      {product.sizes.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                          +{product.sizes.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-muted-foreground">
                      {product.colors.length} colors
                    </span>
                  </div>

                  <BrandButton
                    variant="lanky"
                    className="w-full font-bold"
                    onClick={() => addItem(product)}
                  >
                    Add to Cart
                  </BrandButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              No products found in the {selectedCategory} category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};