// @ts-nocheck

import { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { barChartParser } from '../../../utilities/barchartDataParser';

const BarChart: React.FC<{ results: any }> = ({ results }) => {
    const [barChartData, setBarChartData] = useState([]);

    useEffect(() => {
        const chartData = barChartParser(results);
        const latestRun = chartData.slice(-20); //Display the last 20 runs
        // console.log('Parsed BAR Chart Data:', latestRun);
        if (Array.isArray(latestRun)) setBarChartData(latestRun);
    }, [results]);

    return (
        <ResponsiveBar
            data={barChartData}
            keys={['passed', 'failed', 'skipped']}
            indexBy="id"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={({ id, data }) => {
                switch (id) {
                    case 'passed':
                        return data.passedColor || 'green'; 
                    case 'failed':
                        return data.failedColor || 'red'; 
                    case 'skipped':
                        return data.skippedColor || 'grey'; 
                    default:
                        return 'black'; 
                }
            }}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 1.6]]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'tests (id)',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'runs',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
        />
    );
};

export default BarChart;
