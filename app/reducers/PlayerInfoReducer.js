export default function (state={}, action) {
  switch (action.type) {
    case 'PLAYER_INFO':
      let playerInfo = action.payload;
      console.log("meeh");

      let newState = {
        player: playerInfo.player,
        inGame: playerInfo.inGame,
        points: playerInfo.points,
        gamesWon: playerInfo.gamesWon,
        gamesLost: playerInfo.gamesLost
      }
      return {...state, ...newState};
    default:
      return state;

  }
};
