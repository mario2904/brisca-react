export default function (state={}, action) {
  let newState, currentIndex;
  switch (action.type) {
    case 'START_GAME':
      // Destructure important info from payload.
      let { life, myIndex, numOfPlayers, myCards, players } = action.payload;
      // Create player structure
      let playersStruct = players.map(playerStructure);
      // Set current Index to the first one in the players array.
      currentIndex = 0;
      // Add cards to the hand of myPlayer
      playersStruct[myIndex].cards = myCards;

      newState = {
        life,
        myIndex,
        numOfPlayers,
        currentIndex,
        hasPlayed: false,
        players: playersStruct,
        status: (currentIndex === myIndex) ? 'It is your turn.': 'Wait for your turn'
      }
      console.log("newState: ", newState);
      return newState;
    case 'PLAYED_CARD':
      // Destructure important info from payload.
      let { name, pos } = action.payload;
      // Set new currentIndex
      currentIndex = (state.currentIndex + 1) % state.numOfPlayers;
      // Clone previous playersStruct. (Do not mutate the state)
      let newPlayersStruct = [...state.players];
      // Apply changes to the newState
      newPlayersStruct[state.currentIndex].chosenCard = {name, pos};
      newPlayersStruct[state.currentIndex].cards[pos] = name;

      newState = {
        ...state,
        status: (currentIndex === state.myIndex) ? 'It is your turn.': 'Wait for your turn',
        hasPlayed: (state.currentIndex === state.myIndex) ? true : state.hasPlayed,
        currentIndex: currentIndex,
        players: newPlayersStruct
      }
      console.log("newState: ", newState);
      return newState;
    case 'END_ROUND':
      // Destructure important info from payload.
      let { winner, points } = action.payload;
      // Set new current Index
      currentIndex = state.players.findIndex(p => p.id === winner);
      newState = {
        ...state,
        hasPlayed: false,
        currentIndex: currentIndex,
        status: (currentIndex === state.myIndex) ? 'It is your turn.': 'Wait for your turn',
        // status: `Winner of this round is: ${winner}. Gained ${points} points.`,
        players: loadNewCards(state.players, state.myIndex, action.payload.myCards)

      }
      return newState;
    default:
      return state;
  }
}

function loadNewCards(players, myIndex, cards) {
  // Clear the previous chosenCard and cards from all players
  const tmpPlayers = players.map(player => {
    player.chosenCard = {name: null, pos: null};
    player.cards = ['back', 'back', 'back'];
    return player;
  });
  // Set the new cards
  tmpPlayers[myIndex].cards = cards;

  return tmpPlayers
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
