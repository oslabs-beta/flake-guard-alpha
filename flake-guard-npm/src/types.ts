export interface ConfigObj {
  runs: number;
}

export interface Results {
  [key: string]: {
    passed: number;
    failed: number;
  };
}

export interface Assertion {
  fullName: string;
  status: string;
}
