import React from 'react';
import { motion } from 'framer-motion';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            The Lanky Story
          </h2>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-xl leading-relaxed mb-6">
              Born from the intersection of typography, street culture, and creative rebellion, 
              Lanky Bois represents more than just clothing—it's a movement of authentic expression.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Every design tells a story through the power of words, creating visual narratives 
              that resonate with those who dare to stand out, speak up, and express their 
              unique perspective on the world.
            </p>

            <p className="text-lg leading-relaxed">
              From concept to creation, each piece is crafted with intention, designed for 
              the creative souls who understand that fashion is a form of communication, 
              and every garment is a canvas for self-expression.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};