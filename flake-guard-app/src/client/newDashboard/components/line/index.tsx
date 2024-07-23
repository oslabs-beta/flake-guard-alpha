import React, {useEffect} from 'react';
import Sidebar from '../../global/Sidebar';
import '../../../../styles/dashboard/charts.css';
import LineChart from './LineChart';
import {linechartData} from './data';
import {lineChartParser} from '../../../utilities';

const LineChartPage: React.FC = () => {
  console.log('linehcart -->', lineChartParser);

  useEffect(() => {});

  return (
    <div className="linechart-container">
      <Sidebar />
      <div className="linechart-graph" style={{height: '400px', width: '100%'}}>
        {/* <LineChart linechartData={linechartData} /> */}
      </div>
    </div>
  );
};

export default LineChartPage;
