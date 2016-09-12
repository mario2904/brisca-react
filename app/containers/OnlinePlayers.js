import React, { Component } from 'react';
import { connect } from 'react-redux';

import OnlinePlayersList from '../components/OnlinePlayersList';
import PlayerInfo from '../components/PlayerInfo';

class OnlinePlayers extends Component {
  render () {
    let players = this.props.onlinePlayers;
    return (
      <div>
        <h1>Online Players List:</h1>
        <OnlinePlayersList players={this.props.onlinePlayers} />
        <PlayerInfo player={this.props.playerInfo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    onlinePlayers: state.onlinePlayers,
    playerInfo: state.playerInfo
  };
}

export default connect (mapStateToProps)(OnlinePlayers);
