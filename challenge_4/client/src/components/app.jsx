import React, { Component } from "react";
import ReactDOM from "react-dom";
import Column from "./Column.jsx";
import check from "../utilities/checkWin.js";
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
    this.check = check.bind(this);
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
    this.check(x, y);
    if (this.state.counter === 63) {
      alert("It's a tie! Good Game!");
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
