import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1><Link to="/game">GameBoard</Link></h1>
        {this.props.children}
      </div>
    );
  }
}
