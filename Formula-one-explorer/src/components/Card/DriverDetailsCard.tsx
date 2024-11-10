import "./driverDetailsCard.css";

export const DriverDetailsCard = () => {
  return (
    <>
      <div className="item-container">
        <a href="#" className="item-link">
          <div className="item-bg"></div>
          <div className="driver_rank">#1</div>
          <div className="item-name">charles leclerc</div>

          <div className="info-container">
            <span className="item-details">
              <span style={{ color: "white" }}>Country:</span> monaco
            </span>

            <span className="item-details">
              <span style={{ color: "white" }}>Team:</span> ferrari
            </span>
          </div>
        </a>
      </div>
    </>
  );
};
