import React, {useEffect, useState} from 'react';
import {api} from '../../services/index';
import '../../../styles/dashboard.css';
import Summary from './components/Summary';
import AssertionsGraph from './components/AssertionsGraph';
import DisplayErrors from './components/DisplayErrors';
import Trends from './components/Trends';
import {useParams} from 'react-router-dom';
import NavBarHeading from '../nav-bar';
import Footer from '../footer';
import {calculateFlakePercentage} from '../Analytics/flake-percentage';
import Analytics from '../Analytics/analytics-page';

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<{[key: string]: number} | undefined>(
    undefined
  );
  const [fetchResults, setFetchResults] = useState<any[]>([]);
  const [flakePercentage, setFlakePercentage] = useState<number | undefined>(
    undefined
  );

  const {id} = useParams();
  console.log('id', id);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // remove get request from db - will add conditional later for permanent users
        // const response = await api.get('/results');

        const response = await api.get(`/tempDash/${id}`);
        const results = response.data;
        console.log('retrieved cached results', results);
        setFetchResults(results);

        const flakePercentage = calculateFlakePercentage(results); // Calculate flake percentage
        setFlakePercentage(flakePercentage); // Set flakePercentage state

        let totalPassed = 0;
        let totalFailed = 0;
        let totalSkipped = 0;

        for (const result of results) {
          totalPassed += result.passed;
          totalFailed += result.failed;
          totalSkipped += result.skipped;
        }

        const labelsArr = {
          passed: totalPassed,
          failed: totalFailed,
          skipped: totalSkipped,
        };

        setMetrics(labelsArr); // Set metrics state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <>
      <NavBarHeading />
      <div className="dashboard-container">
        <h1>Flake-Guard Dashboard</h1>
        <div className="dashboard-items">
          <div className="upper-dash">
            <div className="summary-dash">
              {metrics && <Summary metrics={metrics} />}
            </div>
            <div>
              <div className="bar-dash">
                {metrics && <AssertionsGraph fetchResults={fetchResults} />}
              </div>
              <div>
                <div className="trends-dash">
                  <Trends />
                </div>
              </div>
            </div>
          </div>
          <div className="display-errors-container">
            <DisplayErrors fetchResults={fetchResults} />
          </div>
        </div>
        {flakePercentage !== undefined && (
          <Analytics flakePercentage={flakePercentage} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
