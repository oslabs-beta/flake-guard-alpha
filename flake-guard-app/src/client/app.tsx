import React from 'react';
import Landing from './landingPage/LandingPage';
import DocPage from './docs/DocPage';
import UserDashboard from './userDash/UserDashboard';
import TempDashboard from './tempDash/TempDashboard';
import DecisionPage from './tempDash/DecisionPage';
import History from './userDash/pages/history/History';
import FlakyTests from './userDash/pages/flakyTests/FlakyTests'
import ResultsProvider from './userDash/contexts/ResultContext';
import CodeCoverage from './userDash/pages/codeCoverage/CodeCoverage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const App: React.FC = () => {
  // Define the style object

  return (
    <div>
      {/* Alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/docs" element={<DocPage />} />
          <Route path="/npm/:id" element={<DecisionPage />} />
          <Route path="/tempdashboard/:id" element={<TempDashboard />} />
          {/* <Route path="/dashboard/user/:userId" element={<UserDashboard />} /> */}
          <Route
            path="/dashboard/user/:userId"
            element={
              <ResultsProvider>
                <UserDashboard />
              </ResultsProvider>
            }
          />
          <Route
            path="/flakytests/user/:userId"
            element={
              <ResultsProvider>
                <FlakyTests />
              </ResultsProvider>
            }
          />
          <Route
            path="/history/user/:userId"
            element={
              <ResultsProvider>
                <History />
              </ResultsProvider>
            }
          />
          <Route path="/codecoverage/user/:userId" element={
            <ResultsProvider>
                <CodeCoverage />
              </ResultsProvider>
          } />
          {/* <Route path="/history/user/:userId" element={<History />} /> */}
          {/* Redirect any unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
