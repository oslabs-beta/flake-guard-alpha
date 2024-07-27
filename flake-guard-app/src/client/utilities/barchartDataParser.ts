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
    id: string | null;
    passed: number | null;
    passedColor: string | null;
    failed: number | null;
    failedColor: string | null;
    skipped: number | null;
    skippedColor: string | null;
  }
  
  const barChartParser = (userResults: Array<FG>) => {
    // Input: The whole user results array
    const output: Array<DataPoint> = [];
    userResults.forEach((fg: FG) => {
      const dataPoint: DataPoint = {
        id: null,
        passed: null,
        passedColor: null,
        failed: null,
        failedColor: null,
        skipped: null,
        skippedColor: null,
    };
      dataPoint.id = fg.id;

      let passed: number = 0;
      let failed: number = 0;
      let skipped: number = 0;      
      
      if (Array.isArray(fg.results.metrics)) {
        fg.results.metrics.forEach((test: Test) => {
            if (dataPoint.id === fg.id) {
                passed += test.passed;
                failed += test.failed;
                skipped += test.skipped;
            }
            dataPoint.passed = passed;
            dataPoint.passedColor = 'hsl(134, 61%, 41%)';
            dataPoint.failed = failed;
            dataPoint.failedColor = 'hsl(354, 87%, 56%)'; 
            dataPoint.skipped = skipped;
            dataPoint.skippedColor = 'hsl(0, 0%, 71%)';

        });
      }
        output.push(dataPoint);
    });
    console.log('output from barchart ', output)
    return output;
  };
  
  export {barChartParser};