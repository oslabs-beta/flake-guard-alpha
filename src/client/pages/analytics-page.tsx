import React from 'react';
import NavBarHeading from './nav-bar';
import FlakeRiskContainer from '../components/FlakeRiskSign/FlakeRiskContainer';

const Analytics: React.FC = () => {
  return (
    <>
      <div>
        <NavBarHeading />
      </div>
      <div>Analytics info</div>
      <FlakeRiskContainer />
    </>
  );
};

export default Analytics;
