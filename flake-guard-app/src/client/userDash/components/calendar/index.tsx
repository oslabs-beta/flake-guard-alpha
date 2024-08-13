import React from 'react';
import Sidebar from '../Sidebar';
import {CalendarData} from './data';
import Calendar from './Calendar';
import '../../../styles/dashboard/charts.css'

const CalendarPage: React.FC = () => {
  // console.log('ata from indexedDB', CalendarData);
  return (
    <div className='calendar-container'>
      <Sidebar />
      <div className='calendar-graph' style={{ height: '350px' , width:'800px'}}> 
        <Calendar CalendarData={CalendarData} />
      </div>
    </div>
  );
};

export default CalendarPage;
