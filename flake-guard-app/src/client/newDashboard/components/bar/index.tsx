import React from 'react';
import Sidebar from '../../global/Sidebar';
import '../../../../styles/dashboard/charts.css'

const BarChartPage: React.FC = () => {
  // console.log('ata from indexedDB', CalendarData);
  return (
    <div className='calendar-container'>
      <Sidebar />
    </div>
  );
};

export default BarChartPage;
