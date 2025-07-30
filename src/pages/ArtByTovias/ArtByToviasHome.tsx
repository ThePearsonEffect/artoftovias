import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBrandStore } from '../../store/brandStore';
import { ArtGallery } from '../../components/ArtByTovias/ArtGallery';
import { ArtistStatement } from '../../components/ArtByTovias/ArtistStatement';

export const ArtByToviasHome: React.FC = () => {
  const { setBrand } = useBrandStore();

  useEffect(() => {
    setBrand('art-by-tovias');
  }, [setBrand]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-16"
    >
      <ArtistStatement />
      <ArtGallery />
    </motion.div>
  );
};