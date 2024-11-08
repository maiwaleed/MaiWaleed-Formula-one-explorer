import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getSeasonListing = async (offset: number) => {
  const { data } = await axios.get<any>(
    `https://api.jolpi.ca/ergast/f1/seasons/?offset=${30 * offset}`
  );
  console.log(data);
  console.log(Math.floor(data.MRData.total / data.MRData.limit)); //loop
  return data.MRData.SeasonTable.Seasons;
};

const useSeasonDetailsInfo = (offset: number) => {
  const {
    data: seasonInfo,
    isLoading,
    error,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["getSeasonDetailsInfo", offset],
    queryFn: () => getSeasonListing(offset),
    placeholderData: keepPreviousData,
  });

  return {
    seasonInfo: seasonInfo,
    loading: isLoading,
    error,
    isPlaceholderData,
  };
};

export default useSeasonDetailsInfo;
