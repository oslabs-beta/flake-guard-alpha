import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface AssertionsGraphProps {
  fetchResults: number;
}

const Flakiness: React.FC<AssertionsGraphProps> = ({fetchResults}) => {
  console.log('fetchResults  ---> ', fetchResults);
  return (
    <div className="progress-bar">
      <ProgressBar
        striped
        variant="danger"
        now={fetchResults}
        label={<span className="progress-bar-label">{`${fetchResults}%`}</span>}
      />
    </div>
  );
};

export default Flakiness;
