// flakePercentageUtils.ts

interface AssertionResult {
  passed: boolean;
  failed: boolean;
}

// export const calculateFlakePercentage = (
//   results: TestResult[]
// ): number | undefined => {
//   let totalPassed = 0;
//   let totalFailed = 0;
//   let totalSkipped = 0;

//   for (const result of results) {
//     totalPassed += result.passed;
//     totalFailed += result.failed;
//     totalSkipped += result.skipped;
//   }

//   const totalTests = totalPassed + totalFailed + totalSkipped;
//   if (totalTests === 0) {
//     return undefined; // Return undefined if no tests were executed
//   }

//   const flakePercentage = (totalFailed / totalTests) * 100;
//   return flakePercentage;
// };
export const calculateFlakePercentage = (
  assertionResults: AssertionResult[]
): number | undefined => {
  let flakeyCount = 0;
  let totalAssertions = 0;

  for (const assertion of assertionResults) {
    totalAssertions++;

    // Check if the assertion has at least one pass and one fail
    if (assertion.passed && assertion.failed) {
      flakeyCount++;
    }
  }

  if (totalAssertions === 0) {
    return undefined; // No assertions were executed
  }

  const flakePercentage = (flakeyCount / totalAssertions) * 100;
  return flakePercentage;
};
