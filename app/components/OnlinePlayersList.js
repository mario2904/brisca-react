import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ws from '../services/websocket';

export default class OnlinePlayersList extends Component {
  getPlayerInfo (player) {
    ws.send(JSON.stringify({cmd: 'getPlayerInfo', player: player}));
  }
  renderPlayerList () {
    return this.props.players.map((player) => {
      return <ListGroupItem onClick={() => this.getPlayerInfo(player)}>{player}</ListGroupItem>;
    });
  }
  render () {
    return (
      <ListGroup>
        {this.renderPlayerList()}
      </ListGroup>
    );
  }
}
