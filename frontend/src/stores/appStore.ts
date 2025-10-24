import { create } from 'zustand';

interface AppState {
  productModalOpen: boolean;
  guideDrawerOpen: boolean;
  setProductModalOpen: (open: boolean) => void;
  setGuideDrawerOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  productModalOpen: false,
  guideDrawerOpen: false,
  setProductModalOpen: (open) => set({ productModalOpen: open }),
  setGuideDrawerOpen: (open) => set({ guideDrawerOpen: open }),
}));
