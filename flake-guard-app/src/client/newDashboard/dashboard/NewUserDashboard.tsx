import React from 'react';
import {useEffect, useState} from 'react';
import {api} from '../../services/index';
import {useParams} from 'react-router-dom';
import Sidebar from '../global/Sidebar';
import '../../../styles/dashboard/newDashboard.css';
import PieChart from '../components/pie/PieChart';
import Calendar from '../components/calendar/Calendar';
import {fakeData} from '../components/pie/data'; //data for PieChart
import {CalendarData} from '../components/calendar/data'; //data for Calendar
import LineChart from '../components/line/LineChart';
import { result } from 'lodash';

const NewUserDashboard: React.FC = () => {
  const {userId} = useParams();
  const [results, setResults] = useState([]);

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
  }, []);

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
          <div
            className="calendar-graph graph-style"
            style={{height: '350px', width: '60%'}}
          >
            <Calendar CalendarData={CalendarData} />
          </div>
        </div>
        <div className="bottom-content">
          {/* BOTTOM CONTENT  */}
          <div
            className="linechart-graph graph-style"
            style={{height: '450px', width: '850px'}}
          >
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserDashboard;
