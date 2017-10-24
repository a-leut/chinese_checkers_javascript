import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hole from './Hole.js'

export default class Board extends Component {
  static propTypes = {
    /*knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired*/
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
        <Hole>{i}</Hole>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}
