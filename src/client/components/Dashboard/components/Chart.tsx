import React, {useEffect, useState} from 'react';
import {api} from '../../../services/index';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Flakiness Trend',
    },
  },
};

const Chart: React.FC = () => {
  const [metrics, setMetrics] = useState<object | null>(null);
  const [labelsState, setLabelsState] = useState<string[]>(['loading..']);

  const fetchMetrics = async () => {
    try {
      const response = await api.get('/results');
      const results = response.data;
      console.log('results -->', results);
      const labelsArr = [];
      for (let i = 0; i < results.length; i++) {
        labelsArr.push(results[i].fullName);
      }
      console.log('labelsState --->', labelsArr[0]);

      setLabelsState(labelsArr);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);
  const data = {
    labels: labelsState,
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Chart;
