import React, {Component} from 'react';

import OnlinePlayersList from './OnlinePlayersList';
import GameInfo from './GameInfo';
import MyInfo from './MyInfo';

export default class LobbyContainer extends Component {
  render () {
    return (
      <div>
        <MyInfo />
        <hr/>
        <GameInfo />
        <hr/>
        <OnlinePlayersList />
        <hr/>
      </div>
    );
  }
};
