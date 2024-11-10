import { Navbar } from "../components/Navbar/Navbar";
import useSeasonDetailsInfo from "../api/seasonListing";
import { SeasonCard } from "../components/Card/SeasonCard";
import { Pagination } from "../components/Pagination/Pagination";
import { useSeasonListingStore } from "../store/seasonListingStore";
import { useState } from "react";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

export const SeasonListing = () => {
  const { totalPageCount, currentPage, next, setCurrentPage, prev } =
    useSeasonListingStore();
  const { seasonInfo, loading, refetch, error } = useSeasonDetailsInfo(
    currentPage - 1 ?? 0
  );

  const [isListView, setIsListView] = useState(false);
  return (
    <>
      <Navbar />
      <h1 style={{ padding: "1rem" }}>Season Listing</h1>

      {loading && <LoadingPage />}
      {error && <ErrorPage />}
      {!loading && (
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
          <SeasonCard cardContent={seasonInfo} isListView={isListView} />
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
