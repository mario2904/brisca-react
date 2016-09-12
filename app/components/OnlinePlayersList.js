import React, { Component } from 'react';
import { connect } from 'react-redux';
import ws from '../services/websocket';

class OnlinePlayersList extends Component {
  getPlayerInfo (player) {
    ws.send(JSON.stringify({cmd: 'getPlayerInfo', player: player}));
  }
  renderPlayerList () {
    return this.props.onlinePlayers.map((player, i) => {
      return <li key={player} onClick={()=>this.getPlayerInfo(player)}>{player}</li>;
    });
  }

  render () {
    return (
      <div>
        <h1>Online Players List:</h1>
        <ul>
          {this.renderPlayerList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    onlinePlayers: state.onlinePlayers
  };
}

export default connect (mapStateToProps)(OnlinePlayersList);
