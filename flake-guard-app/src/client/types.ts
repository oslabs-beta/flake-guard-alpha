// src/client/types.ts
export interface TestResult {
  name: string;
  passed: number;
  failed: number;
  skipped: number;
}

export interface AssertionResult {
  name: string;
  passed: boolean;
  failed: boolean;
}

export interface MetricsData {
  fullName: string;
  passed: number;
  failed: number;
  skipped: number;
}
