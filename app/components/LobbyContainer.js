import React, {Component} from 'react';

import OnlinePlayers from '../containers/OnlinePlayers';
import AvailableGames from '../containers/AvailableGames';
import MyInfo from '../containers/MyInfo';

export default class LobbyContainer extends Component {
  render () {
    return (
      <div>
        <MyInfo />
        <hr/>
        <AvailableGames />
        <hr/>
        <OnlinePlayers />
        <hr/>
      </div>
    );
  }
};
