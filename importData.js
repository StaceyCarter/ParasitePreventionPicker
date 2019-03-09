import React from "react";
import { giantArrayOfDiseases } from '/data/giantFileOfDiseasesByState';

const state = "California"

export class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = { test: ""}

    this.tester = this.tester.bind(this);
    }
    tester() {
        this.setState = { test: testing()}
        console.log("is my testr running")
    }

    render(){
        return <p>Hello, this is just a test {this.tester()} </p>
    }
}

export function testing(){
    let array = giantArrayOfDiseases
    console.log("this is my big array!!: ", array);
    for (let disease of giantArrayOfDiseases){
        console.log(disease[0]);
        let paramsAndStats = disease[1];
    
        for (let i = 0; i < paramsAndStats.length ; i++){
            
            if (paramsAndStats[i].params.state.name === state){
                console.log(paramsAndStats[i].params.state.name)
                console.log(paramsAndStats[i].stats.risk)
                console.log(paramsAndStats[i].stats.percentage)
            }
            
        }

    }
    return array;
}



