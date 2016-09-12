import React, { Component } from 'react';

export default class GameInfo extends Component {
  renderPlayerList (players) {
    return players.map((player) => {
      return <li key={player}>{player}</li>
    });
  }
  render () {
    let game = this.props.game;
    if (_.isEmpty(game))
      return <h5>Select a game to view information.</h5>
    return (
      <div>
        <h5>Game ID: {game.gameId}</h5>
        <h5>Number of Players: {game.numOfPlayers}</h5>
        <ul>
          {this.renderPlayerList(game.players)}
        </ul>
      </div>
    );
  }
}
