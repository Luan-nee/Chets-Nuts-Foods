import { create } from "zustand";

interface AppState {
  productModalOpen: boolean;
  guideDrawerOpen: boolean;

  setProductModalOpen: (open: boolean) => void;
  setGuideDrawerOpen: (open: boolean) => void;

  productFormViewOpen: boolean;
  setProductFormViewOpen: (open: boolean) => void;

  productFormUpdateOpen: boolean;
  setProductFormUpdateOpen: (open: boolean) => void;

  productFormDeleteOpen: boolean;
  setProductFormDeleteOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  productModalOpen: false,
  guideDrawerOpen: false,
  setProductModalOpen: (open) => set({ productModalOpen: open }),
  setGuideDrawerOpen: (open) => set({ guideDrawerOpen: open }),

  productFormViewOpen: false,
  setProductFormViewOpen: (open) => set({ productFormViewOpen: open }),

  productFormUpdateOpen: false,
  setProductFormUpdateOpen: (open) => set({ productFormUpdateOpen: open }),

  productFormDeleteOpen: false,
  setProductFormDeleteOpen: (open) => set({ productFormDeleteOpen: open }),
}));
