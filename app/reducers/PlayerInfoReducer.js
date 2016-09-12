export default function (state={}, action) {
  switch (action.type) {
    case 'PLAYER_INFO':
      return action.payload;
    default:
      return state;

  }
};
