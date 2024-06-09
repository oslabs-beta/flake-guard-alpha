# FlakeGuard

FlakeGuard is a dev tool to detect and mitigate flake in end-to-end jest-puppeteer tests. 

Visit flakeguard.com for more information or to create an account. 

This is a beta version for a project in development through OSLabs. 

If you are interested in contributing, have feedback, or like talking about testing, please contact us. 

## Quick Start

Run this command to install FlakeGuard as a dev dependency in the project with your test files.

```
npm i flake-guard --save-dev
````

To run FlakeGuard, simply execute the command below with the name of the test file that you want to examine.
```
npx flake-guard <yourTestFile>
```
FlakeGuard will analyze your tests for flakiness by executing multiple test runs and analyzing the results.

The default number of test runs is 10, but this can be adjusted as described below. In general, there is a time versus accuracy tradeoff. More runs makes FlakeGuard more accurate but slower. 

## Configuration

To adjust FlakeGuard configuration variables, you can create file in the root directory of your project called 'fg.config.json'.

Below are the defaults, which can be overridden in your local 'fg.config.json' file.

```
{
  runs: 10
}
```
For example, if you want to increase accuracy, you can increase test runs.
```
{
  runs: 100
}
```

## How It Works
Under the hood, the flake-guard npm package is automating repeated runs of your test file. It will do a basic parsing of the results locally to log an object in your terminal with all of your test assertions and their pass/fail metrics. It sends off the raw Jest results objects to the FlakeGuard server for further analysis which you can view at flakeguard.com.
