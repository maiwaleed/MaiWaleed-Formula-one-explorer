import { useParams } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import useRaceForASeasonInfo from "../api/raceForASeason";
import { Pagination } from "../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { RaceDetailsCard } from "../components/Card/RaceDetailsCard";
import { RaceCard, useRaceForASeasonStore } from "../store/raceForASeasonStore";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

export const RacesForASeason = () => {
  const { seasonId } = useParams();
  const {
    totalPageCount,
    currentPage,
    next,
    setCurrentPage,
    prev,
    setRacesList,
    racesList,
  } = useRaceForASeasonStore();
  const { raceForASeason, loading, refetch, error } = useRaceForASeasonInfo(
    +seasonId!,
    1
  );
  const [isListView, setIsListView] = useState(false);

  useEffect(() => {
    //!
    //place the setter in a useeffect with no dependencies and if condition, in case there is no key in the localstorage with the specific year then set the value in the store
    !loading &&
      !error &&
      setRacesList(
        raceForASeason.map((race: RaceCard) => ({ ...race, pinned: false }))
      );
    //!
  }, [loading]);

  return (
    <>
      <Navbar />
      <h1 style={{ padding: "1rem" }}>Races For A Season</h1>

      {loading && <LoadingPage />}
      {error && <ErrorPage />}
      {!loading && !error && (
        <>
          <div style={{ padding: "1rem" }}>
            <button
              style={{ marginRight: "1rem" }}
              onClick={() => setIsListView(false)}
            >
              Card
            </button>
            <button onClick={() => setIsListView(true)}>List</button>
          </div>
          <RaceDetailsCard
            cardContent={racesList ?? raceForASeason}
            isListView={isListView}
          />
          <Pagination
            currentPage={currentPage}
            next={next}
            totalPageCount={totalPageCount}
            setCurrentPage={setCurrentPage}
            prev={prev}
            refetch={refetch}
          />
        </>
      )}
    </>
  );
};
