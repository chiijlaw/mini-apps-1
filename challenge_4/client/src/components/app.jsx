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
  handleColumnClick(column) {
    var state = {};
    state[column] = this.state[column];
    for (var i = 7; i >= 0; i--) {
      if (state[column][i] === 0) {
        state[column][i] = this.state.play;
        i = -1;
      }
    }
    if (this.state.play === 1) {
      state.play = -1;
    } else {
      state.play = 1;
    }
    this.setState(state);
  }

  checkWin(x, y) {
    if (this.state["column" + y].join("").includes("1111")) {
      console.log(true);
    }
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
