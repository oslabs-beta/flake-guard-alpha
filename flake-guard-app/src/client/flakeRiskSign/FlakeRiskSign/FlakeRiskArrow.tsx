import React, { useEffect } from 'react';

interface ArrowPositions {
  low: number;
  moderate: number;
  high: number;
  veryHigh: number;
  extreme: number;
}

interface FlakeRiskArrowProps {
  flakePercent: number | undefined;
}

const FlakeRiskArrow: React.FC<FlakeRiskArrowProps> = ({ flakePercent }): JSX.Element => {
  const positions: ArrowPositions = {
    low: -72,
    moderate: -36,
    high: 0,
    veryHigh: 36,
    extreme: 72,
  };

  const getArrowStyle = () => {
    if (flakePercent === undefined) return {};

    if (flakePercent < 5) return { transform: `rotate(${positions.low}deg)` };
    if (flakePercent >= 5 && flakePercent < 10) return { transform: `rotate(${positions.moderate}deg)` };
    if (flakePercent >= 10 && flakePercent < 20) return { transform: `rotate(${positions.high}deg)` };
    if (flakePercent >= 20 && flakePercent <= 30) return { transform: `rotate(${positions.veryHigh}deg)` };
    return { transform: `rotate(${positions.extreme}deg)` };
  };

  return (
    <div className="flakeRiskArrow" style={getArrowStyle()}></div>
  );
};

export default FlakeRiskArrow;
