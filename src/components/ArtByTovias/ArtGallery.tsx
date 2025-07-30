import React from 'react';
import { motion } from 'framer-motion';
import { BrandButton } from '../ui/brand-button';
import { useCartStore } from '../../store/cartStore';
import { artProducts } from '../../data/products';
import { ShoppingCart, Heart } from 'lucide-react';

export const ArtGallery: React.FC = () => {
  const { addItem } = useCartStore();

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Fine Art Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover captivating photography that speaks to the soul. 
            Each piece is carefully printed on archival materials for lasting beauty.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artProducts.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="brand-card overflow-hidden">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => addItem(artwork)}
                        className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Limited Edition Badge */}
                  {artwork.isLimitedEdition && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Limited Edition
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{artwork.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{artwork.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">{artwork.dimensions}</p>
                      <p className="text-xs text-muted-foreground">{artwork.medium}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">${artwork.price.toFixed(2)}</p>
                      {artwork.isLimitedEdition && (
                        <p className="text-xs text-muted-foreground">
                          {artwork.editionSize} available
                        </p>
                      )}
                    </div>
                  </div>

                  <BrandButton
                    variant="tovias"
                    className="w-full"
                    onClick={() => addItem(artwork)}
                  >
                    Add to Cart
                  </BrandButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};