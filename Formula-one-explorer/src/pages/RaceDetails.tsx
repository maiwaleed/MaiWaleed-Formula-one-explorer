import { Navbar } from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import useRaceDetailsInfo from "../api/raceDetails";
import { DriverDetailsCard } from "../components/Card/DriverDetailsCard";

export const RaceDetails = () => {
  const { seasonId, round } = useParams();
  const { raceDetails, loading } = useRaceDetailsInfo(+seasonId!, +round!);

  return (
    <>
      <Navbar />
      <h1>Race Details</h1>

      <h2>section1: Participating Drivers</h2>

      {!loading && raceDetails && (
        <DriverDetailsCard raceDetails={raceDetails} />
      )}

      <h2>section2: Performance Visualization</h2>
    </>
  );
};
