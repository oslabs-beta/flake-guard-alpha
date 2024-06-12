import React, { useState } from 'react';
import arrow from '../../../assets/arrow.png';

interface MetricsData {
  fullName: string;
  passed: number;
  failed: number;
  skipped: number;
}

interface AssertionsGraphProps {
  fetchResults: MetricsData[] | undefined;
}

const DisplayErrors: React.FC<AssertionsGraphProps> = ({ fetchResults }) => {
  const [showDetails, setShowDetails] = useState<boolean[]>([]);
  const [arrowDirections, setArrowDirections] = useState<boolean[]>([]);

  const handleToggleDetails = (index: number) => {
    const updatedShowDetails = [...showDetails];
    updatedShowDetails[index] = !updatedShowDetails[index];
    setShowDetails(updatedShowDetails);

    const updatedArrowDirections = [...arrowDirections];
    updatedArrowDirections[index] = !updatedArrowDirections[index];
    setArrowDirections(updatedArrowDirections);
  };

  return (
    <div className="display-errors-container">
      <h2>Test Results</h2>

      <div className="errors-dash">
        <p>ERROR</p>
        {fetchResults ? (
          <ul>
            {fetchResults.map((result, index) => (
              <ol key={index}>
                <img
                  src={arrow}
                  alt="arrow"
                  style={{
                    width: '12px',
                    marginRight: '10px',
                    transform: arrowDirections[index] ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                />
                <button
                  onClick={() => {
                    handleToggleDetails(index);
                  }}
                >
                  {result.fullName}
                </button>
                <div className="errors-details">
                  {showDetails[index] && (
                    <div>
                      <p>Passed: {result.passed}</p>
                      <p>Failed: {result.failed}</p>
                      <p>Skipped: {result.skipped}</p>
                    </div>
                  )}
                </div>
              </ol>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
      {/* <div className="outer button">
        <button>Hover Me</button>
        <span></span>
      </div> */}
    </div>
  );
};

export default DisplayErrors;
