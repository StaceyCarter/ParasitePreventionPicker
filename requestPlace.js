import React from "react";
import ReactDOM from "react-dom";
import { findCounty } from "./findCounty";
import { findCountry } from "./findCountry";
import { findState } from "./findState";
import { FindParasites } from "./findParasites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let address;

// fetch is sent to website server which appends the address and google API key to request information about input from google geolocation API.
const getDetails = function(returnCounty, returnState, returnError) {
  fetch(
    //  `/location?address=${address}`
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDTG62_rP1u3pMFU--CM4sP8OkJTx9fXmc`
  )
    .then(function(response) {
      return response.json();
    })
    // Check if country is the USA. If it is, returns the county and the state in an array.
    .then(myJson => {
      const info = myJson;
      const country = findCountry(info);
      const result =
        country !== "United States"
          ? returnError("Please enter a place within the US")
          : [findCounty(info), findState(info)];
      return result;
    })
    // If result is a string pass into return error so that the error message is printed.
    .then(result => {
      if (typeof result === "string") {
        returnError(result);
      } else {
        returnCounty(result[0]);
        returnState(result[1]);
      }
    })
    .catch(e => {
      returnError("Please enter valid place within the US");
    });
};

export class InputAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", county: "", state: "", error: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAnswerCounty = this.handleAnswerCounty.bind(this);
    this.handleAnswerState = this.handleAnswerState.bind(this);
    this.handleError = this.handleError.bind(this);
    this.renderAnswer = this.renderAnswer.bind(this);
  }

  // This function runs when the form is submitted
  handleSubmit(event) {
    this.setState({
      error: <FontAwesomeIcon icon="spinner" size="3x" color="#A8D0E6" />
    });
    this.setState({ value: "" });
    this.setState({ state: "" });

    address = this.state.value;
    //Calls the getDetails function with call back functions as the arguments.
    getDetails(
      this.handleAnswerCounty,
      this.handleAnswerState,
      this.handleError
    );
    // Prevents page from reloading
    event.preventDefault();
  }
  // getDetails() uses the following as callback functions - it find the the county and state and passes each of these into these functions to update the state.

  handleAnswerCounty(countyText) {
    this.setState({ error: "" });
    this.setState({ county: countyText });
  }
  handleAnswerState(stateText) {
    this.setState({ error: "" });
    this.setState({ state: stateText });
  }
  // Takes error message as an argument and sets it as the error state. Resets county and state.
  handleError(errorText) {
    this.setState({ county: "", state: "" });
    this.setState({ error: errorText });
  }

  renderAnswer() {
    if (this.state.error) {
      // If error state is true, display the error message.
      return <p className="error">{this.state.error}</p>;
    } else {
      // if the county (and therefore state) exists, return text, otherwise placeholder picture of a bug.
      return this.state.county.length > 0 ? (
        <div>
          <p className="location">
            You live in{" "}
            <strong>
              {this.state.county}, {this.state.state}
            </strong>
            .
          </p>
          <p>The local parasitic diseases in your area are:</p>
        </div>
      ) : (
        <FontAwesomeIcon icon="bug" size="3x" color="#A8D0E6" />
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="placeName">
            <span className="label col-sm-10 offset-sm-1">
              Enter your city or town within the US to learn about your local
              parasites and the diseases they carry.
            </span>
          </label>
          <div className="col-sm-10 offset-sm-1 form-group">
            <input
              type="text"
              id="placeName"
              className="form-control"
              value={this.state.value}
              placeholder="eg. San Francisco"
              onChange={e => this.setState({ value: e.target.value })}
            />

            <span className="button">
              <input
                type="submit"
                value="Submit"
                className="btn btn-outline-primary submit-button"
              />
            </span>
          </div>
        </div>
        <div className="info">
          {this.renderAnswer()}
          {/* Renders all the info about parasites */}
          <FindParasites county={this.state.county} state={this.state.state} />
        </div>
      </form>
    );
  }
}
