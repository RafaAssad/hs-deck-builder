import React, { useEffect, useState } from 'react';
/* import { minionRequest } from '../services/cardsRequest'; */
import { cards } from '../data/minions.json';
import HSCards from '../components/Cards';

const CreateDeck = () => {

   const [minion, setMinion] = useState(cards)

/*   useEffect(() => {
    minionRequest().then((resp) => {
      setCard(Object.values(resp.cards));
      console.log(cards);
    });
  }, []); */ 

  // useEffect & componentDidMount apenas pra requisição

  return (
    <section>
      <h1>Create Decks</h1>
      <div className="grid">
        {minion.map((card, idx) => (
          <div key={idx}>
            <HSCards key={card.id} {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreateDeck;
