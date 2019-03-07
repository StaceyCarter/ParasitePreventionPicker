import React from 'react';
import ReactDOM from 'react-dom';
import { GOOGLEAPI } from './keys';


class Hello extends React.Component{
    render() {
        return <h1>Find My County</h1>
    }
}

let address;

function getDetails() {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLEAPI}`)
        .then(function(response) {
          return response.json();  
        })
        .then(myJson => {
            const info = myJson;
            console.log(JSON.stringify(info))
            console.log(typeof info);
            alert(findCounty(info))  
        })
}

function extractAddressComponents(obj){
    return obj.results[0].address_components
  }
  
function findCounty(info){
const addressInfo = extractAddressComponents(info);
let counties = addressInfo.filter((obj) => {
    let labels = obj.types;
    return labels.includes('administrative_area_level_2')
})
  return counties[0].long_name;
}


class Button extends React.Component{
    render() {
        return (
        <div>
            <button onClick={getDetails}>Get info about address</button>
        </div>
        );
    }
}

class InputAddress extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        address = this.state.value;
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                  Address:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
        )
    }
}

class App extends React.Component{
    render(){
      return (
          <div>
              
              <Hello />
              <InputAddress />
              <Button />
          </div>
      )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)


