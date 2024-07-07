#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_child_process_1 = require("node:child_process");
const loadConfig_1 = require("./loadConfig");
const readline = require("readline");
const configObj = (0, loadConfig_1.loadConfig)();
const runTimes = configObj.runs;
console.log(`Number of runs: ${runTimes}`);
const filename = process.argv[2];
if (!filename) {
    throw new Error('Please provide a test file name to run FlakeGuard. ex "flake-guard <testfile>.js"');
}
const command = `jest ${filename} --json`;
const runTest = () => {
    return new Promise(resolve => {
        (0, node_child_process_1.exec)(command, (error, stdout) => {
            resolve(stdout);
        });
    });
};
function dashPrompt(url) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    console.log('Press Enter to open results in the dashboard, or Ctrl+C to exit...');
    rl.on('line', (input) => __awaiter(this, void 0, void 0, function* () {
        if (input === '') {
            const command = process.platform === 'win32'
                ? 'start'
                : process.platform === 'darwin'
                    ? 'open'
                    : 'xdg-open';
            (0, node_child_process_1.spawn)(command, [url]);
            rl.close();
        }
    }));
    rl.on('SIGINT', () => {
        console.log('\nExiting...');
        rl.close();
        process.exit();
    });
}
const flakeGuard = (iterations) => __awaiter(void 0, void 0, void 0, function* () {
    const timestampStart = Date.now();
    const flakeGuardResults = {};
    const flakeGuardResultsVerbose = [];
    for (let i = 0; i < iterations; i++) {
        try {
            const result = yield runTest();
            const parsedResult = JSON.parse(result);
            flakeGuardResultsVerbose.push(parsedResult);
            const { assertionResults } = parsedResult.testResults[0];
            assertionResults.forEach((assertion) => {
                if (!Object.prototype.hasOwnProperty.call(flakeGuardResults, assertion.fullName)) {
                    flakeGuardResults[assertion.fullName] = { passed: 0, failed: 0, skipped: 0 };
                }
                if (assertion.status === 'passed') {
                    flakeGuardResults[assertion.fullName].passed += 1;
                }
                else if (assertion.status === 'failed')
                    flakeGuardResults[assertion.fullName].failed += 1;
                else if (assertion.status === 'pending')
                    flakeGuardResults[assertion.fullName].skipped += 1;
            });
            console.log(`Run ${i + 1} complete`);
        }
        catch (error) {
            console.error(`Error in run number ${i + 1}: ${error}`);
        }
    }
    try {
        const timestampEnd = Date.now();
        console.log(`Total FlakeGuard runtime: ${(timestampEnd - timestampStart) / 1000} seconds`);
        console.log('Results Summary:');
        console.log(flakeGuardResults);
        const response = yield fetch('http://localhost:3000/results', {
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
        const url = yield response.json();
        console.log('Results successfully sent to FlakeGuard server');
        yield dashPrompt(url);
    }
    catch (error) {
        console.error('Error sending results to FlakeGuard server: ', error);
    }
});
flakeGuard(runTimes);
//# sourceMappingURL=index.js.map