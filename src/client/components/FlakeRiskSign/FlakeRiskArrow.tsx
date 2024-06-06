interface ArrowPositions {
  low: number;
  moderate: number;
  high: number;
  veryHigh: number;
  extreme: number;
}

const FlakeRiskArrow = (): JSX.Element => {
  const positions: ArrowPositions = {
    low: -72,
    moderate: -36,
    high: 0,
    veryHigh: 36,
    extreme: 72,
  };
  return (
    <div
      className="flakeRiskArrow"
      style={{transform: `rotate(${positions.low}deg)`}}
    ></div>
  );
};

export default FlakeRiskArrow;
