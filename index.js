import React from "react";
import ReactDOM from "react-dom";
import { GOOGLEAPI } from "./keys";
import { findCounty } from "./findCounty";

class Hello extends React.Component {
  render() {
    return <h1>Find My County</h1>;
  }
}

let address;

function getDetails() {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLEAPI}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(myJson => {
      const info = myJson;
      console.log(JSON.stringify(info));
      console.log(typeof info);
      alert(findCounty(info));
    });
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={getDetails}>Get info about address</button>
      </div>
    );
  }
}

class InputAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    address = this.state.value;
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Address:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <InputAddress />
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
