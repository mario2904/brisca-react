import { combineReducers } from 'redux';
import OnlinePlayersReducer from './OnlinePlayersReducer';
import MyInfoReducer from './MyInfoReducer';
import PlayerInfoReducer from './PlayerInfoReducer';

const rootReducer = combineReducers ({
  onlinePlayers: OnlinePlayersReducer,
  playerId: MyInfoReducer,
  playerInfo: PlayerInfoReducer
});

export default rootReducer;
