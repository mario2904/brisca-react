import { combineReducers } from 'redux';
import OnlinePlayersReducer from './OnlinePlayersReducer';
import MyInfoReducer from './MyInfoReducer';

const rootReducer = combineReducers ({
  onlinePlayers: OnlinePlayersReducer,
  playerId: MyInfoReducer
});

export default rootReducer;
