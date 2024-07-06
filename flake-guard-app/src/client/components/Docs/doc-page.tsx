import React from 'react';
import NavBarHeading from '../nav-bar';
import Footer from '../footer';
import '../../../styles/styles.css';
import '../../../styles/docs.css';
import npmLogo from '../../assets/npm-logo.png';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
const DocPage = (): JSX.Element => {
  return (
    <>
      <header>
        <NavBarHeading />
      </header>
      {/* <img src={AcUnitIcon}></img> */}
      <div className="docs-overlay">
        <h1>Introduction</h1>
        <p>Welcome to the Flake-Guard documentation!</p>
        <h1>What is Flake-Guard?</h1>
        <p>
          a free, open-source tool that allows developers to run Jest tests to
          automatically detect, report, and manage flaky tests in software
          development
        </p>
        <h1>
          Quickstart
          <img
            id="npm-docs-logo"
            src={npmLogo}
            style={{
              width: '265px',
              height: '265px',
              padding: '2px',
              margin: '20px',
              position: 'absolute',
              right: 50,
              top: 100,
            }}
          ></img>
        </h1>{' '}
        {'Installation: '}
        <code>npm i flake-guard</code>
        <br />
        Installation as dev dependency:{' '}
        <code>npm i flake-guard --save-dev</code>
        <p>
          <br /> To run Flake-guard, simply execute the command{' '}
          <code>npx flake-guard {'<filename>'}</code> with the name of the test
          file that you want to examine. FlakeGuard will analyze your E2E tests
          for flakiness by executing multiple test runs and analyzing the
          results. The default number of test runs is 10, but this can be
          adjusted as described below. <br />
          In general, there is a time versus accuracy tradeoff. More test
          executions increases accuracy but reduces speed.
        </p>
        Configuration{' '}
        <p>
          To adjust FlakeGuard configuration variables, you can create file in
          the root directory of your project called <code>fg.config.json</code>.
          Below are the defaults, which can be overridden in your local
          'fg.config.json' file.
        </p>
        <code>
          {`
{
  runs: 10,
}
          `}
        </code>
        <p>
          For example, if you want to increase accuracy, you can increase test
          runs.
        </p>
        <code>
          {`
{
  runs: 100,
}
          `}
        </code>
        <br />
        How It Works Under the hood:{' '}
        <p>
          The flake-guard npm package is automating repeated runs of your test
          file. It will do a basic parsing of the results locally to log an
          object in your terminal with all of your test assertions and their
          pass/fail metrics. It sends off the raw Jest results objects to the
          FlakeGuard server for further analysis which you can view at
        </p>
        <div className="doc-links-container">
          <a
            className="doc-keywords"
            href="https://www.npmjs.com/search?q=keywords:e2e"
          >
            {'e2e '}
          </a>
          <a
            className="doc-keywords"
            href="https://www.npmjs.com/search?q=keywords:end-to-end"
          >
            end-to-end
          </a>
          <a
            className="doc-keywords"
            href="https://www.npmjs.com/search?q=keywords:testing"
          >
            {' testing '}
          </a>
          <a
            className="doc-keywords"
            href="https://www.npmjs.com/search?q=keywords:test"
          >
            {' test '}
          </a>
          <a
            className="doc-keywords"
            href="https://www.npmjs.com/search?q=keywords:flake"
          >
            {' flake'}
          </a>
          <a
            className="doc-keywords"
            href="https://www.npmjs.com/search?q=keywords:flaky"
          >
            {' flaky '}
          </a>
          <a
            className="doc-keywords"
            href="https://www.npmjs.com/search?q=keywords:jest"
          >
            {' jest '}
          </a>
          <a
            className="doc-keywords"
            href="https://www.npmjs.com/search?q=keywords:puppeteer"
          >
            puppeteer
          </a>
        </div>
      </div>{' '}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DocPage;
