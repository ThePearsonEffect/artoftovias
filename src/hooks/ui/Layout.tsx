import React from 'react';
import { Outlet } from 'react-router-dom';
import { useBrandStore } from '../store/brandStore';
import { MainNavigation } from './Navigation/MainNavigation';
import { CartSidebar } from './Cart/CartSidebar';
import { motion, AnimatePresence } from 'framer-motion';

export const Layout: React.FC = () => {
  const { currentBrand, isTransitioning } = useBrandStore();

  return (
    <div className={`min-h-screen theme-${currentBrand}`}>
      <MainNavigation />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={currentBrand}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`transition-all duration-500 ${isTransitioning ? 'blur-sm' : ''}`}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <CartSidebar />
    </div>
  );
};