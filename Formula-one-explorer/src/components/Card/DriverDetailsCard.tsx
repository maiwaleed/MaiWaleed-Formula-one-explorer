import "./driverDetailsCard.css";

export const DriverDetailsCard = (props: any) => {
  const { raceDetails } = props;
  return (
    <div className="outer-container">
      {raceDetails.map((driver: any, index: number) => {
        console.log(driver);
        return (
          <div className="item-container" key={index}>
            <a href="#" className="item-link">
              <div className="item-bg"></div>
              <div className="driver_rank">#{driver.position}</div>
              <div className="item-name">
                {driver.Driver.givenName} {driver.Driver.familyName}
              </div>

              <div className="info-container">
                <span className="item-details">
                  <span style={{ color: "white" }}>Nationality:</span>{" "}
                  {driver.Driver.nationality}
                </span>

                <span className="item-details">
                  <span style={{ color: "white" }}>Team:</span>{" "}
                  {driver.Constructor.constructorId}
                </span>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
