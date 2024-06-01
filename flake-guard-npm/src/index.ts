#!/usr/bin/env node
// ^ shebang to ensure the user can execute script from CL using node interpreter

const { exec } = require('node:child_process');
const fs = require('fs');
const path = require('path');

// Load config
function loadConfig() {
  const defaultConfigPath = path.join(__dirname, '../config/default.json');
  let config = JSON.parse(fs.readFileSync(defaultConfigPath, 'utf8'));

  // Override with user's config settings if available
  const userConfigPath = path.join(process.cwd(), 'fg.config.json');
  if (fs.existsSync(userConfigPath)) {
    const externalConfig = JSON.parse(fs.readFileSync(userConfigPath, 'utf8'));
    config = {...config, ...externalConfig}
  }

  return config;
}

const configObj = loadConfig();
let runTimes: number = configObj.runs;

// Get test file from user's CLI command and build internal command
const filename = process.argv[2];
const command = `jest ${filename} --json`;
if (!filename) {
  console.error(
    'Please provide a test file name to run FlakeGuard. ex "flake-guard <testfile>.js"'
  );
  process.exit(1);
}
console.log(`Number of runs: ${runTimes}`);

// Function to run the test file
const runTest = (): Promise<string> => {
  return new Promise(resolve => {
    exec(command, (error, stdout) => {
      resolve(stdout);
    });
  });
};

// Analyze the test by running it 'runTimes' amount of times
const flakeGuard = async (iterations: number) => {
  const timestampStart = Date.now();
  const flakeGuardResults = {};
  const flakeGuardResultsVerbose = [];
  for (let i = 0; i < iterations; i++) {
    try {
      const result = await runTest();
      const parsedResult = JSON.parse(result);
      flakeGuardResultsVerbose.push(parsedResult);
      // Uncomment to see the full result object
      // console.log(result);
      const {assertionResults} = parsedResult.testResults[0];
      // Build out the flakeGuardResults object
      assertionResults.forEach(assertion => {
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
  // On completeion, send results to FlakeGuard server
  try {
    await fetch('http://localhost:3000/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify(flakeGuardResultsVerbose),
    });
    console.log('Results successfully sent to FlakeGuard server');
  } catch (error) {
    console.error('Error sending results to FlakeGuard server: ', error);
  }
  // On completion, log runtime and website info to user's terminal
  const timestampEnd = Date.now();
  console.log(
    `Total FlakeGuard runtime: ${
      (timestampEnd - timestampStart) / 1000
    } seconds`
  );
  console.log('Results Summary:')
  console.log(flakeGuardResults);
  console.log('Log in to FlakeGuard.com to view full results');
};

flakeGuard(runTimes);
