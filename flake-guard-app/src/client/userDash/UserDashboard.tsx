// @ts-nocheck

import React, {useEffect, useState, useContext} from 'react';
import Sidebar from './components/Sidebar';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../styles/dashboard/newDashboard.css';
import PieChart from './components/pie/PieChart';
import Calendar from './components/calendar/Calendar';
import BarChart from './components/bar/BarChart';
import ErrorsDetails from './components/errorsDetails/ErrorsDetails';
import {CalendarData} from './components/calendar/data'; // data for Calendar
import LineChart from './components/line/LineChart';
import {flakyDataParser} from '../utilities/flakyDataParser';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import LoginButton from '../landingPage/components/LoginButton';
import Duration from './components/duration/Duration';
import { ResultsContext } from './contexts/ResultContext';
import { barChartParser } from '../utilities/barchartDataParser';

const UserDashboard: React.FC = () => {
  const [flakytData, setFlakyData] = useState([]);
  //Uses the state from the ResultsContext
  const results = useContext(ResultsContext)

  // Parses data for the bar chart 
  const [barChartData, setBarChartData] = useState([]);
  useEffect(() => {
      const chartData = barChartParser(results);
      const latestRun = chartData.slice(-20); //Display the last 20 runs
      // console.log('Parsed BAR Chart Data:', latestRun);
      if (Array.isArray(latestRun)) setBarChartData(latestRun);
  }, [results]);

  

  console.log('BARCHART ', barChartData)


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
      <div className="sidebar-container">
      <Sidebar />
      </div>
      <div className="dashboard-content">
        <div className='dashboard-title'>
          <h2 >DASHBOARD</h2>
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
          <div className="barchart-container">
            <div
              className="barchart-graph graph-style"
              style={{height: '350px', width: '99%'}}
            >
              <BarChart barChartData={barChartData}/>
            </div>
          </div>
        </div>
          
        {/* BOTTOM CONTENT */}
        <div className='middle-content'>
          <div className="linechart-container graph-style" >
            <div
              className="linechart-graph "
              style={{width:"100%", height:"100%"}}>
              <LineChart results={results} />
            </div>
          </div>
          <div className="duration-container graph-style" style={{width:"50%", height:"240px"}}>
              <Duration results={results}/>
          </div>
        </div>
        <div className='bottom-content'>
          <div className='graph-style errors-details-container'> 
            <p className='errors-title'>Logs</p>
            <div className="errors-details-graph" >
              <ErrorsDetails results={results} />
            </div>
          </div>
          <div style={{height:'250px', width: '50%'}}>
            <div className='bottom-right-section graph-style' style={{height: "365px", width: '100%'}}>
              <div className=" calendar-container" >
                <Calendar CalendarData={CalendarData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
