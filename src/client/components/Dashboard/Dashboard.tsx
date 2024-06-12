import React, {useEffect, useState} from 'react';
import {api} from '../../services/index';
import '../../../styles/dashboard.css';
import Summary from './components/Summary';

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<{[key: string]: number} | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await api.get('/results');
        const results = response.data;
        console.log(results);
        const labelsArr: {[key: string]: number} = {};
        for (let i = 0; i < results.length; i++) {
          labelsArr['passed'] = (labelsArr['passed'] || 0) + results[i].passed;
          labelsArr['failed'] = (labelsArr['failed'] || 0) + results[i].failed;
          labelsArr['skipped'] =
            (labelsArr['skipped'] || 0) + results[i].skipped;
        }

        setMetrics(labelsArr);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Flake-Guard Dashboard</h1>
      <div className="summary-dash">
        {metrics && <Summary metrics={metrics} />}
      </div>
    </div>
  );
};

export default Dashboard;
