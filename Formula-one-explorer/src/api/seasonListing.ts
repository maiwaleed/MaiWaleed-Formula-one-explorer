import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSeasonListingStore } from "../store/seasonListingStore";
import { useEffect } from "react";

let pagesCount: number; //!move to store

export const getSeasonListing = async (offset: number) => {
  const { data } = await axios.get<any>(
    `https://api.jolpi.ca/ergast/f1/seasons/?offset=${30 * offset}` //off+1 ??
  );
  pagesCount = Math.ceil(data.MRData.total / data.MRData.limit);
  return data.MRData.SeasonTable.Seasons;
};

const useSeasonDetailsInfo = (offset: number) => {
  const { setTotalPageCount, currentPage } = useSeasonListingStore();

  const {
    data: seasonInfo,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["getSeasonDetailsInfo", currentPage],
    queryFn: () => getSeasonListing(currentPage - 1 ?? 1),
    staleTime: Infinity,
  });

  useEffect(() => {
    !isLoading && setTotalPageCount(pagesCount);
  }, [isLoading]);
  return {
    seasonInfo: seasonInfo,
    loading: isLoading,
    error,
    refetch,
  };
};

export default useSeasonDetailsInfo;
