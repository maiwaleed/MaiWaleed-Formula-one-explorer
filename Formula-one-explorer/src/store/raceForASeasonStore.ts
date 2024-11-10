import { create } from "zustand";

export interface RaceCard {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit?: {
    circuitId?: string;
    url: string;
    circuitName?: string;
    Location: {
      lat: string;
      long: string;
      locality: string;
      country: string;
    };
  };
  date: string;
  time: string;
  pinned?: boolean;
}

type Store = {
  totalPageCount?: number;
  setTotalPageCount: (totalPageCount: number) => void;
  next: () => void;
  prev: () => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  racesList?: RaceCard[];
  setRacesList: (racesList: RaceCard[]) => void;
  togglePinned: (index: number) => void;
  season?: string;
  setSeason: (season: string) => void;
};

export const useRaceForASeasonStore = create<Store>()((set, get) => ({
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
  setRacesList: (racesList) =>
    set((state) => ({
      ...state,
      racesList: racesList,
    })),
  setSeason: (season) =>
    set((state) => ({
      ...state,
      season: season,
    })),
  togglePinned: (index: number) =>
    set((state) => {
      const updatedRaceCards = [...(state.racesList as RaceCard[])];
      updatedRaceCards[index].pinned = !updatedRaceCards[index].pinned;

      // Reorder the raceCards array with pinned cards first
      updatedRaceCards.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1; // a comes first
        if (!a.pinned && b.pinned) return 1; // b comes first
        return 0; // no change
      });
      //local storage
      localStorage.setItem(`${get().season}`, JSON.stringify(updatedRaceCards));

      // Update the state with the new order
      return { racesList: updatedRaceCards };
    }),
}));
