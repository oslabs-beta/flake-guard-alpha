//@ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import { ResultsContext } from '../../contexts/ResultContext';
import { flakyDataParser } from '../../../utilities/flakyDataParser';

interface DataItem {
  value: number;
  day: string;
}

interface DataProps {
  CalendarData: DataItem[];
}

const Calendar: React.FC<DataProps> = () => {
  const [calendarData, setCalendarData] = useState<DataItem[]>([]);
  const results = useContext(ResultsContext);

  useEffect(() => {
    const chartData = flakyDataParser(results);
    const dataMap: { [key: string]: number } = {};

    chartData.forEach((item: { date: string; flaky: number }) => {
      dataMap[item.date] = (dataMap[item.date] || 0) + item.flaky;
    });

    const calendarDataArray = Object.keys(dataMap).map(date => ({
      day: date,
      value: dataMap[date]
    }));

    setCalendarData(calendarDataArray);

  }, [results]);

  console.log('results Calendar', calendarData);

  return (
    <>
      {calendarData.length > 0 &&
        <ResponsiveCalendar
          data={calendarData}
          from="2024-01-01"
          to="2024-12-31"
          emptyColor="#eeeeee"
          colors={[ '#61cdbb', '#fead6a', '#dc8946', '#f47560' ]}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
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
      }
    </>
  );
};

export default Calendar;
