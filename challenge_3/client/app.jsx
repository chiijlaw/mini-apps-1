class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homePageDisplay: "block",
      form1Display: "none",
      form2Display: "none",
      form3Display: "none",
      summaryDisplay: "none",
      email: ""
    };
  }
  handleCheckoutClick() {
    this.setState({
      homePageDisplay: "none",
      form1Display: "block"
    });
  }

  handleNextClick(myData, customerEmail) {
    if (this.state.form1Display === "block") {
      this.setState({
        form1Display: "none",
        form2Display: "block",
        email: customerEmail
      });
      axios.post("/", myData);
    } else if (this.state.form2Display === "block") {
      this.setState({
        form2Display: "none",
        form3Display: "block"
      });
      myData.email = customerEmail;
      axios.put("/", myData);
    } else if (this.state.form3Display === "block") {
      this.setState({
        form3Display: "none",
        summaryDisplay: "block"
      });
      myData.email = customerEmail;
      axios.put("/", myData);
    }
  }

  handleSummaryClick() {
    this.setState({
      summaryDisplay: "none",
      homePageDisplay: "block"
    });
    location.reload();
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
          email={this.state.email}
        />
        <Form3
          display={this.state.form3Display}
          handleNextClick={this.handleNextClick.bind(this)}
          email={this.state.email}
        />
        <Summary
          display={this.state.summaryDisplay}
          handleSummaryClick={this.handleSummaryClick.bind(this)}
          email={this.state.email}
        />
      </div>
    );
  }
}
var Homepage = props => (
  <div style={{ display: props.display }}>
    Homepage!!
    <button
      name="submit"
      onClick={() => {
        props.handleCheckoutClick();
      }}
    >
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
              placeholder="name"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </p>
          <p>
            Email
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </p>
          <p>
            Password
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </p>
        </form>
        <button
          name="submit"
          onClick={() => {
            this.props.handleNextClick(this.state, this.state.email);
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
              placeholder="line 1"
              onChange={e => this.setState({ addressLine1: e.target.value })}
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="line 2"
              onChange={e => this.setState({ addressLine2: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              name="city"
              placeholder="city"
              onChange={e => this.setState({ city: e.target.value })}
            />
            <input
              type="text"
              name="state"
              placeholder="state"
              onChange={e => this.setState({ state: e.target.value })}
            />
            <input
              type="text"
              name="zipCode"
              placeholder="zip code"
              onChange={e => this.setState({ zipCode: e.target.value })}
            />
          </p>
          <p>
            Phone Number
            <input
              type="text"
              name="phoneNumber"
              placeholder="phone number"
              onChange={e => this.setState({ phoneNumber: e.target.value })}
            />
          </p>
        </form>
        <button
          name="submit"
          onClick={() => {
            this.props.handleNextClick(this.state, this.props.email);
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
              placeholder="credit card number"
              onChange={e => this.setState({ creditCard: e.target.value })}
            />
          </p>
          <p>
            <input
              type="text"
              name="expiryDate"
              placeholder="expiration date"
              onChange={e => this.setState({ expiryDate: e.target.value })}
            />
            <input
              type="text"
              name="CVV"
              placeholder="CVV"
              onChange={e => this.setState({ CVV: e.target.value })}
            />
            <input
              type="text"
              name="billingZip"
              placeholder="billing zip code"
              onChange={e => this.setState({ billingZip: e.target.value })}
            />
          </p>
        </form>
        <button
          name="submit"
          onClick={() => {
            this.props.handleNextClick(this.state, this.props.email);
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
    <button
      name="submit"
      onClick={() => {
        props.handleSummaryClick();
      }}
    >
      Purchase
    </button>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
