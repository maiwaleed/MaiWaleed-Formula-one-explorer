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
  const [preExistingKey, setPreExistingKey] = useState(true);
  useEffect(() => {
    setPreExistingKey(Object.keys(localStorage).includes(seasonId as string));
  }, []);

  useEffect(() => {
    if (preExistingKey) {
      const localStorageData = Object.fromEntries(
        Array.from({ length: localStorage.length }, (_, i) => [
          localStorage.key(i),
          JSON.parse(localStorage.getItem(localStorage.key(i)!)!),
        ])
      );

      const findKeyValue = (key: string) =>
        Object.entries(localStorageData).filter((k) => k[0] === key);

      const value = findKeyValue(seasonId as string)[0];

      value && setRacesList(value![1] as RaceCard[]);
    } else {
      if (preExistingKey === false && !loading && !error) {
        setRacesList(
          raceForASeason.map((race: RaceCard) => ({ ...race, pinned: false }))
        );
      }
    }
  }, [loading, preExistingKey]);

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
