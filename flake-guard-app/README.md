# 🚀 Welcome to flake guard!

Installation
On your terminal run
npm i flake-guard
Installation as dev dependency:
npm i flake-guard --save-dev
To run FlakeGuard, simply execute the command
npx flake-guard <filename>
with the name of the test file that you want to examine. FlakeGuard will analyze your E2E tests for flakiness by executing multiple test runs and analyzing the results. The default number of test runs is 10, but this can be adjusted as described below.
In general, there is a time versus accuracy tradeoff. More test executions increase accuracy but reduce speed.

Configuration
To adjust FlakeGuard configuration variables, you can create a file in the root directory of your project called
fg.config.json
. Below are the defaults, which can be overridden in your local 'fg.config.json' file.
