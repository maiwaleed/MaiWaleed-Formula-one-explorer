import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSeasonListingStore } from "../store/seasonListingStore";
import { useEffect } from "react";

let pagesCount: number; //!move to store

export const getRaceForASeason = async (seasonId: number, offset: number) => {
  const { data } = await axios.get<any>(
    `https://api.jolpi.ca/ergast/f1/${seasonId}/races/?offset=${30 * offset}`
  );
  pagesCount = Math.ceil(data.MRData.total / data.MRData.limit);
  return data.MRData.RaceTable.Races;
};

const useRaceForASeasonInfo = (seasonId: number, offset: number) => {
  const { setTotalPageCount, currentPage } = useSeasonListingStore();

  const {
    data: raceForASeason,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["getRaceForASeasonInfo", seasonId, currentPage],
    queryFn: () => getRaceForASeason(seasonId, currentPage - 1 ?? 1),
    staleTime: Infinity,
  });

  useEffect(() => {
    !isLoading && setTotalPageCount(pagesCount);
  }, [isLoading]);
  return {
    raceForASeason: raceForASeason,
    loading: isLoading,
    error,
    refetch,
  };
};

export default useRaceForASeasonInfo;
