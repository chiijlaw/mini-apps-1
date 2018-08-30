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

  handleNextClick(myData) {
    if (this.state.form1Display === "block") {
      this.setState({
        form1Display: "none",
        form2Display: "block"
      });
      axios.post("/", myData);
    } else if (this.state.form2Display === "block") {
      this.setState({
        form2Display: "none",
        form3Display: "block"
      });
      axios.put("/", myData);
    } else if (this.state.form3Display === "block") {
      this.setState({
        form3Display: "none",
        summaryDisplay: "block"
      });
      axios.put("/", myData);
    }
  }

  handleFormDataUpdate(someKey, someValue, formData) {
    var obj = {};
    obj[someKey] = someValue;
    this.setState({
      formData: Object.assign(obj, formData)
    });
  }

  handleSummaryClick() {
    axios.put("/", { complete: true });
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

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ display: this.props.display }}>
        Form1!!
        <form>
          <p>
            Name
            <input
              type="text"
              name="name"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </p>
          <p>
            Email
            <input
              type="text"
              name="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </p>
          <p>
            Password
            <input
              type="text"
              name="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </p>
        </form>
        <button
          name="submit"
          onClick={() => {
            this.props.handleNextClick(this.state);
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ display: this.props.display }}>
        Form2!!
        <form>
          <p>
            Address
            <input
              type="text"
              name="addressLine1"
              onChange={e => this.setState({ addressLine1: e.target.value })}
            />
            <input
              type="text"
              name="addressLine2"
              onChange={e => this.setState({ addressLine2: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              name="city"
              onChange={e => this.setState({ city: e.target.value })}
            />
            <input
              type="text"
              name="state"
              onChange={e => this.setState({ state: e.target.value })}
            />
            <input
              type="text"
              name="zipCode"
              onChange={e => this.setState({ zipCode: e.target.value })}
            />
          </p>
          <p>
            Phone Number
            <input
              type="text"
              name="phoneNumber"
              onChange={e => this.setState({ phoneNumber: e.target.value })}
            />
          </p>
        </form>
        <button
          name="submit"
          onClick={() => {
            this.props.handleNextClick(this.state);
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ display: this.props.display }}>
        Form3!!
        <form>
          <p>
            Credit Card
            <input
              type="text"
              name="creditCard"
              onChange={e => this.setState({ creditCard: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              name="expiryDate"
              onChange={e => this.setState({ expiryDate: e.target.value })}
            />
            <input
              type="text"
              name="CVV"
              onChange={e => this.setState({ CVV: e.target.value })}
            />
            <input
              type="text"
              name="billingZip"
              onChange={e => this.setState({ billingZip: e.target.value })}
            />
          </p>
        </form>
        <button
          name="submit"
          onClick={() => {
            this.props.handleNextClick(this.state);
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

var Summary = props => (
  <div style={{ display: props.display }}>
    Summary!!
    <button name="submit" onClick={props.handleSummaryClick}>
      Purchase
    </button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
