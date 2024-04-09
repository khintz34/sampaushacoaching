import { create } from "zustand";

export const useNavbarStore = create((set) => ({
  isNavbarOpen: false,
  setIsNavbarOpen: (status) => set((state) => ({ isNavbarOpen: status })),
}));
