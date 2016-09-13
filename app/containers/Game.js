import React, { Component } from 'react';
import { connect } from 'react-redux';
// load all image files.
const img = require.context("../img", true, /\.(png|jpg)$/);

const boardImg = img('./board.jpg');

class Game extends Component {
  render () {
    return (
      <div>
        <div style={boardStyle}>

        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {};
}

export default connect (mapStateToProps)(Game);
const boardStyle = {
  backgroundImage: "url(" + boardImg + ")",
  width: 300,
  height: 300
}
