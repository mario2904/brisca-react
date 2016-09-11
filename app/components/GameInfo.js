import React, { Component } from 'react';
import { connect } from 'react-redux';
import ws from '../services/websocket'
import * as _ from 'lodash';

class GameInfo extends Component {
  createGame () {
    // Hard coded num of players... for now
    ws.send(JSON.stringify({cmd: 'createGame', numOfPlayers: 4}));
  }
  renderPlayerList (players) {
    return players.map((player) => {
      return <li key={player}>{player}</li>
    });
  }
  render () {
    let gameInfo = this.props.gameInfo;
    if (_.isEmpty(gameInfo)) {
      return (
        <div>
          <h1>You are not registered in a Game</h1>
          <button onClick={this.createGame}>Create a Game</button>
        </div>
      );
    }
    return (
      <div>
        <h5>Game ID: {gameInfo.gameId}</h5>
        <h5>Number of Players: {gameInfo.numOfPlayers}</h5>
        <ul>
          {this.renderPlayerList(gameInfo.players)}
        </ul>
      </div>
    );

  }
}

function mapStateToProps (state) {
  return {
    gameInfo: state.gameInfo,
    playerId: state.playerId
  };
}

export default connect (mapStateToProps)(GameInfo);
