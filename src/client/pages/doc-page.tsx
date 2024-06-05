import React from 'react';
import NavBarHeading from '../pages/nav-bar';

const DocPage: React.FC = () => {
  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      <div>
        <p>
          Downloading Instructions npm
          <a href="https://www.npmjs.com/package/flake-guard">
            https://www.npmjs.com/package/flake-guard
          </a>
          CLI <code>npm i flake-guard</code> GitHub
          <a href="github.com/oslabs-beta/flake-guard">
            github.com/oslabs-beta/flake-guard
          </a>
        </p>
        <p>
          Quick Start Run this command to install FlakeGuard as a dev dependency
          in the project with your test files. npm i flake-guard --save-dev To
          run FlakeGuard, simply execute the command below with the name of the
          test file that you want to examine. flake-guard your test file
          FlakeGuard will analyze your tests for flakiness by executing multiple
          test runs and analyzing the results. The default number of test runs
          is 10, but this can be adjusted as described below. In general, there
          is a time versus accuracy tradeoff. More runs makes FlakeGuard more
          accurate but slower.
        </p>
        <p>
          Configuration To adjust FlakeGuard configuration variables, you can
          create file in the root directory of your project called
          'fg.config.json'. Below are the defaults, which can be overridden in
          your local 'fg.config.json' file.
        </p>
        <pre>
          {`
{
  runs: 10,
}
          `}
        </pre>
        <p>
          For example, if you want to increase accuracy, you can increase test
          runs.
        </p>
        <pre>
          {`
{
  runs: 100,
}
          `}
        </pre>
        <p>
          How It Works Under the hood, the flake-guard npm package is automating
          repeated runs of your test file. It will do a basic parsing of the
          results locally to log an object in your terminal with all of your
          test assertions and their pass/fail metrics. It sends off the raw Jest
          results objects to the FlakeGuard server for further analysis which
          you can view at flakeguard.com. Readme Keywords
          e2eend-to-endtestingtestflakeflakyjestpuppeteer
        </p>
      </div>
    </>
  );
};

export default DocPage;
