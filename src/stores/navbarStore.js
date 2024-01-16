import { create } from "zustand";

export const useNavbarStore = create((set) => ({
  navbarStatus: false,
  changeNavbarStatus: (status) => set((state) => ({ navbarStatus: status })),
}));
