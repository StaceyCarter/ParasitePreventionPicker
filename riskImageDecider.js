import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const riskImageDetector = function(riskLevel){
    if (riskLevel === "high"){
      return <FontAwesomeIcon icon="thermometer-full" color="red"/>
    } else if (riskLevel === "medium"){
      return <FontAwesomeIcon icon="thermometer-half" color="orange"/>
    } else {
      return <FontAwesomeIcon icon="thermometer-quarter" color="green"/>
    }
  }