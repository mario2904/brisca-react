import React, {Component} from 'react';
import { connect } from 'react-redux';

 class PlayerInfo extends Component {
  render() {
    return (
      <div>
        <h1>Player ID: {this.props.playerId}</h1>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {playerId: state.playerId};
}

export default connect (mapStateToProps)(PlayerInfo);
