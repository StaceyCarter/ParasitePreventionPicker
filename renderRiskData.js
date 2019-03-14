import React from "react";
import { riskImageDetector } from "./riskImageDecider";

export const RenderRiskData = ({ risk, percentage }) => (
  <div>
    <p>
      Risk: {risk} {riskImageDetector(risk)}.
    </p>
    <p>{percentage}% of animals tested positive in your area.</p>
  </div>
);
