import React from "react";
import ReactDOM from "react-dom";
import { InputAddress } from "./requestPlace.js";

let address;

class Hello extends React.Component {
  render() {
    return <h1>Find My County</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <InputAddress />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
