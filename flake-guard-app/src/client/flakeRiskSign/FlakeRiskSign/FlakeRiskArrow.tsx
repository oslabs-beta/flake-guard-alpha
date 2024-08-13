import React from 'react';
interface ArrowPositions {
  low: number;
  moderate: number;
  high: number;
  veryHigh: number;
  extreme: number;
}
// import calculateFlakePercentage from '../Analytics/flake-percentage';

const FlakeRiskArrow = (): JSX.Element => {
  //const flakePercent = props.flakepercentage
  const flakePercent: number = 1.0;

  const positions: ArrowPositions = {
    low: -72,
    moderate: -36,
    high: 0,
    veryHigh: 36,
    extreme: 72,
  };

  return (
    <>
      {flakePercent < 0.2 && (
        <div
          className="flakeRiskArrow"
          style={{transform: `rotate(${positions.low}deg)`}}
        ></div>
      )}
      {flakePercent >= 0.2 && flakePercent < 0.3 && (
        <div
          className="flakeRiskArrow"
          style={{transform: `rotate(${positions.moderate}deg)`}}
        ></div>
      )}
      {flakePercent >= 0.3 && flakePercent < 0.5 && (
        <div
          className="flakeRiskArrow"
          style={{transform: `rotate(${positions.high}deg)`}}
        ></div>
      )}
      {flakePercent >= 0.5 && flakePercent <= 0.65 && (
        <div
          className="flakeRiskArrow"
          style={{transform: `rotate(${positions.veryHigh}deg)`}}
        ></div>
      )}
      {flakePercent >= 0.65 && (
        <div
          className="flakeRiskArrow"
          style={{transform: `rotate(${positions.extreme}deg)`}}
        ></div>
      )}
    </>
  );
};

export default FlakeRiskArrow;
