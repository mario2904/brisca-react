export default function (state={}, action) {
  switch (action.type) {
    case 'GAME_INFO':
      return action.payload;
    default:
      return state;

  }
};
