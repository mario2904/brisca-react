import React, { Component } from 'react';
import * as _ from 'lodash';

export default class PlayerInfo extends Component {
  render() {
    let player = this.props.player;
    if (_.isEmpty(player))
      return <h5>Select a player to display information.</h5>;
    return (
      <div>
        <h1>Player Information:</h1>
        <h5>Player ID: {player.player}</h5>
        <h5>In Game: {player.inGame}</h5>
        <h5>Points: {player.points}</h5>
        <h5>Games Won: {player.gamesWon}</h5>
        <h5>Games Lost: {player.gamesLost}</h5>
      </div>
    );
  }
}
