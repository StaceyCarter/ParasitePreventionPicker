import React from "react";
import ReactDOM from "react-dom";
import { GOOGLEAPI } from "./keys";
import { findCounty } from "./findCounty";
import { findCountry } from "./findCountry";
import { findState } from "./findState";

let address;

function getDetails(returnCounty, returnState, returnError) {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLEAPI}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(myJson => {
      const info = myJson;
      const country = findCountry(info);
      const result =
        country !== "United States"
          ? "Please enter a place within the US"
          : [findCounty(info), findState(info)];
      return result;
    })
    .then(result => {
      if (typeof result === "string") {
        console.log("i am running an error");
        returnError(result);
      } else {
        returnCounty(result[0]);
        returnState(result[1]);
      }
    })
    .catch(e => {
      returnError("Please enter valid place within the USA or Canada");
    });
}

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
    address = this.state.value;
    getDetails(
      this.handleAnswerCounty,
      this.handleAnswerState,
      this.handleError
    );

    event.preventDefault();
  }

  handleAnswerCounty(countyText) {
    this.setState({ error: "" });
    this.setState({ county: countyText });
  }
  handleAnswerState(stateText) {
    this.setState({ error: "" });
    this.setState({ state: stateText });
  }
  handleError(errorText) {
    this.setState({ county: "", state: "" });
    this.setState({ error: errorText });
  }

  renderAnswer() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else {
      return this.state.county.length > 0 ? (
        <p>
          You live in {this.state.county}, {this.state.state}
        </p>
      ) : (
        <p>Submit a address please</p>
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a place:
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </label>
        <input type="submit" value="Find my county!" />
        {this.renderAnswer()}
      </form>
    );
  }
}
