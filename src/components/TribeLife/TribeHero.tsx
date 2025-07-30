import React from 'react';
import { motion } from 'framer-motion';
import { BrandButton } from '../ui/brand-button';

export const TribeHero: React.FC = () => {
  return (
    <section className="py-20 px-4 min-h-screen flex items-center bg-gradient-tribe">
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
              TRIBE
              <br />
              LIFE
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
              Transformational coaching and spiritual guidance for souls ready 
              to embrace their authentic power and live their highest truth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <BrandButton variant="tribe" size="xl" className="text-lg px-8">
                Book Session
              </BrandButton>
              
              <BrandButton 
                variant="outline" 
                size="xl" 
                className="text-lg px-8 border-white/30 text-white hover:bg-white/10"
              >
                Join Community
              </BrandButton>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/lovable-uploads/85777cf5-b41d-4502-a6be-ff8567ed996f.png"
                alt="Spiritual Journey"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-panel p-4 rounded-xl">
                <p className="text-white font-semibold">✨ Transform</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-panel p-4 rounded-xl">
                <p className="text-white font-semibold">🌟 Evolve</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { title: "1-on-1 Coaching", desc: "Personalized guidance for your unique journey" },
            { title: "Group Sessions", desc: "Collective healing and shared wisdom" },
            { title: "Spiritual Mentorship", desc: "Deep dive into your soul's purpose" }
          ].map((service, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl text-white text-center">
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="opacity-80">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};