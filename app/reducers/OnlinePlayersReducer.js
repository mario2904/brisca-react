export default function (state=[], action) {
  switch (action.type) {
    case 'INIT_PLAYERS':
      return action.payload.players;
    case 'NEW_PLAYER':
      return [...state, action.payload.player];
    case 'DELETE_PLAYER':
      return state.filter((player) => (player !== action.payload.player));
    default:
      return state;
  }
};
