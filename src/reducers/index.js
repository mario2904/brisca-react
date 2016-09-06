import { combineReducers } from 'redux';
import OnlinePlayersReducer from './OnlinePlayersReducer';
import PlayerInfoReducer from './PlayerInfoReducer';

const rootReducer = combineReducers ({
  onlinePlayers: OnlinePlayersReducer,
  playerId: PlayerInfoReducer
});

export default rootReducer;
