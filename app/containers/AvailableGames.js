import React, { Component } from 'react';
import { connect } from 'react-redux';

import AvailableGamesList from '../components/AvailableGamesList';
import GameInfo from '../components/GameInfo';
import ws from '../services/websocket';

class AvailableGames extends Component {
  render () {
    console.log(this.props.gameInfo);
    return (
      <div>
        <h1>Available Games:</h1>
        <AvailableGamesList games={this.props.availableGames}/>
        <GameInfo game={this.props.gameInfo}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    availableGames: state.availableGames,
    gameInfo: state.gameInfo
  };
}

export default connect (mapStateToProps)(AvailableGames);
