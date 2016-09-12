export default function (state={}, action) {
  switch (action.type) {
    case 'INIT_PLAYER_ID':
        return {...state, playerId: action.payload.player};
    case 'INIT_GAME':
        return {...state, game: action.payload};
    default:
      return state;
  }
};
