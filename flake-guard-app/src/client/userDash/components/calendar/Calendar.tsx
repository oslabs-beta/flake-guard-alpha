import React from 'react';
import {ResponsiveCalendar} from '@nivo/calendar';

interface DataItem {
  value: number;
  day: string;
}

interface DataProps {
  CalendarData: DataItem[];
}

const getColor = (value: number): string => {
  if (value >= 100) return 'red'; 
  if (value >= 50) return 'orange';
  if (value >= 25) return '#e8c1a0';
  return '#1fbd4f'; 
};
// OUTPUT ONLY THE CURRENT YEAR <--------
const Calendar: React.FC<DataProps> = ({CalendarData}) => {
  // console.log('data from CalendarData', CalendarData);
  return (
    <ResponsiveCalendar
      data={CalendarData}
      from="2024-01-01"
      to="2024-12-31"
      emptyColor="#eeeeee"
      //the 1st color represents lower values and the last color represents higher values
      colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']} 
      margin={{top: 40, right: 40, bottom: 40, left: 40}}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: 'right-to-left',
        },
      ]}
    />
  );
};

export default Calendar;
