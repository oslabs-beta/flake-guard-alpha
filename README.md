<img src="flake-guard-app/src/client/assets/flakeguard-logo-white-background.png" style="height: 250px"/>

# 🚀 Welcome to flake guard! 🚀
### [Website](https://flake-guard.com/)  | |  [Npm](https://www.npmjs.com/package/flake-guard)  | |  [Medium Article](https://medium.com/@ashleyhannigan88/flake-guard-open-source-01431eb6ede3)
<div align="center">
<img src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png?f=webp&w=512" alt = "javascipt logo" id="javascript" style="width: 40px; height: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=webp&w=512" alt = "typescript logo" id = "typescript" style="width: 40px; height: 40px"/> 
<img src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=512" alt = "react js" id = "react" style="width: 40px; height: 40px"/> 
<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042" id="tailwind" alt="tailwind css logo" style="width: 50px; height: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-jest-3521517-2945020.png?f=webp&w=512" id="jest" alt="jest logo" style="width: 40px; height: 40px"/>
<img src="https://i.pinimg.com/474x/65/4f/45/654f4522679e9fc4304b32430f44939d.jpg" alt="react testing library logo" style="width: 40px; height: 40px"/>
<img src="https://cdn.iconscout.com/icon/free/png-512/free-npm-3521612-2945056.png?f=webp&w=512" id="npm" alt="npm logo" style="width: 50px; height: 40px"/>
<img src="https://blog.openreplay.com/images/building-and-rendering-charts-with-nivo-in-react/images/hero.png" alt = "nivo react charts logo" id="nivo" style="width: 70px"/>
<img src="https://miro.medium.com/v2/resize:fit:400/1*ErKwBLuqyI8wAPxC6xwZkQ.jpeg" alt = "chartjs logo" id="chartjs" style="width: 70px ; height: 40px"/>
<img src="https://getlogo.net/wp-content/uploads/2020/11/supabase-logo-vector.png" alt="supabase logo" style="width: 70px; height: 40px"/>
<img src="https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-2.svg" alt="Docker logo" style="width: 100px; height: 40px"/>

</div>

### FlakeGuard is a free, open-source software that allows developers to run Jest tests to automatically detect, report, and track flaky tests in software development.
---
*flaky test: a test that sometimes passes and sometimes fails for the same code, often due to nondeterministic factors like timing issues, network variability, or reliance on external systems.*

**By identifying flaky tests, FlakeGuard helps users improve test assurances.**

## __Table of Contents__
1. [Demo](#Demo)
2. [Getting Started](#getting-started)
3. [How it works](#how-it-works)
4. [Tracked dashboard metrics](#tracked-dashboard-metrics)
5. [Authors](#authors)
6. [Contributing](#contributing)

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

# How It Works
Under the hood, the flake-guard npm package is automating repeated runs of your test file. It will do a basic parsing of the results locally to log an object in your terminal with all of your test assertions and their pass/fail metrics. It sends off the raw Jest results objects to the FlakeGuard server for further analysis which you can view at flakeguard.com.

## Run Jest Testing Files
```npx jest```

## [Flakeguard.com](https://Flakeguard.com)
# Tracked Dashboard Metrics
<div>
<img src="flake-guard-app/src/client/assets/graphs.png" style="height: 250px; width: 250px">
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

# Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)