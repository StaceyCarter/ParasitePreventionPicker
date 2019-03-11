import React from 'react';
import { riskImageDetector } from './riskImageDecider';

export class Hookworm extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if (this.props) {
        return (
          <div>
            <p>The risk of hookworm is {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
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

  export class Whipworm extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if (this.props) {
        return (
          <div>
            <p>The risk of whipworm is {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
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

  export class Giardia extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if (this.props) {
        return (
          <div>
            <p>The risk of giardia is {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
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

  export class Roundworm extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if (this.props) {
        return (
          <div>
            <p>The risk of roundworm is {this.props.risk} {riskImageDetector(this.props.risk)}.</p>
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