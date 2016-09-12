export default function (state={}, action) {
  switch (action.type) {
    case 'MY_INFO_PLAYER':
      return {...state, player: action.payload.player};
    case 'MY_INFO_GAME':
      return {...state, game: action.payload};
    default:
      return state;
  }
};
