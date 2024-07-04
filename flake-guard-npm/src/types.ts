export interface ConfigObj {
  runs: number;
  user: string;
  apiKey: string;
}

export interface FlakeGuardResult {
  [key: string]: {
    passed: number;
    failed: number;
    skipped: number;
  };
}

export interface Assertion {
  fullName: string;
  status: string;
}
