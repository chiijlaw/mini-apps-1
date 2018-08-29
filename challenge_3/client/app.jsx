class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageDisplay: "block",
      form1Display: "none",
      form2Display: "none",
      form3Display: "none",
      summaryDisplay: "none",
      formData: {}
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
    //TODO send information to server
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
        Name
        <input type="text" name="name" />
      </p>
      <p>
        Email
        <input type="text" name="email" />
      </p>
      <p>
        Password
        <input type="text" name="password" />
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
    <form>
      <p>
        Address
        <input type="text" name="addressLine1" />
        <input type="text" name="addressLine2" />
      </p>
      <p>
        <input type="text" name="city" />
        <input type="text" name="state" />
        <input type="text" name="zipCode" />
      </p>
      <p>
        Phone Number
        <input type="text" name="phoneNumber" />
      </p>
    </form>
    <button name="submit" onClick={props.handleNextClick}>
      Next
    </button>
  </div>
);

var Form3 = props => (
  <div style={{ display: props.display }}>
    Form3!!
    <form>
      <p>
        Credit Card
        <input type="text" name="creditCard" />
      </p>
      <p>
        <input type="text" name="expiryDate" />
        <input type="text" name="CVV" />
        <input type="text" name="billingZip" />
      </p>
    </form>
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
