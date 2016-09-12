export default function (state=[], action) {
  switch (action.type) {
    case 'INIT_AVAILABLE_GAMES':
      return action.payload.games;
    case 'NEW_AVAILABLE_GAME':
      return [...state, action.payload.gameId];
    default:
      return state;
  }
}
