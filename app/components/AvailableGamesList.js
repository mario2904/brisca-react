import React, { Component } from 'react';
import ws from '../services/websocket';
import { connect } from 'react-redux';

export default class AvailableGamesList extends Component {
  getGameInfo (game) {
    ws.send(JSON.stringify({cmd: 'getGameInfo', gameId: game}));
  }
  renderAvailableGames () {
    return this.props.games.map((game) => {
      return <li key={game} onClick={() => this.getGameInfo(game)}>{game}</li>;
    });
  }
  render () {
    return (
      <div>
        <ul>
          {this.renderAvailableGames()}
        </ul>
      </div>
    );
  }
}
