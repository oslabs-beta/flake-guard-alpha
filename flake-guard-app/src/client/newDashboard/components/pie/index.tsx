import React from 'react';
import Sidebar from '../../global/Sidebar';
import {fakeData} from './data';
import '../../../../styles/dashboard/charts.css';
import PieChart from './PieChart';

const PieChartPage: React.FC = () => {
  console.log('ata from indexedDB', fakeData);
  return (
    <div >
      <Sidebar />
    
    </div>
  );
};

export default PieChartPage;
