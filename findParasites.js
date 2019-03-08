import React from "react";

export class FindParasites extends React.Component{
   constructor(props){
       super(props);
   }
   render(){
       console.log("hello console")
       return <p>hello i am a parasite who lives in {this.props.county} in {this.props.state}</p>  
   }  
}


