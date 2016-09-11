import { combineReducers } from 'redux';
import OnlinePlayersReducer from './OnlinePlayersReducer';
import MyInfoReducer from './MyInfoReducer';
import PlayerInfoReducer from './PlayerInfoReducer';
import GameInfoReducer from './GameInfoReducer';

const rootReducer = combineReducers ({
  onlinePlayers: OnlinePlayersReducer,
  playerId: MyInfoReducer,
  playerInfo: PlayerInfoReducer,
  gameInfo: GameInfoReducer
});

export default rootReducer;
