// @ts-nocheck

export interface FG {
    created_at: string;
    date: string;
    id: string;
    user_id: string;
    results: Result;
  }
  
  interface Result {
    metrics: Array<Test>;
    verbose: Array<any>;
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
    message: string | null;
    filePath: string | null;
    details: Array<Test> | null;
    durations: Array<number> | null
  }
  
  const displayErrosDataParser = (userResults: Array<FG>) => {

    // Input: The whole user results array
    const output: Array<DataPoint> = [];
    userResults.forEach((fg: FG) => {
      const dataPoint: DataPoint = {
        id: null,
        message: null,
        filePath: null,
        details: null,
        durations: null,
    };

    dataPoint.id = fg.id
    dataPoint.details = fg.results.metrics

      const runDurations = []

      if (Array.isArray(fg.results.verbose)) {
        fg.results.verbose.forEach((run: any, index) => {
            const startTime = run.startTime;
            const endTime = run.testResults[0].endTime
            const runDuration = endTime - startTime

            runDurations.push(runDuration)
        })
      }
      dataPoint.durations = runDurations

      if (Array.isArray(fg.results.metrics)) {
        fg.results.metrics.forEach((test: Test) => {
            const message = fg.results.verbose[0].testResults[0].message
            const filePath = fg.results.verbose[0].testResults[0].name

            dataPoint.message = message;
            dataPoint.filePath = filePath;
        });
      }
   
        output.push(dataPoint);
    });
    // console.log('output from utilities ->', output)
    return output;
  };
  
  export {displayErrosDataParser};