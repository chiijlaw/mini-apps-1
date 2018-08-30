import React, { Component } from "react";
import ReactDOM from "react-dom";
import Column from "./Column.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: 1,
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
    for (var i = 7; i >= 0; i--) {
      if (state[column][i] === 0) {
        x = i;
        state[column][i] = this.state.play;
        i = -1;
      }
    }
    if (this.state.play === 1) {
      state.play = -1;
    } else {
      state.play = 1;
    }
    // this.setState(state);
    this.setState(prevState => {
      return state;
    });
    this.checkWin(x, y);
  }

  checkWin(x, y) {
    var winCondition;
    this.state.play === 1
      ? (winCondition = "1111")
      : (winCondition = "-1-1-1-1");
    if (this.state["column" + y].join("").includes(winCondition)) {
      winCondition === "1111"
        ? console.log("Red wins!")
        : console.log("Blue wins!");
    }
    var maDiaIndex = x + y;
    var miDiaIndex = x - y;
    var minDiag = [];
    var yStart = 0;
    var xStart = x;
    while (xStart <= 7 && yStart <= 7) {
      minDiag.push(this.state["column" + y][x]);
      xStart++;
      yStart++;
    }
    console.log(minDiag);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Game Start!</h1>
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
