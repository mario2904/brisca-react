import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ws from '../services/websocket';
import { connect } from 'react-redux';

export default class AvailableGamesList extends Component {
  getGameInfo (game) {
    ws.send(JSON.stringify({cmd: 'getGameInfo', gameId: game}));
  }
  renderAvailableGames () {
    return this.props.games.map((game) => {
      return <ListGroupItem onClick={() => this.getGameInfo(game)}>{game}</ListGroupItem>;
    });
  }
  render () {
    return (
      <ListGroup>
        {this.renderAvailableGames()}
      </ListGroup>
    );
  }
}
