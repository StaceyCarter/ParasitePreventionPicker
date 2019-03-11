import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { riskImageDetector } from './riskImageDecider';

export class Lyme extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props) {
      return (
        <div>
          <p>The risk of lyme disease is {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
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
            <p>The risk of anaplasmosis is {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
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
            <p>The risk of erlichiosis is {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
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
