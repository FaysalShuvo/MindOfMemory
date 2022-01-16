import React, { useState } from "react";
import CardsGrid from "../CardsGrid/CardsGrid";
// styles
import "./Home.css";

const cardImgs = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

export default function Home() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImgs, ...cardImgs]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.ceil(Math.random() * 10000) }));
    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="home">
      <h1>Memory-Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <CardsGrid cards={cards} />
    </div>
  );
}
