import { useQuery } from "@tanstack/react-query";
import axios from "axios";

let pagesCount: number; //!move to store

export const getRaceDetails = async (seasonId: number, round: number) => {
  try {
    const { data } = await axios.get<any>(
      `http://ergast.com/api/f1/${seasonId}/${round}/results.json`
    );
    pagesCount = Math.ceil(data.MRData.total / data.MRData.limit);
    return data.MRData.RaceTable.Races[0].Results;
  } catch (error: any) {
    // Handle network or API errors here
    throw new Error(
      "Failed to fetch race results: " + (error.message || "Unknown error")
    );
  }
};

const useRaceDetailsInfo = (seasonId: number, round: number) => {
  const {
    data: raceDetails,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["getRaceDetails", seasonId, round],
    queryFn: () => getRaceDetails(seasonId, round),
    staleTime: Infinity,
  });

  return {
    raceDetails: raceDetails,
    loading: isLoading,
    error,
    refetch,
  };
};

export default useRaceDetailsInfo;
