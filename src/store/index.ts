import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppStoreState {
  searchValue: string;
  category: string;
  setSearchValue: (value: string) => void;
  setCategory: (value: string) => void;
}

const useAppStore = create<AppStoreState>()((set) => ({
  searchValue: "",
  category: "all category",
  setSearchValue: (value) => set({ searchValue: value }),
  setCategory: (value) => set({ category: value }),
}));

export { useAppStore };
