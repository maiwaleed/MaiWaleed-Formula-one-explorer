import "./card.css";

export const Card = (props: any) => {
  const { cardContent } = props;
  if (cardContent.length > 0) {
    cardContent.map((season: any) => console.log(season));
  }
  return (
    <div className="cardContainer">
      {cardContent.length > 0 &&
        cardContent.map((season: any, index: number) => (
          <div key={index} className="card">
            <div className="cardImg"></div>
            <div className="cardTitle">{season.season}</div>
          </div>
        ))}
    </div>
  );
};
