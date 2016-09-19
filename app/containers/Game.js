import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCard } from '../actions';
import { bindActionCreators } from 'redux';

import ws from '../services/websocket';
import * as _ from 'lodash';
// load all image files.
const img = require.context("../img", true, /\.(png|jpg)$/);

// Declare constant variables
const BOARD_IMG = img('./board.jpg');
const MARGIN = 5;
const BOARD_WIDTH = 700;
const BOARD_HEIGHT = 700;
const CARD_WIDTH = 100;
const CARD_HEIGHT = 139;


class Game extends Component {
  cardClick (card) {
    const { myIndex, currentIndex, hasPlayed } = this.props.game;

    if (currentIndex === myIndex && !hasPlayed) {
      this.props.selectCard(card);
      ws.send(JSON.stringify({cmd: 'playCard', card: card.name}));
    }
  }
  renderCards() {
    const game = this.props.game;
    const { life, myIndex, currentIndex, players } = game;

    if (_.isEmpty(this.props.game)) {
      return;
    }
    const p1 = players[myIndex].cards.map((card, i) => {
      let x = (BOARD_WIDTH / 2) - ((CARD_WIDTH * 3) / 2) - (2 * MARGIN) + (i * (CARD_WIDTH + (2 * MARGIN)));
      let y = BOARD_HEIGHT - CARD_HEIGHT - (2 * MARGIN);
      if (_.isEqual(players[myIndex].chosenCard,{name: card, pos: i})) {
        y = y - CARD_HEIGHT;
      }
      return (
        <img
          key={card}
          onClick={() => this.cardClick({name: card, pos: i})}
          src={img(`./${card}.jpg`)}
          style={cardStyle(x, y)} />
      );
    });

    const p2 = players[(myIndex + 1) % players.length].cards.map((card, i) => {
      let x = (BOARD_WIDTH / 2) + ((CARD_WIDTH) / 2) + (2 * MARGIN) - (i * (CARD_WIDTH + (2 * MARGIN)));
      let y = 0;
      if (_.isEqual(players[(myIndex + 1) % players.length].chosenCard,{name: card, pos: i})) {
        y = y + CARD_HEIGHT;
      }
      return (
        <img
          key={card + '_' + i}
          src={img(`./${card}.jpg`)}
          style={cardStyle(x, y)} />
      );
    });

    const lifeImg = <img src={img(`./${game.life}.jpg`)} key={'life'} style={cardStyle()}/>

    const res = p1.concat(p2);
    res.push(lifeImg);

    return res;
  }
  render () {
    return (
      <div>
        <div style={boardStyle}>
          {this.renderCards()}
          {/* Here goes all the card animations... */}
        </div>
        <h4>{this.props.game.status}</h4>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {game: state.game};
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({selectCard: selectCard}, dispatch);
}

const boardStyle = {
  backgroundImage: "url(" + BOARD_IMG + ")",
  position: "relative",
  margin: "0 auto",
  width: BOARD_WIDTH,
  height: BOARD_HEIGHT
}

function cardStyle (x=0, y=0) {
  return {
    position: "absolute",
    top: y,
    left: x,
    margin: MARGIN,
    //border: "3px solid black"
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(Game);
