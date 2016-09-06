export default function (state=[], action) {
  switch (action.type) {
    case 'UPDATE_PLAYERS':
      let players = action.payload.players;
      return (typeof players == 'string') ? [players] : players;
    default:
      return state;

  }
};
