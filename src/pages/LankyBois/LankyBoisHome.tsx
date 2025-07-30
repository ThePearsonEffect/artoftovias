import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBrandStore } from '../../store/brandStore';
import { LankyHero } from '../../components/LankyBois/LankyHero';
import { BrandStory } from '../../components/LankyBois/BrandStory';

export const LankyBoisHome: React.FC = () => {
  const { setBrand } = useBrandStore();

  useEffect(() => {
    setBrand('lanky-bois');
  }, [setBrand]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-16"
    >
      <LankyHero />
      <BrandStory />
    </motion.div>
  );
};