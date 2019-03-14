
import { giantArrayOfDiseases } from '/data/giantFileOfDiseasesByState';

// returns an an object, the keys are each of the diseases and the values are an array with the risk in position 0 and the % occurence in position 1.
export function getData(state){
    let obj = {};
    // loops over each disease in the array and extracts the risk and percentage incidence of each disease for the state of interest.
    for (let disease of giantArrayOfDiseases){
        let paramsAndStats = disease[1];
        for (let i = 0; i < paramsAndStats.length ; i++){
            if (paramsAndStats[i].params.state.name === state){
                let risk = paramsAndStats[i].stats.risk;
                let percentage = paramsAndStats[i].stats.percentage; 
                obj[disease[0]] = [risk, percentage];
            }
        }
    }
    return obj;
}



