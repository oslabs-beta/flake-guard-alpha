import React, {useState} from 'react';
import Header from '../nav-bar';
import Footer from '../footer';
import '../../../styles/styles.css';
import '../../../styles/docs.css';
import npmLogo from '../../assets/npm-logo.png';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FAQ from './FAQ';

const DocPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="docs-container">
        <div className="d-flex align-items-start questions">
          <div
            className="nav flex-column nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              What is FlakeGuard?
            </button>
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Installation
            </button>
            <button
              className="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              FAQ
            </button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <h1 className="docs-title">What is FlakeGuard?</h1>
              <p className="docs-text">
                FlakeGuard a free, open-source, tool that allows developers to
                run Jest tests to automatically detect, report, and manage flaky
                tests in software development.
              </p>
              <h1 className="docs-title">Personalized Features</h1>
              <p className="docs-text">
                Things you can do with your personal Flake Guard dashboard:
                <ul>
                  <li>View analytics including, but not limited to:
                    <ul>
                    <li>Passing vs failing tests with the color coordinated flake severity table</li>
                   <li>Analyze Runtime metrics & API response times</li>
                   <li>See flags and recommendations to fix flaky tests</li>
                   <li>View pointers showing fail points within test code</li>
                   <li>Running test order permutation</li>
                    {/* <li>Flagged tests using ‘async’ calls</li> */}
                    <li>
                    Display flake improvement over time
                  </li>
                    </ul>
                  </li>
                
                </ul>
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <h1 className="docs-title">Installation</h1>
              <p className="docs-text">
                Terminal Command:
                <span className="docs-code">
                  <code>npm i flake-guard</code>
                </span>
                Installation as dev dependency:{' '}
                <span className="docs-code">
                  <code>npm i flake-guard --save-dev</code>
                </span><br/>
                Run Flake Guard:{' '}
                <code>npx flake-guard</code><br/><p>Or</p>
                <code>npx flake-guard {'<filename>'}</code> <br/>Please change {`<filename>`} with the appropriate name of the
                test file that you want to examine. Flake Guard will analyze your
                E2E tests for flakiness by executing multiple test runs and
                analyzing the results. 
              </p>
              <h1 className="docs-title">Configuration</h1>
              <p className="docs-text">
              The default number of test runs is 10,
                but this can be adjusted as described below. <br />
                In general, there is a time versus accuracy tradeoff. More test
                executions increase accuracy but reduce speed. <br/>
                To adjust FlakeGuard configuration variables, you can create a
                file in the root directory of your project called{' '}
                <code>fg.config.json</code> Below are the defaults, which can
                be overridden in your local 'fg.config.json' file.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <FAQ />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DocPage;
