import React, { Component } from 'react';
import Board from './Board.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
        <Board knightPosition={[7, 4]} />,
      </div>
    );
  }
}

export default App;
