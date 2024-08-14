import {useEffect, useState} from 'react';
import {api} from '../services/index';
import '../styles/dashboard.css';
import Summary from './components/Summary';
import AssertionsGraph from './components/AssertionsGraph';
import DisplayErrors from './components/DisplayErrors';
import {useParams} from 'react-router-dom';
import NavBarHeading from '../landingPage/components/NavBar';
import Footer from '../landingPage/components/Footer';
import {calculateFlakePercentage} from '../flakeRiskSign/Analytics/flake-percentage';
import FlakeRiskContainer from '../flakeRiskSign/FlakeRiskSign/FlakeRiskContainer';
import '../styles/tempDash.css';

const TempDashboard = (): JSX.Element => {
  const [metrics, setMetrics] = useState<{[key: string]: number} | undefined>(
    undefined
  );
  const [fetchResults, setFetchResults] = useState([]);
  const [flakePercentage, setFlakePercentage] = useState<number | undefined>(
    undefined
  );  

  const {id} = useParams();

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // remove get request from db - will add conditional later for permanent users
        // const response = await api.get('/results/');

        const response = await api.get(`/tempDash/${id}`);
        await api.delete(`/tempDash/${id}`);
        const results = response.data;
        console.log('retrieved cached results', results);
        setFetchResults(results);

        const flakePercentage = calculateFlakePercentage(results); // Calculate flake percentage
        console.log('FLAKE PERCENTAGE--->', flakePercentage);
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

        console.log('METRICS--->', metrics);
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
        <div className="dashboard-items">
          <div className='firstRow'>
            <div className="tempDashSummary">
              {metrics && <Summary metrics={metrics} />}
            </div>
            <div className='tempDashRisk'>
              <FlakeRiskContainer flakePercent={flakePercentage}/>
            </div>
          </div>
          <div className='secondRow'>
          {metrics && <AssertionsGraph fetchResults={fetchResults} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TempDashboard;
