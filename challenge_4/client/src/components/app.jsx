import React, { Component } from "react";
import ReactDOM from "react-dom";
import Column from "./Column.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: 1,
      counter: 0,
      column0: [0, 0, 0, 0, 0, 0, 0, 0],
      column1: [0, 0, 0, 0, 0, 0, 0, 0],
      column2: [0, 0, 0, 0, 0, 0, 0, 0],
      column3: [0, 0, 0, 0, 0, 0, 0, 0],
      column4: [0, 0, 0, 0, 0, 0, 0, 0],
      column5: [0, 0, 0, 0, 0, 0, 0, 0],
      column6: [0, 0, 0, 0, 0, 0, 0, 0],
      column7: [0, 0, 0, 0, 0, 0, 0, 0],
      numbers: [0, 1, 2, 3, 4, 5, 6, 7]
    };
  }
  handleColumnClick(column, y) {
    var state = {};
    var x;
    state[column] = this.state[column];
    if (state[column][0] !== 0) {
      return alert("No more space left!");
    }

    for (var i = 7; i >= 0; i--) {
      if (state[column][i] === 0) {
        x = i;
        state.counter = this.state.counter + 1;
        state[column][i] = this.state.play;
        i = -1;
      }
    }
    if (this.state.play === 1) {
      state.play = 3;
    } else {
      state.play = 1;
    }
    this.setState(prevState => {
      return state;
    });
    this.checkWin(x, y);
    if (this.state.counter === 63) {
      alert("It's a tie! Good Game!");
    }
  }

  checkWin(x, y) {
    var winCondition;
    //Check for win conditions based on whose turn it is
    this.state.play === 1 ? (winCondition = "1111") : (winCondition = "3333");
    //Check for column win
    if (this.state["column" + y].join("").includes(winCondition)) {
      winCondition === "1111" ? alert("Red wins!") : alert("Blue wins!");
    }
    //Check for row win
    var rowArray = [];
    for (var i = 0; i < 8; i++) {
      rowArray.push(this.state["column" + i][x]);
    }
    if (rowArray.join("").includes(winCondition)) {
      winCondition === "1111" ? alert("Red wins!") : alert("Blue wins!");
    }
    //Check for Minor diagonal win
    var miDiaIndex = x - y;
    var minDiag = [];
    var yStart = 0;
    if (miDiaIndex < 0) {
      yStart = Math.abs(miDiaIndex);
    }
    var xStart = 0;
    if (miDiaIndex > 0) {
      xStart = miDiaIndex;
    }
    while (xStart <= 7 && yStart <= 7) {
      minDiag.push(this.state["column" + yStart][xStart]);
      xStart++;
      yStart++;
    }
    if (minDiag.join("").includes(winCondition)) {
      winCondition === "1111" ? alert("Red wins!") : alert("Blue wins!");
    }
    //Check for major diagonal win
    var maDiaIndex = x + y;
    var majDiag = [];
    var yStart = 0;
    if (maDiaIndex > 7) {
      yStart = maDiaIndex - 7;
    }
    var xStart = 7;
    if (maDiaIndex < 7) {
      xStart = maDiaIndex;
    }
    while (xStart >= 0 && yStart <= 7) {
      majDiag.push(this.state["column" + yStart][xStart]);
      xStart--;
      yStart++;
    }
    if (majDiag.join("").includes(winCondition)) {
      winCondition === "1111" ? alert("Red wins!") : alert("Blue wins!");
    }
  }

  render() {
    return (
      <div>
        <div id="container">
          <h1 style={{ alignSelf: "center" }}>Connect Four!</h1>
          <ul id="board">
            {this.state.numbers.map(number => (
              <Column
                key={number}
                numbers={this.state.numbers}
                columnState={this.state["column" + number]}
                yColumn={"column" + number}
                y={number}
                handleColumnClick={this.handleColumnClick.bind(this)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
