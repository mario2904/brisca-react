export default function (state={}, action) {
  switch (action.type) {
    case 'UPDATE_GAME_INFO':
      return {...state, ...action.payload};
    default:
      return state;
  }
}
