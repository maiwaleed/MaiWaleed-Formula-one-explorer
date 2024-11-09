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
    const totalPageCount: number = get().totalPageCount ?? 1;
    const currentPage: number = get().currentPage ?? 1;
    const nextPage =
      currentPage == totalPageCount ? totalPageCount : currentPage + 1;
    set(() => ({
      currentPage: nextPage,
    }));
  },
  prev: () => {
    const currentPage = get().currentPage ?? 1;
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
