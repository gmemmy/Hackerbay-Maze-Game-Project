import React, { Component } from 'react';
import './index.css';
import Board from '../components/board'

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board width={10} height={10} />
        </div>
      </div>
    );
  }
}

export default Game;

