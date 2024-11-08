import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import useSeasonDetailsInfo from "../api/seasonListing";
import { Card } from "../components/Card/Card";

export const SeasonListing = () => {
  const { seasonInfo, loading, isPlaceholderData } = useSeasonDetailsInfo(1);
  // create state to switch between list and card view
  //create card component
  //pagination ?? separate component?????
  //zustand store
  //! show loading state via specific component

  console.log(isPlaceholderData);
  const [page, setPage] = useState(1);

  return (
    <>
      <Navbar />
      <h1>SeasonListing</h1>
      <h2>card vs list view</h2>
      {loading && "loading"}
      {!loading && (
        <>
          <Card cardContent={seasonInfo} />{" "}
          <button
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page == 0 ? true : false}
          >
            Prev Page
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page == 5 ? true : false}
          >
            Next Page
          </button>
        </>
      )}
    </>
  );
};
