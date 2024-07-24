// @ts-nocheck

import React, {useEffect, useState} from 'react';
import {ResponsiveLine} from '@nivo/line';
import {lineChartParser} from '../../../utilities/lineChartParser';

const LineChart: React.FC = ({results}) => {
  const [lineChartData, setLineChartData] = useState([]);

  useEffect(() => {
    const chartData = lineChartParser(results);
    // console.log('Parsed Chart Data:', chartData);
    if (Array.isArray(chartData)) setLineChartData(chartData);
  }, [results]);

  return (
    <ResponsiveLine
      data={[{id: 'flake', color: 'hsl(144, 70%, 50%)', data: lineChartData}]}
      margin={{top: 50, right: 110, bottom: 50, left: 60}}
      xScale={{type: 'point'}}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'date',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'flake percentage (%)',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{theme: 'background'}}
      pointBorderWidth={2}
      pointBorderColor={{from: 'serieColor'}}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;

