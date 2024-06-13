// flakePercentageUtils.ts

interface TestResult {
  passed: number;
  failed: number;
  skipped: number;
}

export const calculateFlakePercentage = (
  results: TestResult[]
): number | undefined => {
  let totalPassed = 0;
  let totalFailed = 0;
  let totalSkipped = 0;

  for (const result of results) {
    totalPassed += result.passed;
    totalFailed += result.failed;
    totalSkipped += result.skipped;
  }

  const totalTests = totalPassed + totalFailed + totalSkipped;
  if (totalTests === 0) {
    return undefined; // Return undefined if no tests were executed
  }

  const flakePercentage = (totalFailed / totalTests) * 100;
  return flakePercentage;
};
