export interface ConfigObj {
  runs: number;
  user: string;
  apiKey: string;
}

export interface Result {
  fullName: string,
  passed: number,
  failed: number,
  totalRuns: number,
  skipped: number
}

export interface Assertion {
  fullName: string;
  status: string;
}
