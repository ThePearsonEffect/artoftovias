export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: 'lanky-bois' | 'art-by-tovias' | 'tribe-life';
  variants?: ProductVariant[];
  inStock: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  price?: number;
  options: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  theme: string;
  primaryColor: string;
  logo?: string;
}

export interface BookProduct extends Product {
  author: string;
  pages?: number;
  format: 'physical' | 'digital' | 'both';
  isbn?: string;
}

export interface ArtProduct extends Product {
  dimensions: string;
  medium: string;
  isLimitedEdition: boolean;
  editionSize?: number;
}

export interface Apparel extends Product {
  sizes: string[];
  colors: string[];
  material: string;
}