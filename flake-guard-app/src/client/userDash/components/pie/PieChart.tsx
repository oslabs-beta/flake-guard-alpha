// @ts-nocheck

import React = require('react');
import { useState, useEffect } from 'react';
import {ResponsivePie} from '@nivo/pie';
import {flakyDataParser} from '../../../utilities/flakyDataParser'



const PieChart: React.FC = ({results}) => {
  const [piechartResults, setPiechartResults] = useState([]);
  const [flakyCount, setFlakyCount] = useState([]);


  useEffect(() => {
    const chartData = flakyDataParser(results);
    const latestRun = chartData[chartData.length - 1];//selects latest run
    const PieResults = [];
    let flakyTests = [];
    // console.log('Parsed PIE Chart Data: ---->', latestRun); 
    for (let key in latestRun) {
      const data = {};
      if (key === 'alwaysPass') {
        data.id = 'passed';
        data.label = 'passed';
        data.value = latestRun[key];
        data.color = 'hsl(134, 61%, 41%)'
        PieResults.push(data);
      } else if (key === 'alwaysFail') {
        data.id = 'failed';
        data.label = 'failed';
        data.value = latestRun[key];
        data.color = 'hsl(354, 87%, 56%)'
        PieResults.push(data);
      } else if (key === 'skipped') {
        data.id = 'skipped';
        data.label = 'skipped';
        data.value = latestRun[key];
        data.color = 'hsl(0, 0%, 71%)'
        PieResults.push(data);
      } else if (key === 'flaky') {
        data.flakyTestsNum = latestRun[key]
        flakyTests.push(data)
      } else {
        data.totalTests = latestRun[key]
        flakyTests.push(data)
      }
    }
    if (Array.isArray(chartData)) {
      setPiechartResults(PieResults);
      setFlakyCount(flakyTests)
    }
  }, [results]);

return (
  <>
    <ResponsivePie
      data={piechartResults}
      colors={({ data }) => data.color}
      margin={{top: 40, right: 80, bottom: 80, left: 80}}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{from: 'color'}}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'ruby',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'c',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'go',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'python',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'scala',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'lisp',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'elixir',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'javascript',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
    {flakyCount[0] && 
    <div className="flaky-count">
      <p>{flakyCount[1].flakyTestsNum}/{flakyCount[2].totalTests} are flaky</p>
    </div>
    }
    </>
  );
};

export default PieChart;
