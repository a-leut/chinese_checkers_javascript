import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hole from './Hole.js'

export default class Board extends Component {
  static BOARD_WIDTH = 8;

  /*static propTypes = {
    pieces: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  };*/

  constructor(props) {
    super(props);
    this.holeMap =  Board.initHoleMap();
  }

  static initHoleMap() {
    var map = Array(Board.BOARD_WIDTH ** 2).fill();
    var redStart = [63, 62, 61, 60, 55, 54, 53, 47, 46, 39];
    var blueStart = [0, 1, 2, 3, 8, 9, 10, 16, 17, 24];
    redStart.forEach((i) => map[i] = 'red');
    blueStart.forEach((i) => map[i] = 'blue');
    return map;
  }
  
  renderHole(i) {
    const x = i % Board.BOARD_WIDTH;
    const y = Math.floor(i / 8);
    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
        <Hole fill={this.holeMap[i]}>{i}</Hole>
      </div>
    );
  }

  render() {
    const holes = [];
    for (let i = 0; i < Board.BOARD_WIDTH ** 2; i++) {
      holes.push(this.renderHole(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {holes}
      </div>
    );
  }
}
