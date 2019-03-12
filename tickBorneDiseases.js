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
          <p>Risk: {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
          <p>
            {this.props.percentage}% of animals tested positive in your area.
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
            <p>Risk: {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
            <p>
              {this.props.percentage}% of animals tested positive in your area.
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
            <p>Risk: {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
            <p>
              {this.props.percentage}% of animals tested positive in your area.
            </p>
          </div>
        );
      }
      return <p></p>;
    }
  }
