import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BrandState {
  currentBrand: string;
  setBrand: (brand: string) => void;
  isTransitioning: boolean;
  setTransitioning: (transitioning: boolean) => void;
}

export const useBrandStore = create<BrandState>()(
  persist(
    (set) => ({
      currentBrand: 'portal',
      setBrand: (brand: string) => set({ currentBrand: brand }),
      isTransitioning: false,
      setTransitioning: (transitioning: boolean) => set({ isTransitioning: transitioning }),
    }),
    {
      name: 'brand-storage',
    }
  )
);
