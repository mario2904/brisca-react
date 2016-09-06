export default function (state='Loading...', action) {
  switch (action.type) {
    case 'PLAYER_ID':
        return action.payload.player;
      break;
    default:
      return state
  }
};
