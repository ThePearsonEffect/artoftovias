import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBrandStore } from '../../store/brandStore';
import { TribeHero } from '../../components/TribeLife/TribeHero';

export const TribeLifeHome: React.FC = () => {
  const { setBrand } = useBrandStore();

  useEffect(() => {
    setBrand('tribe-life');
  }, [setBrand]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-16"
    >
      <TribeHero />
    </motion.div>
  );
};