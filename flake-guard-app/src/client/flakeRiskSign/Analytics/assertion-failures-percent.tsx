import {TestResult} from '../../types';

export const assertionFailedPercent = (
  results: TestResult[]
): string[] | undefined => {
  if (!results || results.length === 0) return undefined;

  const failingAssertions = results
    .filter(result => result.failed > 0 && result.passed === 0)
    .map(result => result.name);

  return failingAssertions.length > 0 ? failingAssertions : undefined;
};
// src/client/Analytics/assertion-failures-percent.ts
// import {TestResult} from '../../types';

// export const assertionFailedPercent = (results: TestResult[]): string[] => {
//   return results
//     .filter(result => result.passed === 0 && result.failed > 0)
//     .map(result => result.name);
// };
