// @ts-nocheck

import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {api} from '../../services/index';
import Sidebar from '../global/Sidebar';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../../../styles/dashboard/newDashboard.css';
import PieChart from '../components/pie/PieChart';
import Calendar from '../components/calendar/Calendar';
import BarChart from '../components/bar/BarChart';
import ErrorsDetails from '../components/errorsDetails/ErrorsDetails';
import {CalendarData} from '../components/calendar/data'; // data for Calendar
import { barchartData } from '../components/bar/data';
import LineChart from '../components/line/LineChart';
import {flakyDataParser} from '../../utilities/flakyDataParser';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import LoginButton from '../../components/Login/LoginButton';
import Duration from '../components/duration/Duration';

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
        console.log('RESULTS USERDASH --->', resultsArray);
        setResults(resultsArray);
      } catch (error) {
        console.log('Error getting results: ', error);
      }
    };
    getResults();
  }, [userId]);

  // Data for 'Flakiness and Always Failing' boxes
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

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <div className='dashboard-title'>
          <h3 >DASHBOARD</h3>
          <LoginButton />
        </div>
        <div className="top-content">
          <div className='piechart-container graph-style'>
          <div
            className="piechart-graph "
            style={{height: '310px', width: '100%'}}
          >
            <PieChart results={results} />
          </div>
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
                  <p className="info-icon">
                    <InfoOutlinedIcon />
                  </p>
                </OverlayTrigger>
              </div>
              {flakytData && (
                <div className="flaky-metrics">
                  <h3>{flakytData.flaky}</h3>
                  <p className="flakiness-text">
                    {flakytData.flaky} out of {flakytData.totalTests} tests are
                    flaky
                  </p>
                </div>
              )}
            </div>
            <div className="graph-style flakiness-box">
              <div className="flakiness-box-title">
                <p>Always failing</p>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-right">
                      Consistently produces a failure result every time it is
                      executed, indicating a persistent issue in the code or
                      test setup.
                    </Tooltip>
                  }
                  placement="right"
                >
                  <p className="info-icon">
                    <InfoOutlinedIcon />
                  </p>
                </OverlayTrigger>
              </div>
              {flakytData && (
                <div className="flaky-metrics">
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
            <BarChart results={results}/>
          </div>
        </div>
        <div className="bottom-content">
          
          {/* BOTTOM CONTENT */}
          <div className='upper-bottom-content'>
            <div
              className="linechart-graph graph-style"
              style={{height: '250px', width: '60%'}}
            >
              <LineChart results={results} />
            </div>
            <Duration results={results}/>

          </div>
          <div className='graph-style errors-details'  style={{height: '350px', width: '50%'}}> 
            <p className='errors-title'>Errors</p>
            <ErrorsDetails results={results}/>
          </div>
          {/* <Calendar CalendarData={CalendarData} /> */}

        </div>
      </div>
    </div>
  );
};

export default NewUserDashboard;



// created_at: "2024-07-16T12:09:39.005Z"
// date: "2024-07-16"
// id: "18"
// results: 
//   metrics: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
//   verbose: Array(2)
//     0: 
//     numFailedTestSuites: 1
//     numFailedTests: 0
//     numPassedTestSuites: 0
//     numPassedTests: 1
//     numPendingTestSuites: 0
//     numPendingTests: 7
//     numRuntimeErrorTestSuites: 1
//     numTodoTests: 0
//     numTotalTestSuites: 1
//     numTotalTests: 8
//     openHandles: []
//     snapshot: {added: 0, didUpdate: false, failure: false, filesAdded: 0, filesRemoved: 0, …}
//     startTime: 1721131756368
//     success: false
//     falsetestResults: [{…}]
//     wasInterrupted: false