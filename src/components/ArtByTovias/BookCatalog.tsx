import React from 'react';
import { motion } from 'framer-motion';
import { BrandButton } from '../ui/brand-button';
import { useCartStore } from '../../store/cartStore';
import { bookProducts } from '../../data/products';
import { BookOpen, Download } from 'lucide-react';

export const BookCatalog: React.FC = () => {
  const { addItem } = useCartStore();

  return (
    <section className="py-20 px-4 bg-background min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Literary Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into profound explorations of love, spirituality, and human connection 
            through the written word. Each book is a journey of self-discovery.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {bookProducts.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="brand-card p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Book Cover */}
                <div className="relative">
                  <img
                    src={book.image}
                    alt={book.name}
                    className="w-full max-w-xs mx-auto rounded-lg shadow-elegant hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Book Details */}
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {book.name}
                  </h2>
                  
                  <p className="text-muted-foreground font-medium mb-4">
                    by {book.author}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {book.description}
                  </p>

                  {/* Book Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <p className="text-muted-foreground">Pages</p>
                      <p className="font-medium">{book.pages}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Format</p>
                      <p className="font-medium">
                        {book.format === 'both' ? 'Physical & Digital' : 
                         book.format === 'physical' ? 'Physical Book' : 'Digital Only'}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Category</p>
                      <p className="font-medium">{book.category}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">ISBN</p>
                      <p className="font-medium text-xs">{book.isbn}</p>
                    </div>
                  </div>

                  {/* Price and Purchase */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-3xl font-bold">${book.price}</p>
                      <p className="text-sm text-muted-foreground">
                        {book.format === 'both' ? 'Physical + Digital' : 
                         book.format === 'physical' ? 'Physical Book' : 'Digital Download'}
                      </p>
                    </div>
                  </div>

                  {/* Purchase Options */}
                  <div className="space-y-3">
                    <BrandButton
                      variant="tovias"
                      className="w-full"
                      onClick={() => addItem(book)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Add to Cart
                    </BrandButton>
                    
                    {book.format !== 'physical' && (
                      <BrandButton
                        variant="outline"
                        className="w-full"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Preview Sample
                      </BrandButton>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Books Coming */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 brand-card"
        >
          <h3 className="font-display text-2xl font-bold mb-4">More Works Coming Soon</h3>
          <p className="text-muted-foreground mb-6">
            Stay tuned for upcoming releases and be the first to know about new literary adventures.
          </p>
          <BrandButton variant="tovias">
            Join Newsletter
          </BrandButton>
        </motion.div>
      </div>
    </section>
  );
};