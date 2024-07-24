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

interface FlakyData {
  flaky: number | null;
  alwaysFail: number | null;
  alwaysPass: number | null;
  skipped: number | null;
  totalTests: number | null;
}

const flakyDataParser = (userResults: Array<FG>): Array<FlakyData> => {
  const output: Array<FlakyData> = [];

  userResults.forEach((fg: FG) => {
    const data: FlakyData = {
      flaky: null,
      alwaysFail: null,
      alwaysPass: null,
      skipped: null,
      totalTests: null,
    };

    let flaky = 0;
    let alwaysFail = 0;
    let alwaysPass = 0;
    let skipped = 0;
    let totalTests = 0;

    if (Array.isArray(fg.results.metrics)) {
      fg.results.metrics.forEach((test: Test) => {
        // console.log('teeest ->>>>', test)
        if (test.skipped === test.totalRuns) {
          skipped += 1;
        } else if (test.passed === test.totalRuns) {
          alwaysPass += 1;
        } else if (test.failed === test.totalRuns) {
          alwaysFail += 1;
        } else {
          flaky += 1;
        }
        totalTests +=
          (test.skipped + test.failed + test.passed) / test.totalRuns;
      });

      data.flaky = flaky;
      data.alwaysFail = alwaysFail;
      data.alwaysPass = alwaysPass;
      data.skipped = skipped;
      data.totalTests = totalTests;

      output.push(data);
    }
  });

  return output;
};

export {flakyDataParser};
