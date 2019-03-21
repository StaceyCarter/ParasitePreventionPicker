import React from "react";
import { getData } from "./importData";
import ReactSVG from "react-svg";
import { RenderRiskData } from "./renderRiskData";

export class FindParasites extends React.Component {
  constructor(props) {
    super(props);
    this.findInfo = this.findInfo.bind(this);
    this.findTickRisk = this.findTickRisk.bind(this);
    this.findWormRisk = this.findWormRisk.bind(this);
    this.findHeartWormRisk = this.findHeartWormRisk.bind(this);
    this.findFleaRisk = this.findFleaRisk.bind(this);
  }

  findInfo() {
    // Renders information about each parasitic disease.
    let stateLocation = this.props.state;

    let info = getData(stateLocation);
    return (
      <div>
        <div className="disease-class">
          <ReactSVG src="./images/tick.svg" />
          <h2>Tick borne diseases:</h2>

          <div className="row">
            <div className="col-lg-4">
              <h3 className="disease-heading">Lyme</h3>
              {info.Lyme ? 
              <RenderRiskData risk={info.Lyme[0]} percentage={info.Lyme[1]} /> :
              console.log("No data")} 
              
        
            </div>
            <div className="col-lg-4">
              <h3 className="disease-heading">Anaplasmosis</h3>
              {info.Anaplasmosis ? <RenderRiskData
                risk={info.Anaplasmosis[0]}
                percentage={info.Anaplasmosis[1]}
              /> : 
              "No data"}
              
            </div>
            <div className="col-lg-4">
              <h3 className="disease-heading">Erlichiosis</h3>
              {info.Erlichiosis ? 
              <RenderRiskData
              risk={info.Erlichiosis[0]}
              percentage={info.Erlichiosis[1]}
            /> :
            "No data"}
              
            </div>
          </div>
          { info.Lyme && info.Anaplasmosis && info.Erlichiosis ? 
          <div className="disease-explanation">
          {this.findTickRisk(
            info.Lyme[0],
            info.Anaplasmosis[0],
            info.Erlichiosis[0]
          )}
        </div> :
        "No data"  
        }
        
        </div>
        <div className="disease-class">
          <ReactSVG src="./images/worm.svg" />
          <h2>Intestinal parasites</h2>
          <div className="row">
            <div className="col-lg-4">
              <h3 className="disease-heading">Roundworm</h3>
              {info.Roundworm ? 
              <RenderRiskData
              risk={info.Roundworm[0]}
              percentage={info.Roundworm[1]}
            /> :
            "No data"}
              
            </div>
            <div className="col-lg-4">
              <h3 className="disease-heading">Hookworm</h3>
              {info.Hookworm ? 
              <RenderRiskData
              risk={info.Hookworm[0]}
              percentage={info.Hookworm[1]}
            /> :
            "No data"}
              
            </div>
            <div className="col-lg-4">
              <h3 className="disease-heading">Whipworm</h3>
              {info.Whipworm ? 
              <RenderRiskData
              risk={info.Whipworm[0]}
              percentage={info.Whipworm[1]}
            /> :
            "No data"}
              
            </div>
          </div>
          <div className="row row-two">
            <div className="col-md-8 offset-md-2">
              
              <ReactSVG src="./images/giardia.svg" />


              <h3 className="disease-heading">Giardia</h3>
              {info.Giardia ?
              <RenderRiskData
              risk={info.Giardia[0]}
              percentage={info.Giardia[1]}
            /> :
          "No data"}

              
              {info.Giardia ?
               <div className="giardia-explanation disease-explanation">
               {info.Giardia[0] === "high" || info.Giardia[0] === "medium" ? (
                 <p>
                   The risk of giardia is increased in your area. Giardia is a
                   protozoa, rather than a worm. This means that products which
                   contain a dewormer do not treat giardia. For this reason, it
                   is very important that you ensure your dog has an annual
                   fecal test each year. Giardia can be transmitted to humans,
                   so this is a very important thing to do for everyone's
                   health!
                 </p>
               ) : (
                 <p>
                   Giardia is a protozoa, meaning it doesn't respond to a
                   normal dewormer. While your dog's risk of contracting
                   giardia is low, if you notive any signs of diarrhoea, it is
                   always a good idea to check a fecal sample, just to be sure!
                 </p>
               )}
             </div> :
             
              ""}
             
            </div>
          </div>
          {info.Hookworm && info.Roundworm && info.Whipworm && info.Giardia ?
          <div className="disease-explanation">
          {this.findWormRisk(
            info.Roundworm[0],
            info.Hookworm[0],
            info.Whipworm[0],
            info.Giardia[0]
          )}
        </div> :
        "No data"
          }
          
        </div>
        <div className="disease-class">
          <ReactSVG src="./images/heartworm.svg" />
          <h2>Heartworm</h2>
          {info.Heartworm ?
          <div>
          <RenderRiskData
          risk={info.Heartworm[0]}
          percentage={info.Heartworm[1]}
        />
        <div className="disease-explanation">
          {this.findHeartWormRisk(info.Heartworm[0])}
        </div> </div>:
        "No data"
          }
          
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
  // Finds prevalence of tick borne diseases in the area and returns advice accordingly.
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
        <div>
          <p>
            The prevalence of tick borne diseases in your area is significant.
            If you take your dog hiking or if you go for walks/live in a woody
            or grassy area you should consider using a tick prevention product
            in addition to your normal flea prevention. There are many products
            that do both.
          </p>
          <p>
            Alternatively, if you only take your dog to at risk locations
            sometimes, you could consider adding in a tick prevention (eg. a
            tick collar) just at those times.
          </p>
          <p>
            A blood test can be done to test for these tick borne diseases.
            Since you live in an area at increased risk, talk to your
            veterinarian about testing for these annually. This test is often
            combined with an annual heartworm test.
          </p>
        </div>
      );
    } else {
      return (
        <p>
          The risk of tick borne disease in your area is low. If you take your
          dog hiking or for walks in woody, grassy areas, you may want to
          consider adding in tick prevention product anyway. There are many
          combination flea/tick prevention products available.
        </p>
      );
    }
  }
  // Finds prevalence intestinal (worms and giardia) diseases in the area and returns advice accordingly.
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
            The prevalence of intestinal diseases in your area is significant,
            be sure to have your dog's feces checked once a year to see if they
            need treatment.
          </p>
          <p>
            It is also a good idea to choose a parasite prevention product that
            has a dewormer included.
          </p>
        </div>
      );
    } else {
      return (
        <p>
          The risk of intestinal parasites in your area is low. You can be a
          little more relaxed about deworming and annual fecal tests.
        </p>
      );
    }
  }
  // Finds prevalence heartworm in the area and returns advice accordingly.
  findHeartWormRisk(r) {
    if (r === "high" || r === "medium") {
      return (
        <div>
          <p>
            The risk of heartworm in your area is significant. Given the
            severity of this disease, it is extremely important that you
            maintain heartworm treatment monthly and test for heartworm each
            year. Just one skipped dose of heartworm medication can lead to
            infection.
          </p>
          <p>
            Heartworm is a serious disease, it is very difficult to diagnose and
            the treatment is costly and traumatic, with no guarantee of success.
            It is also very difficult to control, since it is transmitted by
            mosquitoes, even indoor only pets are at risk.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            The risk of heartworm in you area is low, however you may still want
            to consider using a preventative, and testing for heartworm each
            year. Especially if you travel to areas with a higher prevalence.
          </p>
          <p>
            Heartworm is a serious disease, it is very difficult to diagnose the
            treatment is costly and traumatic, with no guarantee of success. It
            is also very difficult to control, since it is transmitted by
            mosquitoes, even indoor only pets are at risk.
          </p>
        </div>
      );
    }
  }

  // Finds seasonal risk of fleas based on state. Colder states mean fleas are mostly active in summer.
  findFleaRisk(inputState) {
    const fleasInWinter = [
      "Montana",
      "Wyoming",
      "Colorado",
      "Nebraska",
      "South Dakota",
      "North Dakota",
      "Minnesota",
      "Iowa",
      "Michigan",
      "New York",
      "Vermont",
      "New Hampshire",
      "Connecticut",
      "Rhode Island",
      "Massachusetts"
    ];
    if (inputState === "Alaska") {
      return (
        <p>
          In your area, fleas are most active between May-October, they do not
          like the cold! While it is ideal to have your pets on year round flea
          prevention, it is most important to ensure they receive prevention
          during May-October.
        </p>
      );
    }
    for (let state of fleasInWinter) {
      if (inputState === state) {
        return (
          <p>
            In your area, fleas are mainly active during April-December. While
            year round flea treatment is still recommended due to flea's
            abilities to hibernate in carpet. It is most important to ensure
            your dog (and other pets) is on consistent flea prevention during
            April-December.
          </p>
        );
      }
    }
    return (
      <p>
        Fleas are active in your area <strong>year round</strong>. For this
        reason it is extremely important you ensure your dog and other pets
        receive flea treatment every month. Just one skipped treatment can
        result in an outbreak!
      </p>
    );
  }

  render() {
    // If a state has been received then execute the findInfo method. Otherwise return empty.
    if (this.props.state) {
      return this.findInfo();
    }
    return <p />;
  }
}
