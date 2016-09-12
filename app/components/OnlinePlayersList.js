import React, { Component } from 'react';
import ws from '../services/websocket';

export default class OnlinePlayersList extends Component {
  getPlayerInfo (player) {
    ws.send(JSON.stringify({cmd: 'getPlayerInfo', player: player}));
  }
  renderPlayerList () {
    return this.props.players.map((player) => {
      return <li key={player} onClick={() => this.getPlayerInfo(player)}>{player}</li>;
    });
  }
  render () {
    return (
      <div>
        <ul>
          {this.renderPlayerList()}
        </ul>
      </div>
    );
  }
}
