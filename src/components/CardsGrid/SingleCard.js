import React from "react";
// styles
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <>
      <div className="card" key={card.id}>
        <div className={flipped ? "flipped" : ""}>
          <img src={card.src} alt="card front side" className="front-side" />
          <img
            src="/img/cover.png"
            alt="card back side"
            className="back-side"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

// }