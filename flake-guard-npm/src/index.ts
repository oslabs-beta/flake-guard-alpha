#!/usr/bin/env node
// ^ shebang to ensure the user can execute script from CL using node interpreter

import {exec} from 'node:child_process';
import * as fs from 'fs';
import * as path from 'path';

interface ConfigObj {
  runs: number;
}

interface Results {
  [key: string]: {
    passed: number;
    failed: number;
  };
}

interface Assertion {
  fullName: string;
  status: string;
}

// Load config
function loadConfig(): ConfigObj {
  const defaultConfigPath: string = path.join(
    __dirname,
    '../config/default.json'
  );
  let config: ConfigObj = JSON.parse(
    fs.readFileSync(defaultConfigPath, 'utf8')
  );

  // Override with user's config settings if available
  const userConfigPath: string = path.join(process.cwd(), 'fg.config.json');
  if (fs.existsSync(userConfigPath)) {
    const externalConfig: object = JSON.parse(
      fs.readFileSync(userConfigPath, 'utf8')
    );
    config = {...config, ...externalConfig};
  }

  return config;
}

const configObj: ConfigObj = loadConfig();

const runTimes: number = configObj.runs;
console.log(`Number of runs: ${runTimes}`);

// Get test file from user's CLI command and build internal command
const filename: string = process.argv[2];
if (!filename) {
  throw new Error(
    'Please provide a test file name to run FlakeGuard. ex "flake-guard <testfile>.js"'
  );
}
const command: string = `jest ${filename} --json`;

// Function to run the test file
const runTest = (): Promise<string> => {
  return new Promise(resolve => {
    exec(command, (error, stdout) => {
      resolve(stdout);
    });
  });
};

// Analyze the test by running it 'runTimes' amount of times
const flakeGuard = async (iterations: number): Promise<void> => {
  const timestampStart: number = Date.now();
  const flakeGuardResults: Results = {};
  const flakeGuardResultsVerbose: object[] = [];
  for (let i = 0; i < iterations; i++) {
    try {
      const result = await runTest();
      const parsedResult = JSON.parse(result);
      flakeGuardResultsVerbose.push(parsedResult);
      // Uncomment to see the full result object
      // console.log(parsedResult);
      const {assertionResults} = parsedResult.testResults[0];
      // Build out the flakeGuardResults object
      assertionResults.forEach((assertion: Assertion) => {
        if (!flakeGuardResults.hasOwnProperty(assertion.fullName)) {
          flakeGuardResults[assertion.fullName] = {passed: 0, failed: 0};
        }
        if (assertion.status === 'passed') {
          flakeGuardResults[assertion.fullName].passed += 1;
        } else flakeGuardResults[assertion.fullName].failed += 1;
      });
      console.log(`Run ${i + 1} complete`);
    } catch (error) {
      console.error(`Error in run number ${i + 1}: ${error}`);
    }
  }
  // On completion, send results to FlakeGuard server
  try {
    await fetch('http://localhost:3000/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        verbose: flakeGuardResultsVerbose,
        simple: flakeGuardResults,
      }),
    });
    console.log('Results successfully sent to FlakeGuard server');
  } catch (error) {
    console.error('Error sending results to FlakeGuard server: ', error);
  }
  // On completion, log runtime and website info to user's terminal
  const timestampEnd: number = Date.now();
  console.log(
    `Total FlakeGuard runtime: ${
      (timestampEnd - timestampStart) / 1000
    } seconds`
  );
  console.log('Results Summary:');
  console.log(flakeGuardResults);
  console.log('Log in to FlakeGuard.com to view full results');
};

flakeGuard(runTimes);
