import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBrandStore } from '../../store/brandStore';
import { ProductGrid } from '../../components/LankyBois/ProductGrid';

export const LankyBoisShop: React.FC = () => {
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
      <ProductGrid />
    </motion.div>
  );
};