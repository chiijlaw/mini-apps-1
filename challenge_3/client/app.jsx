class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageDisplay: "block",
      form1Display: "none",
      form2Display: "none",
      form3Display: "none",
      summaryDisplay: "none"
    };
  }
  handleCheckoutClick() {
    this.setState({
      homePageDisplay: "none",
      form1Display: "block"
    });
  }

  handleNextClick(e) {}

  render() {
    return (
      <div>
        <div>Let's Go!!</div>
        <Homepage
          display={this.state.homePageDisplay}
          handleCheckoutClick={this.handleCheckoutClick.bind(this)}
        />
        <Form1 display={this.state.form1Display} />
        <Form2 display={this.state.form2Display} />
        <Form3 display={this.state.form3Display} />
        <Summary display={this.state.summaryDisplay} />
      </div>
    );
  }
}
var Homepage = props => (
  <div style={{ display: props.display }}>
    Homepage!!
    <button name="submit" onClick={props.handleCheckoutClick}>
      Checkout
    </button>
  </div>
);
var Form1 = props => (
  <div style={{ display: props.display }}>
    Form1!!
    <button
      name="submit"
      onClick={event => {
        console.log(event.target);
      }}
    >
      Next
    </button>
  </div>
);
var Form2 = props => <div style={{ display: props.display }}>Form2!!</div>;
var Form3 = props => <div style={{ display: props.display }}>Form3!!</div>;
var Summary = props => <div style={{ display: props.display }}>Summary!!</div>;

ReactDOM.render(<App />, document.getElementById("app"));
