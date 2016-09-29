import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import AvailableGamesList from '../components/AvailableGamesList';
import GameInfo from '../components/GameInfo';
import ws from '../services/websocket';

class AvailableGames extends Component {
  joinGame () {
    console.log('join game', this.props.gameInfo.id);
    ws.send(JSON.stringify({cmd: 'joinGame', gameId: this.props.gameInfo.id}));
  }
  render () {
    console.log(this.props.gameInfo);
    return (
      <div>
        <h1>Available Games:</h1>
        <AvailableGamesList games={this.props.availableGames}/>
        <GameInfo game={this.props.gameInfo}/>
        {_.isEmpty(this.props.gameInfo)
          || !_.isEmpty(this.props.myInfo.game)
          ||  this.props.gameInfo.numOfPlayers <= this.props.gameInfo.players.length
          || <Button onClick={() => this.joinGame()}>Join Game</Button>}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    availableGames: state.availableGames,
    gameInfo: state.gameInfo,
    myInfo: state.myInfo
  };
}

export default connect (mapStateToProps)(AvailableGames);
