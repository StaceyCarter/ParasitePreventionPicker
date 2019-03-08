import React from "react";
import ReactDOM from "react-dom";
import { GOOGLEAPI } from "./keys";
import { findCounty } from "./findCounty";
import { findCountry } from "./findCountry";

let address;

function getDetails(returnValue) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLEAPI}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        const info = myJson;
        const country = findCountry(info);
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
  
  export class InputAddress extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "", county: ""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAnswer = this.handleAnswer.bind(this);
    }
    // When you change typing into the input field, this function updates the value state
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
    // This function runs when the form is submitted
    handleSubmit(event) {
      address = this.state.value;
      getDetails(this.handleAnswer);

      event.preventDefault();
    }

    handleAnswer(text) {
        this.setState({ county: text }); 
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
          {
              this.state.county.length > 0 ?
                <p>{ this.state.county }</p> :
                <p>Submit a address please</p>

          }
        </form>
      );
    }
  }