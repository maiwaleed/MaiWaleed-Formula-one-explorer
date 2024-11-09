import { Link } from "react-router-dom";
import "./raceDetailsCard.css";
import { formatDate } from "../../utils/dateConverter";
import { FaLockOpen } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import {
  RaceCard,
  useRaceForASeasonStore,
} from "../../store/raceForASeasonStore";

export const RaceDetailsCard = (props: any) => {
  const { cardContent, isListView } = props;
  const { togglePinned } = useRaceForASeasonStore();
  return (
    <div className="cardContainer">
      {cardContent.length > 0 &&
        cardContent.map((race: RaceCard, index: number) => (
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
              <span>circuit name:{race.Circuit.circuitName}</span>
              <span>date:{formatDate(race.date)}</span>
            </div>
            <Link
              aria-label={`${race.season}-${race.round}`}
              to={`/season-listing/${race.season}`}
              className={`${isListView ? "verticalCardTitle" : "cardTitle"}`}
            >
              Drivers Info
            </Link>
            <button
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                padding: "0.5em",
              }}
              onClick={() => togglePinned(index)}
            >
              {race.pinned ? <FaLock size={20} /> : <FaLockOpen size={20} />}
            </button>
          </div>
        ))}
    </div>
  );
};
