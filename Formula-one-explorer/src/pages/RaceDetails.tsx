import { Navbar } from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import useRaceDetailsInfo from "../api/raceDetails";
import { DriverDetailsCard } from "../components/Card/DriverDetailsCard";
import { Bar } from "@nivo/bar";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

interface RaceData {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: {
    driverId: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
  };
  Constructor: {
    constructorId: string;
    url: string;
    name: string;
    nationality: string;
  };
  grid: string;
  laps: string;
  status: string;
}

export const RaceDetails = () => {
  const { seasonId, round } = useParams();
  const { raceDetails, loading, error } = useRaceDetailsInfo(
    +seasonId!,
    +round!
  );

  const mappedData: {
    driverName: string;
    laps: number;
  }[] = raceDetails?.map((item: RaceData) => ({
    driverName: item.Driver.givenName + " " + item.Driver.familyName,
    laps: +item.laps, // Laps count
  }));

  return (
    <>
      <Navbar />
      <h1 style={{ margin: "0.5rem" }}>Race Details</h1>
      <h2 style={{ margin: "0.5rem", color: "navy" }}>
        {" "}
        Participating Drivers
      </h2>
      {loading && <LoadingPage />}
      {error && <ErrorPage />}
      {!loading && raceDetails && (
        <DriverDetailsCard raceDetails={raceDetails} />
      )}
      {!loading && (
        <>
          <h2 style={{ margin: "0.5rem", color: "navy" }}>
            Performance Visualization
          </h2>

          <div style={{ height: 300 }}>
            {mappedData && (
              <Bar
                key={"driverName"}
                data={mappedData}
                indexBy="driverName"
                keys={["laps"]}
                margin={{ top: 20, right: 30, bottom: 150, left: 60 }}
                padding={0.3}
                isInteractive={true}
                animate={true}
                motionConfig="gentle"
                height={600}
                width={600}
                layout="vertical"
                enableGridY={true}
                enableGridX={true}
                colors={{ scheme: "nivo" }}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 45, // Rotate labels by 45 degrees
                  legend: "Driver Name",
                  legendPosition: "middle",
                  legendOffset: 80,
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Laps",
                  legendPosition: "middle",
                  legendOffset: -40,
                }}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};
