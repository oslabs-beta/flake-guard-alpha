#!/usr/bin/env node
// ^ shebang to ensure the user can execute script from CL using node interpreter

import {exec, spawn} from 'node:child_process';
import {ConfigObj, Results, Assertion} from './types';
import {loadConfig} from './loadConfig';
import * as readline from 'readline';

// Set up configuration as defaults with user overrides
const configObj: ConfigObj = loadConfig();
// Amount of runs specified in configuration
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

// Function to prompt the user to open dashboard
function dashPrompt(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(
    'Press Enter to open results in the dashboard, or Ctrl+C to exit...'
  );

  rl.on('line', async input => {
    if (input === '') {
      const command =
        process.platform === 'win32'
          ? 'start'
          : process.platform === 'darwin'
            ? 'open'
            : 'xdg-open';
      spawn(command, ['http://google.com']);
      rl.close();
    }
  });

  rl.on('SIGINT', () => {
    console.log('\nExiting...');
    rl.close();
    // eslint-disable-next-line no-process-exit
    process.exit();
  });
}

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
        if (
          !Object.prototype.hasOwnProperty.call(
            flakeGuardResults,
            assertion.fullName
          )
        ) {
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
        runTimes,
        user: configObj.user,
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
  // Prompt user to press enter to open dashboard
  await dashPrompt();
};

flakeGuard(runTimes);
