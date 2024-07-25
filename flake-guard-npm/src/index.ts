#!/usr/bin/env node
// ^ shebang to ensure the user can execute script from CL using node interpreter

import {exec, spawn} from 'node:child_process';
import {ConfigObj, FlakeGuardResult, Assertion} from './types';
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
function dashPrompt(url: string): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(
    'Press Enter to open results in the dashboard, or Ctrl+C to exit...'
  );
  /* Determines the user's OS, generates the appropriate command, and executes the command when the user presses enter*/
  rl.on('line', async input => {
    if (input === '') {
      const command =
        process.platform === 'win32'
          ? 'start'
          : process.platform === 'darwin'
            ? 'open'
            : 'xdg-open';
      spawn(command, [url]);
      rl.close();
    }
  });

  /* If the user presses 'Ctrl + C'*/
  rl.on('SIGINT', () => {
    console.log('\nExiting...');
    rl.close();
    // eslint-disable-next-line no-process-exit
    process.exit();
  });
}

// Analyze the test by running it 'runTimes' amount of times
export const flakeGuard = async (iterations: number): Promise<void> => {
  const timestampStart: number = Date.now();
  const flakeGuardResults: FlakeGuardResult = {};
  const flakeGuardResultsVerbose: object[] = [];
  for (let i = 0; i < iterations; i++) {
    try {
      const result: string = await runTest();
      const parsedResult = JSON.parse(result);
      flakeGuardResultsVerbose.push(parsedResult);
      const {assertionResults} = parsedResult.testResults[0];
      // Build out the flakeGuardResults array
      assertionResults.forEach((assertion: Assertion) => {
        if (
          !Object.prototype.hasOwnProperty.call(
            flakeGuardResults,
            assertion.fullName
          )
        ) {
          flakeGuardResults[assertion.fullName] = {passed: 0, failed: 0, skipped: 0};
        }
        if (assertion.status === 'passed') {
          flakeGuardResults[assertion.fullName].passed += 1;
        } 
        else if (assertion.status === 'failed') flakeGuardResults[assertion.fullName].failed += 1
        else if (assertion.status === 'pending') flakeGuardResults[assertion.fullName].skipped += 1;
      });
      console.log(`Run ${i + 1} complete`);
    } catch (error) {
      console.error(`Error in run number ${i + 1}: ${error}`);
    }
  }
  // On completion, send results to FlakeGuard server
  try {
    // On completion, log runtime and website info to user's terminal
    const timestampEnd: number = Date.now();
    console.log(
      `Total FlakeGuard runtime: ${
        (timestampEnd - timestampStart) / 1000
      } seconds`
    );
    console.log('Results Summary:');
    console.log(flakeGuardResults);
    // Send results to Flake Guard App server
    // const response = await fetch('https://2wguunmxpr.us-west-2.awsapprunner.com/results', {
    const response = await fetch('http://localhost:3000/results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        verbose: flakeGuardResultsVerbose,
        simple: flakeGuardResults,
        runTimes
      }),
    });
    const url = await response.json();
    console.log('Results successfully sent to FlakeGuard server');
    // Prompt user to press enter to open dashboard
    await dashPrompt(url);
  } catch (error) {
    console.error('Error sending results to FlakeGuard server: ', error);
  }
};

flakeGuard(runTimes);
