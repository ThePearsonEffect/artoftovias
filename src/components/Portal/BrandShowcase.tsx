import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useBrandStore } from '../../store/brandStore';
import { BrandButton } from '../ui/brand-button';
import { Palette, ShoppingBag, Heart } from 'lucide-react';

const brands = [
  {
    id: 'art-by-tovias',
    name: 'Art By Tovias',
    description: 'Fine art photography and literary works that capture the soul of creativity and human expression.',
    icon: Palette,
    route: '/art-by-tovias',
    theme: 'tovias',
    image: '/lovable-uploads/b128de5d-c357-4f31-9214-88ce2c694cce.png',
    features: ['Fine Art Prints', 'Photography', 'Books & Poetry']
  },
  {
    id: 'lanky-bois',
    name: 'Lanky Bois',
    description: 'Bold streetwear that makes a statement. Typography-driven designs for the confident and creative.',
    icon: ShoppingBag,
    route: '/lanky-bois',
    theme: 'lanky',
    image: '/lovable-uploads/1fa02699-c2d1-4707-839b-48fa73f3d66f.png',
    features: ['Streetwear', 'Typography Art', 'Bold Statements']
  },
  {
    id: 'tribe-life',
    name: 'Tribe Life',
    description: 'Transformational coaching and spiritual guidance for those ready to embrace their authentic power.',
    icon: Heart,
    route: '/tribe-life',
    theme: 'tribe',
    image: '/lovable-uploads/85777cf5-b41d-4502-a6be-ff8567ed996f.png',
    features: ['Life Coaching', 'Spiritual Growth', 'Community']
  }
];

export const BrandShowcase: React.FC = () => {
  const navigate = useNavigate();
  const { setBrand, setTransitioning } = useBrandStore();

  const handleBrandSelect = async (brand: typeof brands[0]) => {
    setTransitioning(true);
    setBrand(brand.id);
    
    // Add a slight delay for smooth transition
    setTimeout(() => {
      navigate(brand.route);
      setTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-20 px-4 bg-background/95">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Three Creative Worlds
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each brand represents a unique facet of creative expression, 
            from visual artistry to streetwear culture and transformational growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="brand-card p-8 h-full cursor-pointer"
                     onClick={() => handleBrandSelect(brand)}>
                  
                  {/* Brand Image */}
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Brand Info */}
                  <h3 className="font-display text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                    {brand.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {brand.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {brand.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <BrandButton
                    variant={brand.theme as any}
                    className="w-full group-hover:scale-105 transition-transform"
                  >
                    Explore {brand.name}
                  </BrandButton>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};