export default function (state={}, action) {
  switch (action.type) {
    case 'UPDATE_GAME_INFO':
      let info = action.payload;
      let newState = {
        gameId: info.gameId,
        numOfPlayers: info.numOfPlayers,
        players: info.players
      };
      return {...state, ...newState};
    default:
      return state;
  }
}
