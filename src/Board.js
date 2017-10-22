import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hole from './Hole.js'

export default class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      ":)" :
      null;
    const circle = <div style={{
      paddingTop: '0.55vw',
      paddingLeft: '0.55vw',
      borderRadius: '50%',
      width: '3vw',
      height: '3vw',
      boxShadow: "0 0 0 0.1vw black"
      
    }}></div>;

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
        {circle}
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
