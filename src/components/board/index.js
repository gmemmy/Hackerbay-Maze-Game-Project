import React, { Component } from 'react';
import Square from '../square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.totalSquares = this.props.width * this.props.height;
    this.state = {
      squares: [],
      marioLocation: Math.floor(Math.random() * (this.totalSquares - 0) + 0),
      gameInitialized: false,
      moves: 0,
      yMoves: 0,
      xMoves: 0,
      lastMove: '+y'
    };
  }

  renderSquare(index, element, display) {
    return <Square key={index}
      value={index} element={this.state.squares[index].element} displayElement={this.state.squares[index].display}
      onClick={() => this.handleClick(index)}
    />;
  }

  renderRows(squares) {
    return (<div className="board-row">
      {squares}
    </div>);
  }

  renderBoard() {
    let board = [];
    let rows = [];
    for (let i = 0, squareNumber = 0; i < this.props.height; i++) {
      for (let j = 0; j < this.props.width; j++) {
        rows.push(
          this.renderSquare(
            squareNumber
          )
        );
        squareNumber++;
      }
      board.push(this.renderRows(rows));
      rows = [];
    }
    return board;
  }

  render() {
    if (!this.state.gameInitialized) {
      let luckySquares = [];
      for (let i = 0; i < Math.floor(Math.sqrt(this.totalSquares)) + 1; i++) {
        luckySquares.push(
          Math.floor(Math.random() * (this.totalSquares))
        );
      };
      console.log('calculating lucky squares: ', luckySquares);
      let squareNumber = 0;
      for (let i = 0; i < this.props.height; i++) {
        for (let j = 0; j < this.props.width; j++) {
          let element = squareNumber === this.state.marioLocation ? "super-mario.png" : luckySquares.includes(squareNumber) ? "enemy-cap.png" : "";
          let display = luckySquares.includes(squareNumber) || squareNumber === this.state.marioLocation ? "block" : "none";
          this.state.squares.push({ element, display, value: squareNumber });
          squareNumber++;
        }
      }
    }
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}

export default Board;
