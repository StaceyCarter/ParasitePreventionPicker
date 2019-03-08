import React from "react";
import ReactDOM from "react-dom";
import { GOOGLEAPI } from "./keys";
import { findCounty } from "./findCounty";
import { findCountry } from "./findCountry";

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
        const country = findCountry(info)
        const result = (country !== "United States" && country !== "Canada") ? "Please enter a place within the US or Canada" : findCounty(info);
        return result
      })
      .then((result)=> {
          returnValue(result);
      })
      .catch((e) => {
          returnValue("Please enter valid place within the USA or Canada");  
      })
  }

  function returnValue(fromPromise) {
      console.log("hello, returnValue function is running now and it has this value: ", fromPromise)
  }
  
  
  export class InputAddress extends React.Component {
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
      getDetails();

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
          <input type="submit" value="Find my county!" />
        </form>
      );
    }
  }