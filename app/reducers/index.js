import { combineReducers } from 'redux';
import OnlinePlayersReducer from './OnlinePlayersReducer';
import MyInfoReducer from './MyInfoReducer';
import PlayerInfoReducer from './PlayerInfoReducer';
import GameInfoReducer from './GameInfoReducer';
import AvailableGamesReducer from './AvailableGamesReducer';

const rootReducer = combineReducers ({
  onlinePlayers: OnlinePlayersReducer,
  myInfo: MyInfoReducer,
  playerInfo: PlayerInfoReducer,
  gameInfo: GameInfoReducer,
  availableGames: AvailableGamesReducer
});

export default rootReducer;
