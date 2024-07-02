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
import FlakeRiskContainer from '../FlakeRiskSign/FlakeRiskContainer';
import {failedPercentage} from '../Analytics/overall-failed-percentage';
import {assertionFailedPercent} from '../Analytics/assertion-failures-percent';
// import FlakeGauge from './components/FlakeGauge';

const Dashboard = (): JSX.Element => {
  const [metrics, setMetrics] = useState<{[key: string]: number} | undefined>(
    undefined
  );
  const [fetchResults, setFetchResults] = useState([]);
  const [flakePercentage, setFlakePercentage] = useState<number | undefined>(
    undefined
  );

  const {id} = useParams();
  console.log('id', id);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // remove get request from db - will add conditional later for permanent users
        // const response = await api.get('/results/');

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
        <h1 id="dashboard-header">Flake-Guard Dashboard</h1>
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
                <div className="trends-dash">{/* <Trends /> */}</div>
              </div>
            </div>
          </div>
          <div className="display-errors-container">
            <DisplayErrors fetchResults={fetchResults} />
          </div>
        </div>
        {flakePercentage !== undefined && (
          <div>
            <h2>Assertion Flakiness: </h2>
            <p>{calculateFlakePercentage(fetchResults)}%</p>
          </div>
        )}
        {flakePercentage !== undefined && (
          <div>
            <h2>Test Suite Failures: </h2>
            <p>{failedPercentage(fetchResults)}%</p>
          </div>
        )}
        {/* {flakePercentage !== undefined && (
          <div>
            <h2>100% Failure: </h2>
            <p>{assertionFailedPercent(fetchResults)}%</p>
          </div>
        )} */}
      </div>
      <div id="analytics-container">
        {/* <FlakeGauge /> */}
        <FlakeRiskContainer />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
// import React, {useEffect, useState} from 'react';
// import {api} from '../../services/index';
// import '../../../styles/dashboard.css';
// import Summary from './components/Summary';
// import AssertionsGraph from './components/AssertionsGraph';
// import DisplayErrors from './components/DisplayErrors';
// import Trends from './components/Trends';
// import NavBarHeading from '../nav-bar';
// import Footer from '../footer';
// import {calculateFlakePercentage} from '../Analytics/flake-percentage';
// import FlakeRiskContainer from '../FlakeRiskSign/FlakeRiskContainer';
// import {failedPercentage} from '../Analytics/overall-failed-percentage';
// import {assertionFailedPercent} from '../Analytics/assertion-failures-percent';
// import {TestResult, MetricsData} from '../../types';

// const Dashboard = (): JSX.Element => {
//   const [metrics, setMetrics] = useState<{[key: string]: number} | undefined>(
//     undefined
//   );
//   const [fetchResults, setFetchResults] = useState<TestResult[]>([]);
//   const [flakePercentage, setFlakePercentage] = useState<number | undefined>(
//     undefined
//   );
//   const [failingAssertions, setFailingAssertions] = useState<
//     string[] | undefined
//   >(undefined);

//   useEffect(() => {
//     const fetchMetrics = async () => {
//       try {
//         const response = await api.get('/results');
//         const results: TestResult[] = response.data;
//         setFetchResults(results);

//         const flakePercentage = calculateFlakePercentage(results);
//         setFlakePercentage(flakePercentage);

//         let totalPassed = 0;
//         let totalFailed = 0;
//         let totalSkipped = 0;

//         for (const result of results) {
//           totalPassed += result.passed;
//           totalFailed += result.failed;
//           totalSkipped += result.skipped;
//         }

//         const labelsArr = {
//           passed: totalPassed,
//           failed: totalFailed,
//           skipped: totalSkipped,
//         };

//         setMetrics(labelsArr);

//         const failingAssertionsList = assertionFailedPercent(results);
//         setFailingAssertions(failingAssertionsList);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchMetrics();
//   }, []);

//   return (
//     <>
//       <NavBarHeading />
//       <div className="dashboard-container">
//         <h1 id="dashboard-header">Flake-Guard Dashboard</h1>
//         <div className="dashboard-items">
//           <div className="upper-dash">
//             <div className="summary-dash">
//               {metrics && <Summary metrics={metrics} />}
//             </div>
//             <div>
//               <div className="bar-dash">
//                 {metrics && <AssertionsGraph fetchResults={fetchResults} />}
//               </div>
//               <div>
//                 <div className="trends-dash">
//                   <Trends />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="display-errors-container">
//             <DisplayErrors fetchResults={fetchResults} />
//           </div>
//         </div>
//         {flakePercentage !== undefined && (
//           <div>
//             <h2>Overall Test Flakiness: </h2>
//             <p>{flakePercentage}%</p>
//           </div>
//         )}
//         {flakePercentage !== undefined && (
//           <div>
//             <h2>Overall Test Failures: </h2>
//             <p>{failedPercentage(fetchResults)}%</p>
//           </div>
//         )}
//         {failingAssertions !== undefined && (
//           <div>
//             <h2>100% Failing Assertions: </h2>
//             {failingAssertions.length > 0 ? (
//               <ul>
//                 {failingAssertions.map((assertionName, index) => (
//                   <li key={index}>{assertionName}</li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No assertions are failing 100% of the time.</p>
//             )}
//           </div>
//         )}
//       </div>
//       <div id="analytics-container">
//         <FlakeRiskContainer />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Dashboard;
