export default function (state={}, action) {
  let newState;
  switch (action.type) {
    case 'START_GAME':
      let startPlayers = action.payload.players.map(playerStructure);
      startPlayers[action.payload.myIndex].cards = action.payload.myCards;

      newState = {
        life: action.payload.life,
        myIndex: action.payload.myIndex,
        currentIndex: 0,
        players: startPlayers
      }
      console.log("newState: ", newState);
      return newState;
    case 'PLAYED_CARD':
      let name = action.payload.card;
      let pos = action.payload.cardPos;
      let newPlayers = [...state.players];
      newPlayers[state.currentIndex].Chosencard = {name, pos};
      newPlayers[state.currentIndex].cards[pos] = name;

      newState = {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.numOfPlayers,
        players: newPlayers
      }
      console.log("newState: ", newState);
      return newState;
    case 'END_ROUND':
      return {...state};
    default:
      return state;
  }
}

function playerStructure(player) {
  return {
    id: player,
    chosenCard: {
      name: null,
      pos: null
    },
    cards: ['back', 'back', 'back']
  };
}
