import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

class PlayerInfo extends Component {
  render() {
    if (_.isEmpty(this.props.playerInfo)) {
      return (
        <div>
          <h1>Player Information:</h1>
          <h3>No Player has been selected.</h3>
        </div>
      );
    }
    let player = this.props.playerInfo;
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
function mapStateToProps(state) {
  return {
    playerInfo: state.playerInfo
  };
}

export default connect (mapStateToProps)(PlayerInfo);
