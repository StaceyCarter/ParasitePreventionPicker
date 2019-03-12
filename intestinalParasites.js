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

  export class Whipworm extends React.Component {
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

  export class Giardia extends React.Component {
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

  export class Roundworm extends React.Component {
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