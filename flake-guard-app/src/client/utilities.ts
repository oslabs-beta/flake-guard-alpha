export interface FG {
  created_at: string;
  date: string;
  id: string;
  user_id: string;
  results: Result;
}

interface Result {
  metrics: Array<Test>;
  verbose: Array<object>;
}

interface Test {
  failed: number;
  fullName: string;
  passed: number;
  skipped: number;
  totalRuns: number;
}

interface DataPoint {
  x: string | null;
  y: number | null;
}

const lineChartParser = (userResults: Array<FG>) => {
  // Input: The whole user results array
  const output: Array<DataPoint> = [];
  userResults.forEach((fg: FG) => {
    const dataPoint: DataPoint = {x: null, y: null};
    dataPoint.x = fg.created_at;
    let flaky: number = 0;
    let solid: number = 0;
    if (Array.isArray(fg.results.metrics)) {
      fg.results.metrics.forEach((test: Test) => {
        if (
          test.totalRuns - test.passed !== test.skipped &&
          test.totalRuns - test.failed !== test.skipped
        ) {
          flaky += 1;
        } else {
          solid += 1;
        }
      });
    }
    const totalRuns = userResults[0].results.metrics[0].totalRuns;
    const flakePercentage: number = (flaky / totalRuns) * 100;
    dataPoint.y = flakePercentage;
    if (typeof flakePercentage === 'number' && !isNaN(flakePercentage))
      output.push(dataPoint);
  });
  return output;
};

export {lineChartParser};
