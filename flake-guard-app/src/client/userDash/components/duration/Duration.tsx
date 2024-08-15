// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { displayErrorsDataParser } from '../../../utilities/displayErrorsDataParser';
import '../../../styles/dashboard/charts.css';

import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';


const Duration = ({ results }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const chartData = displayErrorsDataParser(results);
        const latestRun = chartData.slice(-1); // Display the latest run
        const latestRunObj = latestRun[0];
        
        if (latestRunObj) {
            const formattedData = latestRunObj.durations.map((duration, index) => ({
                name: `${index + 1}`,
                ms: duration
            }));
            setData(formattedData);
        }
    }, [results]);

    // console.log('dataaaa', data);
    return (
       <div className="duration-graph "
        style={{width:"90%", height:"90%"}}>
        <p className='duration-title'>Execution duration (ms)</p>
         <ResponsiveContainer >
            <ComposedChart
                width={300}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip/>
                <Bar dataKey="ms" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="ms" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Duration;
