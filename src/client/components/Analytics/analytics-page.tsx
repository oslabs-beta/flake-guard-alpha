import React from 'react';
import FlakeRiskContainer from '../FlakeRiskSign/FlakeRiskContainer';
import NavBarHeading from '../nav-bar';

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
