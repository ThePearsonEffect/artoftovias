import { Product, ArtProduct, Apparel, BookProduct } from '../types';

// Art By Tovias Products
export const artProducts: ArtProduct[] = [
  {
    id: 'art-1',
    name: 'Coastal Serenity',
    description: 'Black and white artistic photography capturing three seagulls perched on weathered dock posts, reflecting the peaceful moments found in nature.',
    price: 40.00,
    image: '/lovable-uploads/b128de5d-c357-4f31-9214-88ce2c694cce.png',
    category: 'Photography',
    brand: 'art-by-tovias',
    dimensions: '12x18 inches',
    medium: 'Archival Digital Print',
    isLimitedEdition: true,
    editionSize: 50,
    inStock: true
  },
  {
    id: 'art-2',
    name: 'Golden Hour Dreams',
    description: 'A breathtaking sunset captured in vibrant oranges and yellows, showcasing the dramatic beauty of the golden hour over calm waters.',
    price: 45.00,
    image: '/lovable-uploads/85777cf5-b41d-4502-a6be-ff8567ed996f.png',
    category: 'Photography',
    brand: 'art-by-tovias',
    dimensions: '16x20 inches',
    medium: 'Fine Art Print',
    isLimitedEdition: true,
    editionSize: 25,
    inStock: true
  },
  {
    id: 'art-3',
    name: 'Marina Reflections',
    description: 'Serene harbor scene with golden sunlight reflecting on calm waters, capturing the peaceful atmosphere of coastal living.',
    price: 35.00,
    image: '/lovable-uploads/4142c136-1c9c-4d9d-9a71-3814d2ced39f.png',
    category: 'Photography',
    brand: 'art-by-tovias',
    dimensions: '10x15 inches',
    medium: 'Premium Photo Print',
    isLimitedEdition: false,
    inStock: true
  }
];

// Lanky Bois Products
export const lankyProducts: Apparel[] = [
  {
    id: 'lanky-1',
    name: 'Classic Logo Tee - Golden',
    description: 'Premium cotton t-shirt featuring the iconic Lanky Bois wordcloud design in a striking circular pattern. Perfect for streetwear enthusiasts.',
    price: 28.00,
    image: '/lovable-uploads/1fa02699-c2d1-4707-839b-48fa73f3d66f.png',
    category: 'T-Shirts',
    brand: 'lanky-bois',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Golden Yellow', 'Navy Blue', 'Black', 'White'],
    material: '100% Premium Cotton',
    inStock: true
  },
  {
    id: 'lanky-2',
    name: 'Fist Power Hoodie',
    description: 'Bold statement hoodie featuring the Lanky Bois fist design made from repeated brand typography. Comfortable fit with adjustable hood.',
    price: 48.00,
    image: '/lovable-uploads/bf64eed0-4d3e-4aff-ac32-a29a62ad77b9.png',
    category: 'Hoodies',
    brand: 'lanky-bois',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Forest Green'],
    material: '80% Cotton, 20% Polyester Blend',
    inStock: true
  },
  {
    id: 'lanky-3',
    name: 'Question Mark Tee - Lime',
    description: 'Eye-catching lime green tee with artistic question mark design created from Lanky Bois typography. A conversation starter.',
    price: 26.00,
    image: '/lovable-uploads/e0e514fa-1b81-47b9-9efe-f313194813cc.png',
    category: 'T-Shirts',
    brand: 'lanky-bois',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Lime Green', 'Electric Blue', 'Hot Pink', 'Orange'],
    material: '100% Ring-Spun Cotton',
    inStock: true
  },
  {
    id: 'lanky-4',
    name: 'Essential Logo Tee - Gray',
    description: 'Clean and minimal gray tee featuring the classic Lanky Bois logo with signature orange accent. Perfect for everyday wear.',
    price: 25.00,
    image: '/lovable-uploads/49661417-7e6a-46e0-8d5a-1bc3908670b7.png',
    category: 'T-Shirts',
    brand: 'lanky-bois',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Heather Gray', 'Charcoal', 'Navy', 'Burgundy'],
    material: '50% Cotton, 50% Polyester',
    inStock: true
  },
  {
    id: 'lanky-5',
    name: 'Wisconsin Fist Hoodie',
    description: 'Limited edition hoodie featuring the Wisconsin state outline filled with Lanky Bois typography in blue gradient.',
    price: 52.00,
    image: '/lovable-uploads/0a933243-0516-4246-9350-08456bc84847.png',
    category: 'Hoodies',
    brand: 'lanky-bois',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Heather Gray'],
    material: '80% Cotton, 20% Polyester Fleece',
    inStock: true
  }
];

// Books by The Prolific Penman
export const bookProducts: BookProduct[] = [
  {
    id: 'book-1',
    name: 'An Outward Expression of My Inward Love',
    description: 'A deeply personal collection of poetry and reflections exploring themes of love, self-discovery, and spiritual growth. This book is dedicated to the love of my life; to me her heart was a star that started off in the distance as something that I thought I could never touch. The voyage has matured me in more ways than either of us could have ever foreseen.',
    price: 14.99,
    image: '/lovable-uploads/e32b5efe-1e2b-49ae-b5fc-ef6a46141f8d.png',
    category: 'Poetry',
    brand: 'art-by-tovias',
    author: 'The Prolific Penman',
    pages: 67,
    format: 'digital',
    isbn: '979-8-12345-678-9',
    inStock: true
  },
  {
    id: 'book-2',
    name: 'Real Expression\'s of Words Never Heard',
    description: 'A profound exploration of unspoken truths and hidden emotions. These poems speak from the heart about love, transformation, and the journey of personal growth. A testament to the power of authentic expression and the beauty found in vulnerability.',
    price: 12.99,
    image: '/lovable-uploads/a6e53e50-a8ba-4d1c-80c6-9a87baf143ed.png',
    category: 'Poetry',
    brand: 'art-by-tovias',
    author: 'The Prolific Penman',
    pages: 57,
    format: 'digital',
    isbn: '979-8-12345-679-6',
    inStock: true
  },
  {
    id: 'book-3',
    name: 'THE COVER',
    description: 'Words of devotion, inspiration and encouragement delivered through pain, struggle and experience. A helping hand buried in testimony through relationship with God. It is hope to see the time in the wilderness through to the other side.',
    price: 9.99,
    image: '/lovable-uploads/9b2178d1-6b55-415a-ad18-5980508265f8.png',
    category: 'Spirituality',
    brand: 'art-by-tovias',
    author: 'The Prolific Penman',
    pages: 42,
    format: 'digital',
    isbn: '979-8-12345-680-2',
    inStock: true
  },
  {
    id: 'book-4',
    name: 'The Poet, The Man, The Idea',
    description: 'These poems speak of the love, knowledge, and understanding I have learned while facing the countless storms in my life. All of my mistakes have only helped me to find the path to what is right for me. A journey through struggles that teaches what life is truly about.',
    price: 11.99,
    image: '/lovable-uploads/ab2fe0a2-5ae4-4e60-a611-249e61059c0c.png',
    category: 'Poetry',
    brand: 'art-by-tovias',
    author: 'The Prolific Penman',
    pages: 47,
    format: 'digital',
    isbn: '979-8-12345-681-9',
    inStock: true
  }
];

// Combined products export
export const allProducts: Product[] = [
  ...artProducts,
  ...lankyProducts,
  ...bookProducts
];

export const getProductsByBrand = (brand: string): Product[] => {
  return allProducts.filter(product => product.brand === brand);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};