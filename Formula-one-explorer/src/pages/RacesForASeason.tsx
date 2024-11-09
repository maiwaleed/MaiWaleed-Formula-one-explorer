import { useParams } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import useRaceForASeasonInfo from "../api/raceForASeason";
import { Pagination } from "../components/Pagination/Pagination";
import { useState } from "react";
import { RaceDetailsCard } from "../components/Card/raceDetailsCard";

export const RacesForASeason = () => {
  const { seasonId } = useParams();
  const { raceForASeason, loading } = useRaceForASeasonInfo(+seasonId!, 1);
  const [isListView, setIsListView] = useState(false);

  console.log(raceForASeason);
  //!pin races and show them first in the list
  return (
    <>
      <Navbar />
      <h1 style={{ padding: "1rem" }}>RacesForASeason</h1>
      <div>
        <button onClick={() => setIsListView(false)}>Card</button>
        <button onClick={() => setIsListView(true)}>List</button>
      </div>

      {loading && "loading"}
      {!loading && (
        <>
          <RaceDetailsCard
            cardContent={raceForASeason}
            isListView={isListView}
          />
          <Pagination />
        </>
      )}
    </>
  );
};
