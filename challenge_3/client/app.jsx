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

  handleNextClick() {
    if (this.state.form1Display === "block") {
      this.setState({
        form1Display: "none",
        form2Display: "block"
      });
    } else if (this.state.form2Display === "block") {
      this.setState({
        form2Display: "none",
        form3Display: "block"
      });
    } else if (this.state.form3Display === "block") {
      this.setState({
        form3Display: "none",
        summaryDisplay: "block"
      });
    }
  }

  handleSummaryClick() {
    //send information to database
    this.setState({
      summaryDisplay: "none",
      homePageDisplay: "block"
    });
  }

  render() {
    return (
      <div>
        <div>Let's Go!!</div>
        <Homepage
          display={this.state.homePageDisplay}
          handleCheckoutClick={this.handleCheckoutClick.bind(this)}
        />
        <Form1
          display={this.state.form1Display}
          handleNextClick={this.handleNextClick.bind(this)}
        />
        <Form2
          display={this.state.form2Display}
          handleNextClick={this.handleNextClick.bind(this)}
        />
        <Form3
          display={this.state.form3Display}
          handleNextClick={this.handleNextClick.bind(this)}
        />
        <Summary
          display={this.state.summaryDisplay}
          handleSummaryClick={this.handleSummaryClick.bind(this)}
        />
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
    <form>
      <p>
        <input type="text" />
      </p>
    </form>
    <button name="submit" onClick={props.handleNextClick}>
      Next
    </button>
  </div>
);
var Form2 = props => (
  <div style={{ display: props.display }}>
    Form2!!
    <button name="submit" onClick={props.handleNextClick}>
      Next
    </button>
  </div>
);
var Form3 = props => (
  <div style={{ display: props.display }}>
    Form3!!
    <button name="submit" onClick={props.handleNextClick}>
      Next
    </button>
  </div>
);
var Summary = props => (
  <div style={{ display: props.display }}>
    Summary!!
    <button name="submit" onClick={props.handleSummaryClick}>
      Purchase
    </button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
