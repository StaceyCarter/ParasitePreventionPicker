import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Lyme extends React.Component {
  constructor(props) {
    super(props);

    this.riskImageDecider = this.riskImageDecider.bind(this);
  }
  riskImageDecider(){
    if (this.props.risk === "high"){
      return <FontAwesomeIcon icon="thermometer-full"/>
    } else if (this.props.risk === "medium"){
      return <FontAwesomeIcon icon="thermometer-half"/>
    } else {
      return <FontAwesomeIcon icon="thermometer-quarter"/>
    }
  }

  render() {
    if (this.props) {
      return (
        <div>
          <p>The risk of lyme disease is {this.props.risk} {this.riskImageDecider()}.</p>
          <p>
            The percentage of animals who tested positive is{" "}
            {this.props.percentage}%
          </p>
        </div>
      );
    }
    return <p></p>;
  }
}
export class Anaplasmosis extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if (this.props) {
        return (
          <div>
            <p>The risk of anaplasmosis is {this.props.risk}.</p>
            <p>
              The percentage of animals who tested positive is{" "}
              {this.props.percentage}%
            </p>
          </div>
        );
      }
      return <p></p>;
    }
  }

  export class Erlichiosis extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if (this.props) {
        return (
          <div>
            <p>The risk of erlichiosis is {this.props.risk}.</p>
            <p>
              The percentage of animals who tested positive is{" "}
              {this.props.percentage}%
            </p>
          </div>
        );
      }
      return <p></p>;
    }
  }
