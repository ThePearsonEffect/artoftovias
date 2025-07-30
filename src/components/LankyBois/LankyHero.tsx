import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BrandButton } from '../ui/brand-button';

export const LankyHero: React.FC = () => {
  return (
    <section className="py-20 px-4 min-h-screen flex items-center bg-gradient-lanky">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              LANKY
              <br />
              BOIS
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
              Bold streetwear for the confident and creative. Typography-driven 
              designs that make statements and start conversations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/lanky-bois/shop">
                <BrandButton variant="lanky" size="xl" className="text-lg px-8">
                  Shop Collection
                </BrandButton>
              </Link>
              
              <BrandButton 
                variant="outline" 
                size="xl" 
                className="text-lg px-8 border-white/30 text-white hover:bg-white/10"
              >
                Our Story
              </BrandButton>
            </div>
          </motion.div>

          {/* Right Content - Featured Product */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative group">
              <img
                src="/lovable-uploads/1fa02699-c2d1-4707-839b-48fa73f3d66f.png"
                alt="Lanky Bois Featured Product"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Product Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl">
                <h3 className="font-bold text-white text-lg mb-2">Classic Logo Tee</h3>
                <p className="text-white/80 text-sm mb-3">Premium cotton with iconic wordcloud design</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-xl">$28.00</span>
                  <BrandButton variant="lanky" size="sm">
                    Add to Cart
                  </BrandButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { title: "Bold Statements", desc: "Designs that speak before you do" },
            { title: "Premium Quality", desc: "Comfort meets durability in every piece" },
            { title: "Creative Expression", desc: "Typography art that tells your story" }
          ].map((value, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl text-white text-center">
              <h3 className="font-bold text-lg mb-2">{value.title}</h3>
              <p className="opacity-80">{value.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};