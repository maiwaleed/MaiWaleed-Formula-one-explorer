import { useQuery } from "@tanstack/react-query";
import axios from "axios";

let pagesCount: number; //!move to store

export const getRaceDetails = async (seasonId: number, round: number) => {
  //?offset=${30 * offset }
  const { data } = await axios.get<any>(
    `http://ergast.com/api/f1/${seasonId}/${round}/results.json`
  );
  pagesCount = Math.ceil(data.MRData.total / data.MRData.limit);
  return data.MRData.RaceTable.Races[0].Results;
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
