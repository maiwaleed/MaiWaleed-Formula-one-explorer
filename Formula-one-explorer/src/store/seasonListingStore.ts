import { create } from "zustand";

type Store = {
  totalPageCount?: number;
  setTotalPageCount: (totalPageCount: number) => void;
  next: () => void;
  prev: () => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

export const useSeasonListingStore = create<Store>()((set, get) => ({
  setTotalPageCount: (totalPageCount) =>
    set(() => ({ totalPageCount: totalPageCount })),
  next: () => {
    const totalPageCount: number = 3; // get().totalPageCount;
    const currentPage: number = 1; // get().currentPage;
    const nextPage =
      currentPage == totalPageCount ? totalPageCount : currentPage + 1;
    set(() => ({
      currentPage: nextPage,
    }));
  },
  prev: () => {
    const currentPage = 1; // get().currentPage;
    const prevPage = currentPage == 1 ? 1 : currentPage - 1;
    set((state) => ({
      ...state,
      currentPage: prevPage,
    }));
  },
  currentPage: 1,
  setCurrentPage: (currentPage) =>
    set((state) => ({
      ...state,
      currentPage: currentPage,
    })),
}));
