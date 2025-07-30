import React from 'react';
import { motion } from 'framer-motion';
import { BrandButton } from '../ui/brand-button';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 gradient-text">
            The Vision Behind the Brands
          </h2>
          
          <div className="prose prose-lg mx-auto text-muted-foreground mb-12">
            <p className="text-xl leading-relaxed mb-6">
              This creative multiverse represents the convergence of artistic passion, 
              entrepreneurial spirit, and transformational wisdom. Each brand tells a 
              unique story while contributing to a larger narrative of authentic expression.
            </p>
            
            <p className="text-lg leading-relaxed">
              From capturing the ethereal beauty of nature through photography to 
              creating bold statements in streetwear, from writing poetry that touches 
              the soul to guiding others on their journey of self-discovery — this is 
              where creativity meets purpose.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BrandButton variant="portal" size="lg">
              Newsletter Signup
            </BrandButton>
            <BrandButton variant="outline" size="lg">
              Contact & Collaborate
            </BrandButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};