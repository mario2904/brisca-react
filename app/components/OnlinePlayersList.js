import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class OnlinePlayersList extends Component {
  renderPlayerList() {
    return this.props.onlinePlayers.map((player) => {
      return (
        <li key={player}><Link to={"/player/" + player} activeStyle={{ color: 'green' }}>{player}</Link></li>
      );
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
