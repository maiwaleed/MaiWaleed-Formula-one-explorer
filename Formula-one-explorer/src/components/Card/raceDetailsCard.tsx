import { Link } from "react-router-dom";
import "./raceDetailsCard.css";

export const RaceDetailsCard = (props: any) => {
  const { cardContent, isListView } = props;

  return (
    <div className="cardContainer">
      {cardContent.length > 0 &&
        cardContent.map((race: any, index: number) => (
          <div
            key={index}
            className={`${isListView ? "verticalCard" : "card"}`}
          >
            {isListView && <div key={index}>{index + 1}</div>}
            <div
              className={`${isListView ? "verticalCardImg" : "cardImg"}`}
            ></div>
            <div className="cardHeader">
              <span>Race name:{race.raceName}</span>
              <span>circuit name:{race.circuitName}</span>
              <span>date:{race.date}</span>
            </div>
            <Link
              aria-label={`${race.season}-${race.round}`}
              to={`/season-listing/${race.season}`}
              className={`${isListView ? "verticalCardTitle" : "cardTitle"}`}
            >
              Drivers Info
            </Link>
          </div>
        ))}
    </div>
  );
};
