import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBrandStore } from '../../store/brandStore';
import { BookCatalog } from '../../components/ArtByTovias/BookCatalog';

export const ArtByToviasBooks: React.FC = () => {
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
      <BookCatalog />
    </motion.div>
  );
};