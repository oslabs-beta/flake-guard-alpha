import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, Tooltip, Legend, ArcElement, Title} from 'chart.js';
import 'chartjs-plugin-datalabels';

ChartJS.register(Tooltip, Legend, ArcElement, Title);

interface MetricsData {
  [key: string]: number;
}

interface SummaryProps {
  metrics: MetricsData | undefined;
}

const Summary: React.FC<SummaryProps> = ({metrics}) => {
  //DATA
  const pieChartData = {
    labels: [''],
    datasets: [
      {
        label: 'Time Spent',
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(81, 209, 156)',
          'rgba(250, 88, 102)',
          'rgba(208, 211, 211)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  let total = 0;
  if (metrics) {
    const passed = metrics.passed;
    const failed = metrics.failed;
    const skipped = metrics.skipped;
    total = passed + failed + skipped;
    pieChartData.datasets[0].data[0] = passed;
    pieChartData.datasets[0].data[1] = failed;
    pieChartData.datasets[0].data[2] = skipped;

    pieChartData.labels[0] = `Passed ${passed}/${total}`;
    pieChartData.labels[1] = `Failed ${failed}/${total}`;
    pieChartData.labels[2] = `Skipped ${skipped}/${total}`;
  }

  //OPTIONS
  const options = {
    cutout: '90%',
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'center' as const,
        labels: {
          usePointStyle: true,
          color: '#474646',
        },
      },
      textInside: {
        text: `${total} assertions`,
        color: '#474646',
        fontSize: 20,
      },
      title: {
        display: true,
        text: 'Summary',
        font: {
          size: 18,
        },
      },
    },
  };
  //Configuration of the plugin from line 60. Allows display the total of assertions (text)
  const textInsidePlugin = {
    id: 'textInside',
    afterDatasetsDraw: function (chart: any) {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height;
      const fontSize = options.plugins.textInside.fontSize;
      ctx.font = fontSize + 'px Arial';
      ctx.fillStyle = options.plugins.textInside.color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const text = options.plugins.textInside.text;
      const textX = Math.round(width / 2);
      const textY = Math.round(height / 2);
      ctx.fillText(text, textX, textY);
    },
  };
  const backgroundColorPlugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (
      chart: ChartJS<'doughnut'>,
      args: any,
      options: {color?: string}
    ) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#ffffff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };
  ChartJS.register(backgroundColorPlugin);

  const plugins = [textInsidePlugin, backgroundColorPlugin];

  return (
    <div className="box-style">
      <Doughnut options={options} data={pieChartData} plugins={plugins} />
    </div>
  );
};

export default Summary;
