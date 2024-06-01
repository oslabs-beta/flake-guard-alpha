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
const { exec } = require('node:child_process');
let runTimes = 10;
const filename = process.argv[2];
const command = `jest ${filename} --json`;
if (!filename) {
    console.error('Please provide a test file name to run FlakeGuard. ex "flake-guard <testfile>.js"');
    process.exit(1);
}
const runTest = () => {
    return new Promise((resolve) => {
        exec(command, (error, stdout) => {
            resolve(stdout);
        });
    });
};
const flakeGuard = (iterations) => __awaiter(void 0, void 0, void 0, function* () {
    const timestampStart = Date.now();
    const flakeGuardResults = {};
    for (let i = 0; i < iterations; i++) {
        try {
            const result = yield runTest();
            const parsedResult = JSON.parse(result);
            const { assertionResults } = parsedResult.testResults[0];
            assertionResults.forEach(assertion => {
                if (!flakeGuardResults.hasOwnProperty(assertion.fullName)) {
                    flakeGuardResults[assertion.fullName] = { passed: 0, failed: 0 };
                }
                ;
                if (assertion.status === 'passed') {
                    flakeGuardResults[assertion.fullName].passed += 1;
                }
                ;
            });
            console.log(`Run ${i + 1} complete`);
        }
        catch (error) {
            console.error(`Error in run number ${i + 1}: ${error}`);
        }
        ;
    }
    ;
    try {
        yield fetch('http://localhost:3000/results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(flakeGuardResults)
        });
        console.log('Results successfully sent to FlakeGuard server');
    }
    catch (error) {
        console.error('Error sending results to FlakeGuard server: ', error);
    }
    const timestampEnd = Date.now();
    console.log(`Total FlakeGuard runtime: ${(timestampEnd - timestampStart) / 1000} seconds`);
    console.log('Log in to FlakeGuard.com to view results');
});
flakeGuard(runTimes);
//# sourceMappingURL=index.js.map