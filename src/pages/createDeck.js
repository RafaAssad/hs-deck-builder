import React, { useEffect, useState } from 'react';
import { minionRequest } from '../services/cardsRequest';
import HSCards from '../components/Cards';

const CreateDeck = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    minionRequest().then((resp) => {
      setCards(Object.values(resp.cards));
      console.log(cards);
    });
  }, []);

  return (
    <section>
      <h1>Create Decks</h1>
      <div className="grid">
        {cards.map((card, idx) => (
          <div key={idx}>
            <HSCards key={card.id} {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreateDeck;
