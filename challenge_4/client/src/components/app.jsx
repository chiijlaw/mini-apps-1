import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Game Start!</h1>
        </div>
      </div>
    );
  }
}

export default App;
