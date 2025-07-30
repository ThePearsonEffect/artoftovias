import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useBrandStore } from '../store/brandStore';
import { PortalHero } from '../components/Portal/PortalHero';
import { BrandShowcase } from '../components/Portal/BrandShowcase';
import { AboutSection } from '../components/Portal/AboutSection';

const Index = () => {
  const { setBrand } = useBrandStore();

  useEffect(() => {
    setBrand('portal');
  }, [setBrand]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen"
    >
      <PortalHero />
      <BrandShowcase />
      <AboutSection />
    </motion.div>
  );
};

export default Index;
