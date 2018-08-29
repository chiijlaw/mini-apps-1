class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: props.board
    };
  }
  render() {
    return (
      <div>
        <div>Hello World!!!!!!!</div>
        <Board board={this.state.board} />
      </div>
    );
  }
}
