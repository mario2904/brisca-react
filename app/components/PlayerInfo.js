import React, {Component} from 'react';
import { connect } from 'react-redux';
import ws from '../services/websocket';
import * as _ from 'lodash';

class PlayerInfo extends Component {
  constructor (props) {
    super(props);
    // Not sure if this is the right way/place to do it...
    // Request information of player based on the url route
    ws.send(JSON.stringify({cmd: 'getPlayerInfo', player: props.params.id}));
  }
  render() {
    if (_.isEmpty(this.props.playerInfo)) {
      return <h1>Loading Player Information...</h1>
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
        {JSON.stringify(player.params)}
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
