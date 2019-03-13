import React from "react";
import { getData } from "./importData";
import { Lyme, Anaplasmosis, Erlichiosis } from "./tickBorneDiseases.js";
import { Hookworm, Whipworm, Giardia, Roundworm } from "./intestinalParasites";
import { riskImageDetector } from "./riskImageDecider";
import ReactSVG from "react-svg";

export class FindParasites extends React.Component {
  constructor(props) {
    super(props);
    this.findInfo = this.findInfo.bind(this);
    this.findTickRisk = this.findTickRisk.bind(this);
  }

  findInfo() {
    let stateLocation = this.props.state;
    let info = getData(stateLocation);
    console.log(info);
    return (
      <div>
        <div className="disease-class">
          <ReactSVG src="./images/tick.svg" />
          <h2>Tick borne diseases:</h2>

          <div className="row">
            <div className="col-md-4">
              <h3 className="disease-heading">Lyme</h3>
              <Lyme risk={info.Lyme[0]} percentage={info.Lyme[1]} />
            </div>
            <div className="col-md-4">
              <h3 className="disease-heading">Anaplasmosis</h3>
              <Anaplasmosis
                risk={info.Anaplasmosis[0]}
                percentage={info.Anaplasmosis[1]}
              />
            </div>
            <div className="col-md-4">
              <h3 className="disease-heading">Erlichiosis</h3>
              <Erlichiosis
                risk={info.Erlichiosis[0]}
                percentage={info.Erlichiosis[1]}
              />
            </div>
          </div>
          <div className="disease-explanation">
            {this.findTickRisk(
              info.Lyme[0],
              info.Anaplasmosis[0],
              info.Erlichiosis[0]
            )}
          </div>
        </div>
        <div className="disease-class">
          <ReactSVG src="./images/worm.svg" />
          <h2>Intestinal parasites</h2>

          <div className="row">
            <div className="col-lg-4">
              <h3 className="disease-heading">Roundworm</h3>
              <Roundworm
                risk={info.Roundworm[0]}
                percentage={info.Roundworm[1]}
              />
            </div>
            <div className="col-lg-4">
              <h3 className="disease-heading">Hookworm</h3>
              <Hookworm risk={info.Hookworm[0]} percentage={info.Hookworm[1]} />
            </div>
            <div className="col-lg-4">
              <h3 className="disease-heading">Whipworm</h3>
              <Whipworm risk={info.Whipworm[0]} percentage={info.Whipworm[1]} />
            </div>
          </div>
          <div className="row row-two">
            <div className="col-md-4 offset-md-2">
              <h3 className="disease-heading">Giardia</h3>
              <Giardia risk={info.Giardia[0]} percentage={info.Giardia[1]} />
            </div>
            <div className="giardia-explanation disease-explanation col-md-4">
              <ReactSVG src="./images/giardia.svg" />
              {info.Giardia[0] === "high" ? (
                <p>!!Risk of giardia is high in your area!!</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="disease-explanation">
            {this.findWormRisk(
              info.Roundworm[0],
              info.Hookworm[0],
              info.Whipworm[0],
              info.Giardia[0]
            )}
          </div>
        </div>
        <div className="disease-class">
          <ReactSVG src="./images/heartworm.svg" />
          <h2>Heartworm</h2>

          <p>
            Risk: {info.Heartworm[0]} {riskImageDetector(info.Heartworm[0])}
          </p>
          <p>
            The percentage of animals who test positive is {info.Heartworm[1]}%
          </p>
          <div className="disease-explanation">
            {this.findHeartWormRisk(info.Heartworm[0])}
          </div>
        </div>
        <div className="disease-class">
          <ReactSVG src="./images/flea.svg" />
          <h2>Fleas</h2>
          <div className="disease-explanation">
            {this.findFleaRisk(stateLocation)}
          </div>
        </div>
      </div>
    );
  }
  findTickRisk(risk1, risk2, risk3) {
    let array = [risk1, risk2, risk3];
    let obj = {
      low: 0,
      medium: 0,
      high: 0
    };
    for (let riskLevel of array) {
      obj[riskLevel] += 1;
    }
    if (obj.medium > 2 || obj.high >= 1) {
      return (
        <p>
          The prevalence of tick borne diseases in your area is reasonable. If
          you go hiking a lot you should probably use it.
        </p>
      );
    } else {
      return (
        <p>
          The risk of tick borne disease in your area is low. If you are an avid
          hiker or go to lakes a lot you may want to consider protecting your
          dog against ticks.{" "}
        </p>
      );
    }
  }
  findWormRisk(risk1, risk2, risk3, risk4) {
    let array = [risk1, risk2, risk3, risk4];
    let obj = {
      low: 0,
      medium: 0,
      high: 0
    };
    for (let riskLevel of array) {
      obj[riskLevel] += 1;
    }
    if (obj.medium > 2 || obj.high >= 1) {
      return (
        <div>
          <p>
            The prevalence of intestinal diseases in your area is high, be sure
            to have your dog's feces checked once a year to see if they need
            deworming.
          </p>
          <p>
            It is also a good idea to go for a parasite prevention product that
            has a dewormer included.
          </p>
        </div>
      );
    } else {
      return (
        <p>
          The risk of intestinal parasites in your area is low. You can be a
          little more relaxed about annual fecal tests and ensuring there is a
          dewormer in your parasite prevention
        </p>
      );
    }
  }

  findHeartWormRisk(r) {
    if (r === "high" || r === "medium") {
      return (
        <p>
          The risk of heartworm in your area is significant. Given the severity
          of this disease, it is extremely important that you maintain heartworm
          treament monthly and test for heartworm each year.
        </p>
      );
    } else {
      return (
        <p>
          {" "}
          The risk of heartworm in you area is low, however you may still want
          to consider using a preventetive, and testing for heartworm each year.
          Especially if you travel.
        </p>
      );
    }
  }

  findFleaRisk(inputState){
    const fleasInWinter = ["Montana", "Wyoming", "Colorado", "Nebraska", "South Dakota", "North Dakota", "Minnesota", "Iowa", "Michigan", "New York", "Vermont", "New Hampshire", "Connecticut", "Rhode Island", "Massachusetts"];
    if (inputState === "Alaska"){
      return (
        <p>In your area, fleas are most active between May-October. They do not like the cold! While it is ideal to have your pets on year round flea prevention, it is most important to ensure they receive prevention during this time frame.</p>
      )
    }
    for (let state of fleasInWinter){
      if (inputState === state){
        return (
          <p>In your area, fleas are mainly active during April-December. While year round flea treatment is still recommended due to flea's abilities to hibernate in carpet. It is most important to ensure your dog (and other pets) is on flea prevention during this time.</p>
        );
      }
    }
    return (
      <p>Fleas are active in your area <strong>year round</strong>. For this reason it is extremely important you ensure your dog and other pets receive flea treatment every month. Just one skipped treatment can result in an outbreak!</p>
    )

  }

  render() {
    if (this.props.state) {
      return this.findInfo();
    }
    return <p />;
  }
}

class Heartworm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>hello heartworm</p>;
  }
}
