import React from 'react';
import Sidebar from '../../global/Sidebar';
import {fakeData} from './data';
import '../../../../styles/dashboard/charts.css';
import PieChart from './PieChart';

const PieChartPage: React.FC = () => {
  console.log('ata from indexedDB', fakeData);
  return (
    <div className="piechart-container">
      <Sidebar />
      <div className="piechart-graph" style={{height: '350px', width: '800px'}}>
        <PieChart piechartData={fakeData} />
      </div>
    </div>
  );
};

export default PieChartPage;
