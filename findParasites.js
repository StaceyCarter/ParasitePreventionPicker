import React from "react";
import { getData } from "./importData";

export class FindParasites extends React.Component{
   constructor(props){
       super(props);
    this.findInfo = this.findInfo.bind(this);
       
   }
   findInfo(){
       let stateLocation = this.props.state;
       let info = getData(stateLocation);
       console.log(info)
       return (
           <div>
               <h3>Lyme</h3>
               <p>Risk: {info.Lyme[0]}</p>
               <p>The percentage of animals who test positive is {(info.Lyme[1])}%</p>
               <h3>Anaplasmosis</h3>
               <p>Risk: {info.Anaplasmosis[0]}</p>
               <p>The percentage of animals who test positive is {(info.Anaplasmosis[1])}%</p>
               <h3>Erlichiosis</h3>
               <p>Risk: {info.Erlichiosis[0]}</p>
               <p>The percentage of animals who test positive is {(info.Erlichiosis[1])}%</p>
               <h3>Roundworm</h3>
               <p>Risk: {info.Roundworm[0]}</p>
               <p>The percentage of animals who test positive is {(info.Roundworm[1])}%</p>
               <h3>Hookworm</h3>
               <p>Risk: {info.Hookworm[0]}</p>
               <p>The percentage of animals who test positive is {(info.Hookworm[1])}%</p>
               <h3>Giardia</h3>
               <p>Risk: {info.Giardia[0]}</p>
               <p>The percentage of animals who test positive is {(info.Giardia[1])}%</p>
               <h3>Heartworm</h3>
               <p>Risk: {info.Heartworm[0]}</p>
               <p>The percentage of animals who test positive is {(info.Heartworm[1])}%</p>
               <h3>Whipworm</h3>
               <p>Risk: {info.Whipworm[0]}</p>
               <p>The percentage of animals who test positive is {(info.Whipworm[1])}%</p>
           </div>
       )
      
   }
   render(){
       if (this.props.state){
           return this.findInfo();
       }
       return <p> hello i am a parasite who lives in {this.props.county} in {this.props.state} </p> 
   }  
}

class Heartworm extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <p>hello heartworm</p>
    }
}


