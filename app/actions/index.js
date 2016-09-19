export function selectCard (card) {
  console.log(`Card Selected-> name: ${card.name} pos: ${card.pos}`);
  return {
    type: 'PLAYED_CARD',
    payload: {
      name: card.name,
      pos: card.pos
    }
  };
}
