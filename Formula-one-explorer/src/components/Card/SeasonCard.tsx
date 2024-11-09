import { Link } from "react-router-dom";
import "./seasonCard.css";

export const SeasonCard = (props: any) => {
  const { cardContent, isListView } = props;

  return (
    <div className="cardContainer">
      {cardContent.length > 0 &&
        cardContent.map((season: any, index: number) => (
          <div
            key={index}
            className={`${isListView ? "verticalCard" : "card"}`}
          >
            {isListView && <div key={index}>{index + 1}</div>}
            <div
              className={`${isListView ? "verticalCardImg" : "cardImg"}`}
            ></div>
            <Link
              to={`/season-listing/${season.season}`}
              className={`${isListView ? "verticalCardTitle" : "cardTitle"}`}
            >
              {season.season}
            </Link>
          </div>
        ))}
    </div>
  );
};
