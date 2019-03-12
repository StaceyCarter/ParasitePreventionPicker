import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const riskImageDetector = function(riskLevel){
    if (riskLevel === "high"){
      return <FontAwesomeIcon icon="thermometer-full" color="#f32323" size="lg"/>
    } else if (riskLevel === "medium"){
      return <FontAwesomeIcon icon="thermometer-half" color="orange" size="lg"/>
    } else {
      return <FontAwesomeIcon icon="thermometer-quarter" color="#a8d063" size="lg"/>
    }
  }