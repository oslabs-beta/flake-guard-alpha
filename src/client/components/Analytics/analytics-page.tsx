import React from 'react';
import {useNavigate} from 'react-router-dom';
import FlakeRiskContainer from '../FlakeRiskSign/FlakeRiskContainer';
import Footer from '../footer';
import {calculateFlakePercentage} from './flake-percentage';

interface AnalyticsProps {
  flakePercentage: number | undefined;
}

const Analytics: React.FC<AnalyticsProps> = ({flakePercentage}) => {
  const navigate = useNavigate();

  const handleDashboard = (): void => {
    navigate('/dashboard'); // Navigate to the Dashboard endpoint
  };
  return (
    <>
      <button onClick={handleDashboard}>Back to Dashboard</button>

      <div id="analytics-container">
        <h2>Analytics Page</h2>
        {flakePercentage !== undefined ? (
          <p>Flake Percentage: {flakePercentage.toFixed(2)}%</p>
        ) : (
          <p>Loading...</p>
        )}
        <FlakeRiskContainer />
      </div>
    </>
  );
};

export default Analytics;
