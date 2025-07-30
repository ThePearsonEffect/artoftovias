import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { BrandButton } from '../ui/brand-button';

interface CartSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen = false, 
  onClose = () => {} 
}) => {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-96 bg-card border-l border-border z-50 shadow-elegant"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="h-5 w-5" />
                  <h2 className="text-lg font-semibold">Cart ({items.length})</h2>
                </div>
                <BrandButton variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-5 w-5" />
                </BrandButton>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="text-center text-muted-foreground py-12">
                    <ShoppingBag className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.product.id}-${item.selectedVariant}`} className="flex items-center space-x-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{item.product.name}</h3>
                          <p className="text-muted-foreground text-xs">${item.product.price.toFixed(2)}</p>
                          {item.selectedVariant && (
                            <p className="text-muted-foreground text-xs">{item.selectedVariant}</p>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                            className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs"
                          >
                            -
                          </button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs"
                          >
                            +
                          </button>
                        </div>
                        <BrandButton
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.product.id)}
                          className="w-8 h-8"
                        >
                          <X className="h-4 w-4" />
                        </BrandButton>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-border p-6 space-y-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="space-y-2">
                    <BrandButton className="w-full" size="lg">
                      Checkout
                    </BrandButton>
                    <BrandButton
                      variant="outline"
                      className="w-full"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </BrandButton>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};