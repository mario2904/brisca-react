import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import ws from '../services/websocket';
import GameInfo from '../components/GameInfo';

 class MyInfo extends Component {
   createGame () {
     // Hard coded num of players... for now
     ws.send(JSON.stringify({cmd: 'createGame', numOfPlayers: 4}));
   }
  render() {
    if (_.isEmpty(this.props.myInfo)) {
      return <h1>Loading...</h1>;
    }
    else if (this.props.myInfo.game === undefined){
      return (
        <div>
          <h1>Player ID: {this.props.myInfo.playerId}</h1>
          <button onClick={() => this.createGame()}>Create a Game</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <h1>Player ID: {this.props.myInfo.playerId}</h1>
          <GameInfo game={this.props.myInfo.game}/>
        </div>
      );
    }
  }
}
function mapStateToProps (state) {
  return {myInfo: state.myInfo};
}

export default connect (mapStateToProps)(MyInfo);
