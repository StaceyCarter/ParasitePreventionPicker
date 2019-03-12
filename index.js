import React from "react";
import ReactDOM from "react-dom";
import { InputAddress } from "./requestPlace.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faThermometerHalf, faThermometerFull, faThermometerQuarter, faBug } from '@fortawesome/free-solid-svg-icons'
 

library.add(fab, faThermometerFull, faThermometerHalf, faThermometerQuarter, faBug)


let address;

class Hello extends React.Component {
  render() {
    return <h1 className="page-header">Parasitic disease risk in the USA</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="app row">
          <div className="col-md-10 offset-md-1 text-center">
          <Hello />
          </div>
          <div className="col-md-10 offset-md-1 text-center">
          <InputAddress />
          </div>
       

          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
