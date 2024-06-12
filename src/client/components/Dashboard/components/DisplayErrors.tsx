import React, {useState} from 'react';

interface MetricsData {
  fullName: string;
  passed: number;
  failed: number;
  skipped: number;
}

interface AssertionsGraphProps {
  fetchResults: MetricsData[] | undefined;
}

const DisplayErrors: React.FC<AssertionsGraphProps> = ({fetchResults}) => {
  const [showDetails, setShowDetails] = useState<boolean[]>([]);

  const handleToggleDetails = (index: number) => {
    const updatedShowDetails = [...showDetails];
    updatedShowDetails[index] = !updatedShowDetails[index];
    setShowDetails(updatedShowDetails);
  };

  return (
    <div>
      <h2>Test Results</h2>
      {fetchResults ? (
        <ul>
          {fetchResults.map((result, index) => (
            <li key={index}>
              <button onClick={() => handleToggleDetails(index)}>
                {result.fullName}
              </button>
              {showDetails[index] && (
                <div>
                  <p>Passed: {result.passed}</p>
                  <p>Failed: {result.failed}</p>
                  <p>Skipped: {result.skipped}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DisplayErrors;
