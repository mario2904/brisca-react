import React, {Component} from 'react';

import OnlinePlayersList from './OnlinePlayersList';
import PlayerInfo from './PlayerInfo';

export default class App extends Component {
  render() {
    return (
      <div>
        <PlayerInfo />
        <OnlinePlayersList />
      </div>
    );
  }
}
