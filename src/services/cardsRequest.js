const cards =
  'https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR&set=standard&type=minion&pageSize=49&access_token=USQN787ZEpvgUTLXDQlPEzRIWGhrN9RYb5';

function minionRequest() {
  const fetchCards = fetch(cards).then((resolve) => resolve.json());
  return fetchCards;
}

const spells =
  'https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR&set=standard&type=spell&pageSize=35&access_token=USQN787ZEpvgUTLXDQlPEzRIWGhrN9RYb5';

function spellRequest() {
  const fetchCards = fetch(spells).then((resolve) => resolve.json());
  return fetchCards;
}

export { minionRequest, spellRequest };
