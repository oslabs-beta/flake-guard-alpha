// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import {Bar} from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// interface MetricsData {
//   fullName: string;
//   passed: number;
//   failed: number;
//   skipped: number;
// }

// interface AssertionsGraphProps {
//   fetchResults: MetricsData[] | undefined;
// }

// const AssertionsGraph: React.FC<AssertionsGraphProps> = ({fetchResults}) => {
//   const barChartData = {
//     labels: [] as string[],
//     datasets: [
//       {
//         label: 'Passed',
//         data: [] as number[],
//         backgroundColor: 'rgba(81, 209, 156, 0.6)',
//         hoverOffset: 1,
//         barThickness: 15,
//       },
//       {
//         label: 'Failed',
//         data: [] as number[],
//         backgroundColor: 'rgba(255, 49, 49, .9)',
//         hoverOffset: 1,
//         barThickness: 15,
//       },
//     ],
//   };

//   if (fetchResults) {
//     for (let i = 0; i < fetchResults.length; i++) {
//       const results = fetchResults[i];
//       console.log('fetchResults', results);

//       barChartData.labels.push('assertion ' + (i + 1));
//       barChartData.datasets[0].data.push(results.passed);
//       barChartData.datasets[1].data.push(results.failed);
//     }
//   }

//   const options = {
//     indexAxis: 'y' as const,
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//       },
//       title: {
//         display: true,
//         text: 'Assertion Results',
//         font: {
//           size: 18,
//         },
//       },
//     },
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//       },
//     },
//   };

//   return (
//     <div className="assertions-graph box-style">
//       <Bar options={options} data={barChartData} />
//     </div>
//   );
// };

// export default AssertionsGraph;
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
import Flakiness from '../components/Flakiness';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MetricsData {
  fullName: string;
  passed: number;
  failed: number;
  skipped: number;
}

interface AssertionsGraphProps {
  fetchResults: MetricsData[] | undefined;
}

const AssertionsGraph: React.FC<AssertionsGraphProps> = ({fetchResults}) => {
  const barChartData = {
    labels: [] as string[],
    datasets: [
      {
        label: 'Passed',
        data: [] as number[],
        backgroundColor: 'rgba(81, 209, 156, 0.6)',
        hoverOffset: 1,
        barThickness: 25,
      },
      {
        label: 'Failed',
        data: [] as number[],
        backgroundColor: 'rgba(255, 49, 49, .9)',
        hoverOffset: 1,
        barThickness: 25,
      },
    ],
  };

  const flaggedIndices = new Set<number>();

  if (fetchResults) {
    for (let i = 0; i < fetchResults.length; i++) {
      const results = fetchResults[i];
      console.log('fetchResults ---> ', results);

      barChartData.labels.push('assertion ' + (i + 1));
      barChartData.datasets[0].data.push(results.passed);
      barChartData.datasets[1].data.push(results.failed);

      if (results.passed > 0 && results.failed > 0) {
        flaggedIndices.add(i);
      }
    }
  }

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Assertion Results',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: function (value: any, index: number, values: any) {
            if (flaggedIndices.has(index)) {
              return `* ${barChartData.labels[index]} `;
            }
            return barChartData.labels[index];
          },
        },
      },
    },
  };

  return (
    <div className="assertions-graph box-style ">
      <div className="flakiness-box">
        <p>Flaky Rate (%)</p>
        <div className="flakiness">
          {fetchResults &&
            fetchResults.map(result => (
              <div className="flakiness-container">
                <Flakiness fetchResults={result.failed/(result.passed+result.failed)*100} />
              </div>
            ))}
        </div>
      </div>

      <Bar options={options} data={barChartData} />
    </div>
  );
};

export default AssertionsGraph;
