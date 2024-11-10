import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useRaceForASeasonStore } from "../store/raceForASeasonStore";

let pagesCount: number; //!move to store

export const getRaceForASeason = async (seasonId: number, offset: number) => {
  try {
    const { data } = await axios.get<any>(
      `https://api.jolpi.ca/ergast/f1/${seasonId}/races/?offset=${30 * offset}`
    );
    pagesCount = Math.ceil(data.MRData.total / data.MRData.limit);
    return data.MRData.RaceTable.Races;
  } catch (error: any) {
    // Handle network or API errors here
    throw new Error(
      "Failed to fetch races for the season: " +
        (error.message || "Unknown error")
    );
  }
};

const useRaceForASeasonInfo = (seasonId: number, offset: number) => {
  const { setTotalPageCount, currentPage } = useRaceForASeasonStore();

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
