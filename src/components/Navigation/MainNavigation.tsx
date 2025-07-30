import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBrandStore } from '../../store/brandStore';
import { useCartStore } from '../../store/cartStore';
import { BrandButton } from '../ui/brand-button';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const MainNavigation: React.FC = () => {
  const { currentBrand } = useBrandStore();
  const { getItemCount } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = getItemCount();

  const getBrandName = (brand: string) => {
    switch (brand) {
      case 'portal': return 'Creative Portal';
      case 'art-by-tovias': return 'Art By Tovias';
      case 'lanky-bois': return 'Lanky Bois';
      case 'tribe-life': return 'Tribe Life';
      default: return 'Creative Portal';
    }
  };

  const getNavLinks = () => {
    switch (currentBrand) {
      case 'portal':
        return [
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' }
        ];
      case 'art-by-tovias':
        return [
          { to: '/art-by-tovias', label: 'Gallery' },
          { to: '/art-by-tovias/books', label: 'Books' },
          { to: '/art-by-tovias/about', label: 'About' }
        ];
      case 'lanky-bois':
        return [
          { to: '/lanky-bois', label: 'Home' },
          { to: '/lanky-bois/shop', label: 'Shop' },
          { to: '/lanky-bois/story', label: 'Story' }
        ];
      case 'tribe-life':
        return [
          { to: '/tribe-life', label: 'Home' },
          { to: '/tribe-life/services', label: 'Services' },
          { to: '/tribe-life/community', label: 'Community' }
        ];
      default:
        return [{ to: '/', label: 'Home' }];
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            to={currentBrand === 'portal' ? '/' : `/${currentBrand}`}
            className="font-display text-xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            {getBrandName(currentBrand)}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {getNavLinks().map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <BrandButton
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => {/* Cart will be implemented */}}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </BrandButton>

            {/* Mobile Menu Button */}
            <BrandButton
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </BrandButton>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 py-4"
          >
            <div className="flex flex-col space-y-4">
              {getNavLinks().map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};