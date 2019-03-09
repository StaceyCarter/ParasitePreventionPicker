import React from 'react';

export class TickBorneDiseases extends React.Component{
   constructor(props){
       super(props);
   }
   render(){
       
   }
}

export class Lyme extends React.Component{
    constructor(props){
        super(props)

        this.state = { risk: "" , percentage: ""};
    }
    render(){
        if (this.state.risk){
            return <p>The risk of lyme disease is {this.state.risk}</p>
        }
        
    }
}