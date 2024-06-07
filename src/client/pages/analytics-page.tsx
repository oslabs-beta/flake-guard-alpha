import React from 'react';
import FlakeRiskContainer from '../components/FlakeRiskSign/FlakeRiskContainer';
import NavBarHeading from '../components/nav-bar';

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
