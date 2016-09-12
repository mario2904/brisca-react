import React, {Component} from 'react';

import OnlinePlayersList from './OnlinePlayersList';
import GameInfo from './GameInfo';
import PlayerInfo from './PlayerInfo'
import MyInfo from './MyInfo';

export default class LobbyContainer extends Component {
  render () {
    return (
      <div>
        <MyInfo />
        <hr/>
        <OnlinePlayersList />
        <hr/>
        <PlayerInfo />
        <hr/>
      </div>
    );
  }
};
