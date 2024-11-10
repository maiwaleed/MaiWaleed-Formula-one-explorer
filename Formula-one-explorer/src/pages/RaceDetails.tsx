import { Navbar } from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import useRaceDetailsInfo from "../api/raceDetails";
import { DriverDetailsCard } from "../components/Card/DriverDetailsCard";
import { Bar, BarDatum } from "@nivo/bar";

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

interface MappedRaceData extends BarDatum {
  driverName: string;
  laps: number;
}

export const RaceDetails = () => {
  const { seasonId, round } = useParams();
  const { raceDetails, loading } = useRaceDetailsInfo(+seasonId!, +round!);

  const mappedData: {
    driverName: string;
    laps: number;
  }[] = raceDetails?.map((item: RaceData) => ({
    driverName: item.Driver.givenName + " " + item.Driver.familyName,
    laps: +item.laps, // Laps count
  }));

  const data = [
    { driverName: "Johnnie Parsons", laps: 200 },
    { driverName: "Joe James", laps: 210 },
    { driverName: "Bill Schindler", laps: 205 },
  ];

  return (
    <>
      <Navbar />
      <h1 style={{ margin: "0.5rem" }}>Race Details</h1>
      <h2 style={{ margin: "0.5rem", color: "navy" }}>
        {" "}
        Participating Drivers
      </h2>
      {!loading && raceDetails && (
        <DriverDetailsCard raceDetails={raceDetails} />
      )}
      <h2 style={{ margin: "0.5rem", color: "navy" }}>
        Performance Visualization
      </h2>

      <div style={{ height: 300 }}>
        {/* {data.map((datum) => ( */}
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
            }} // axisLeft={}
            // axisBottom={}
          />
        )}
        {/* // ))} */}
      </div>
    </>
  );
};
