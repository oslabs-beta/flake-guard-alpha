<img src="https://raw.githubusercontent.com/oslabs-beta/flake-guard/98d4d159ba19a2e6dad3be218258100495a82826/flake-guard-app/src/client/assets/logo.png" style="background-color: white; width: 40% ; height: 20%"/>

# 🚀 Welcome to flake guard! 🚀
### [Website](https://flake-guard.com/)  | |  [Npm](https://www.npmjs.com/package/flake-guard)  | |  [Articles*](https://flake-guard.com/)
<div>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=512" style="width: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=webp&w=512" style="width: 40px"/> 
<img src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=512" style="width: 40px"/> 
<img src ="https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=512" style="width: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-jest-3521517-2945020.png?f=webp&w=512" style="width: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-npm-3521612-2945056.png?f=webp&w=512" style="width: 40px"/>

</div>

### FlakeGuard is a free, open-source software that allows developers to run Jest tests to automatically detect, report, and track flaky tests in software development.
---
*flaky test: a test that sometimes passes and sometimes fails for the same code, often due to nondeterministic factors like timing issues, network variability, or reliance on external systems.*

**By identifying flaky tests, FlakeGuard helps users improve test assurances.**

# DEMO SECTION WITH VIDEO

### end of demo section 
---
# Getting Started

Install the FlakeGuard NPM package as a dev dependency by running the command
```npm i flake-guard --save-dev```

To run FlakeGuard in your project, simply execute the command
```npx flake-guard <filename> ```
. Change `<filename>` to the name of the test file that you want to examine. 

👁️FlakeGuard will analyze your tests for flakiness by executing multiple test runs and analyzing the results. _The default number of test runs is 10_, but this can be adjusted as described below.

In general, there is a time versus accuracy tradeoff. More test executions increase accuracy but reduce speed.

## Configuration:
To adjust FlakeGuard configuration variables, you can create a file in the root directory of your project called
fg.config.json
. Below are the defaults, which can be overridden in your local 'fg.config.json' file.


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
Under the hood, the flake-guard npm package automates repeated runs of your test file. It will do a basic parsing of the results locally to log an object in your terminal with all of your test assertions and their pass/fail metrics. It sends off the raw Jest results objects to the FlakeGuard server for further analysis which you can view at flakeguard.com.

# [Flakeguard.com](https://Flakeguard.com)
<div>
<img src="flake-guard-app/src/client/assets/graphs.png" style="height: 20%; ">
</div> 
The flake-guard NPM package pairs with the FlakeGuard web application. After the package runs in the terminal, the user will have the option to press Enter to send the results to the FlakeGuard server and open the FlakeGuard app in the browser. 

The user will be directed to a page where they have the option to either view a one-time simplified version of the user dashboard, or log in via Github to view  advanced metrics and save their data to view the evolution of their test suite over time.

# Future Features and Contributors
We welcome feedback, new ideas, and contributors!

Some features next in line for development include:

- Allowing users to organize their stored results by filename
- Incorporating Jest's code coverage metrics to visualize test suite coverage metrics and track changes over time
- A history page where users can review previous results individually
- Further tools to help users mitigate test flake, such as pinpointing test failure points and generating potential solutions

---
# Authors 
| Name (First, Last) | Connect with us  | 
| ------------- |:-------------:|
| Ashley Hannigan | [LinkedIn](https://www.linkedin.com/in/ashley-hannigan-88-/) `,` [Github](https://github.com/ashhannigan)
| Brendan Xiong | [LinkedIn](https://www.linkedin.com/in/brendanxiong/) `,` [Github](https://github.com/brendanxiong)
| Tommy Martinez | [LinkedIn](https://www.linkedin.com/in/tommy-martinez/) `,` [Github](https://github.com/tmm150)
| Paloma Reynolds | [LinkedIn](https://www.linkedin.com/in/palomareynolds/)`,` [Github](https://github.com/palomareynolds)
| Will Suto | [LinkedIn](https://www.linkedin.com/in/willsuto/) `,` [Github](https://github.com/willsuto)

