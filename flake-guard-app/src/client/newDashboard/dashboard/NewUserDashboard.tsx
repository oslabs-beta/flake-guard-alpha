// @ts-nocheck

import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {api} from '../../services/index';
import Sidebar from '../global/Sidebar';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../../../styles/dashboard/newDashboard.css';
import PieChart from '../components/pie/PieChart';
import Calendar from '../components/calendar/Calendar';
import {fakeData} from '../components/pie/data'; // data for PieChart
import {CalendarData} from '../components/calendar/data'; // data for Calendar
import LineChart from '../components/line/LineChart';
import {flakyDataParser} from '../../utilities/flakyDataParser';
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap';

const NewUserDashboard: React.FC = () => {
  const {userId} = useParams();
  const [results, setResults] = useState([]);
  const [flakytData, setFlakyData] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const results = await api.get(`/userDash/${userId}`);
        const resultsArray = results.data;
        // add a yyyy-mm-dd date to each result
        for (const result of resultsArray) {
          const ts = result.created_at;
          result.date = ts.slice(0, ts.indexOf('T'));
        }
        // console.log('RESULTS USERDASH --->', resultsArray);
        setResults(resultsArray);
      } catch (error) {
        console.log('Error getting results: ', error);
      }
    };
    getResults();
  }, [userId]);

  // Data from utilities.js
  useEffect(() => {
    const chartData = flakyDataParser(results);
    if (Array.isArray(chartData)) {
      const latestRun = chartData[chartData.length - 1]; // outputs latest run
      if (latestRun) {
        // Adding leading zero to number less than 10
        if (latestRun.flaky < 10) {
          latestRun.flaky = latestRun.flaky.toString().padStart(2, '0');
          latestRun.alwaysFail = latestRun.alwaysFail
            .toString()
            .padStart(2, '0');
          latestRun.totalTests = latestRun.totalTests
            .toString()
            .padStart(2, '0');
        }
      }
      setFlakyData(latestRun);
    }
  }, [results]);

  console.log('flakyData', flakytData);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h3>DASHBOARD</h3>
        <div className="top-content">
          <div
            className="piechart-graph graph-style"
            style={{height: '350px', width: '30%'}}
          >
            <PieChart piechartData={fakeData} />
          </div>
          <div className="flakiness-details">
            <div className="graph-style flakiness-box">
              <div className="flakiness-box-title">
                <p>Flakiness</p>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-right">
                      Tests that occasionally fails without any changes in the
                      codebase, indicating unreliable behavior.
                    </Tooltip>
                  }
                  placement="right"
                >
                  <p className='info-icon'>
                    <InfoOutlinedIcon />
                  </p>
                </OverlayTrigger>
              </div>
              {flakytData && (
                <div>
                  <h3>{flakytData.flaky}</h3>
                  <p className="flakiness-text">
                    {flakytData.flaky} out of {flakytData.totalTests} tests are
                    flaky
                  </p>
                </div>
              )}
            </div>
            <div className="graph-style flakiness-box">
              <p className="flakiness-box-title">
                Always failing <InfoOutlinedIcon fontSize="small" />
              </p>
              {flakytData && (
                <div>
                  <h3>{flakytData.alwaysFail}</h3>
                  <p className="flakiness-text">
                    {flakytData.alwaysFail} out of {flakytData.totalTests} tests
                    are always failing
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className="calendar-graph graph-style"
            style={{height: '350px', width: '50%'}}
          >
            <Calendar CalendarData={CalendarData} />
          </div>
        </div>
        <div className="bottom-content">
          {/* BOTTOM CONTENT */}
          <div
            className="linechart-graph graph-style"
            style={{height: '250px', width: '650px'}}
          >
            <LineChart results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserDashboard;
