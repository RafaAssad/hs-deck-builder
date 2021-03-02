import React, { useEffect, useState } from 'react';
import cardsRequest from '../services/cardsRequest';
import HSCards from '../components/Cards';

const CreateDeck = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cardsRequest().then((resp) => {
      setCards(Object.values(resp.cards));
      console.log(cards);
    });
  }, []);

  return (
    <section>
      <h1>Create Decks</h1>
      {cards.map((card, idx) => (
        <div key={idx}>
          <HSCards key={card.id} {...card} />
        </div>
      ))}
    </section>
  );
};

export default CreateDeck;
