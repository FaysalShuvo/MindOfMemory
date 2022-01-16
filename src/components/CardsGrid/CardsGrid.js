import React from "react";
// styles
import "./CardsGrid.css";

const CardsGrid = ({ cards }) => {
  console.log(cards);
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div>
            <img src={card.src} alt="card front side" className="front-side" />
            <img
              src="/img/cover.png"
              alt="card back side"
              className="back-side"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsGrid;
