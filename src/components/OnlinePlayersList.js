import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnlinePlayersList extends Component {
  renderPlayerList() {
    return this.props.onlinePlayers.map((player) => {
      return (
        <li key={player}>{player}</li>
      );
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

function mapStateToProps(state) {
  return {
    onlinePlayers: state.onlinePlayers
  };
}

export default connect (mapStateToProps)(OnlinePlayersList);
