const cards =
  'https://us.api.blizzard.com/hearthstone/cards?locale=pt_BR&pageSize=100&access_token=UShfBKRss53gXMnZE5AhOLDtX0rOhJCnJ7';

function cardRequest() {
  const fetchCards = fetch(cards).then((resolve) => resolve.json());
  return fetchCards;
}

export default cardRequest;
