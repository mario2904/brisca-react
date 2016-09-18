import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  cardClick () {

  }
  renderCards() {
    const game = this.props.game;
    const { life, myIndex, players } = game;

    if (_.isEmpty(this.props.game)) {
      return;
    }
    const p1 = players[myIndex].cards.map((card, i) => {
      const x = (BOARD_WIDTH / 2) - ((CARD_WIDTH * 3) / 2) - (2 * MARGIN) + (i * (CARD_WIDTH + (2 * MARGIN)));
      const y = BOARD_HEIGHT - CARD_HEIGHT - (2 * MARGIN);
      return (
        <img
          key={card}
          onClick={() => this.cardClick()}
          src={img(`./${card}.jpg`)}
          style={cardStyle(x, y)} />
      );
    });

    const p2 = players[(myIndex + 1) % players.length].cards.map((card, i) => {
      const x = (BOARD_WIDTH / 2) + ((CARD_WIDTH) / 2) + (2 * MARGIN) - (i * (CARD_WIDTH + (2 * MARGIN)));
      const y = 0;
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
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {game: state.game};
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

export default connect (mapStateToProps)(Game);
