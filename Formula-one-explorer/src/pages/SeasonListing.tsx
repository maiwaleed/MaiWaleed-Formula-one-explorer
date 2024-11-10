import { Navbar } from "../components/Navbar/Navbar";
import useSeasonDetailsInfo from "../api/seasonListing";
import { SeasonCard } from "../components/Card/SeasonCard";
import { Pagination } from "../components/Pagination/Pagination";
import { useSeasonListingStore } from "../store/seasonListingStore";
import { useState } from "react";

export const SeasonListing = () => {
  const { totalPageCount, currentPage, next, setCurrentPage, prev } =
    useSeasonListingStore();
  const { seasonInfo, loading, refetch } = useSeasonDetailsInfo(
    currentPage - 1 ?? 0
  );

  //! show loading state via specific component

  const [isListView, setIsListView] = useState(false);
  return (
    <>
      <Navbar />
      <h1 style={{ padding: "1rem" }}>Season Listing</h1>

      <div>
        <button onClick={() => setIsListView(false)}>Card</button>
        <button onClick={() => setIsListView(true)}>List</button>
      </div>

      {loading && "loading"}
      {!loading && (
        <>
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
