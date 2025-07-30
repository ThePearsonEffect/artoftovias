import React from 'react';
import { motion } from 'framer-motion';

export const ArtistStatement: React.FC = () => {
  return (
    <section className="py-20 px-4 min-h-screen flex items-center bg-gradient-tovias">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8">
            Art By Tovias
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed mb-12 opacity-90">
            Where photography meets poetry, where moments become memories, 
            and where the soul of creativity finds its visual voice through 
            the lens of artistic vision.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="glass-panel p-6 rounded-xl"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Visual Storytelling</h3>
              <p className="opacity-90 leading-relaxed">
                Each photograph captures more than a moment—it preserves emotion, 
                tells stories, and invites viewers into intimate conversations 
                with beauty, nature, and the human experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="glass-panel p-6 rounded-xl"
            >
              <h3 className="font-display text-2xl font-semibold mb-4">Literary Expression</h3>
              <p className="opacity-90 leading-relaxed">
                Through written word and published works, Art By Tovias explores 
                the depths of human emotion, spiritual growth, and the profound 
                connections that bind us all together.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};