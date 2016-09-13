export default function (state={}, action) {
  let newState;
  switch (action.type) {
    case 'START_GAME':
      newState = {
        ...action.payload,
        players: action.payload.players.map(playerStructure),
        currentIndex: 0,
      }
      console.log("newState: ", newState);
      return newState;
    case 'PLAYED_CARD':
      let name = action.payload.card;
      let pos = action.payload.cardPos;
      let newPlayers = [...state.players];
      newPlayers[state.currentIndex].card = {name, pos}
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
    card: {
      name: '',
      pos: null
    }
  };
}
