import React from 'react';
import ws from '../services/websocket';

class AvailableGames {
  getGameInfo (game) {
    ws.send(JSON.stringify({cmd: 'getGameInfo', gameId: game}));
  }
  renderAvailableGames () {
    return this.props.availableGames.map((game) => {
      return (
        <li onClick={() => this.getGameInfo(game)}>{game}</li>
      );
    })
  }
  render () {
    <div>
      <h1>Available Games:</h1>
      <ul>
        {this.renderAvailableGames}
      </ul>
    </div>
  }
}

function mapStateToProps (state) {
  return {availableGames: state.availableGames};
}

export default connect (mapStateToProps)(AvailableGames);
