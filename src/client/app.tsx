import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from '../client/pages/landing-page';
import Analytics from '../client/pages/analytics-page';
import DashboardPage from './components/Dashboard';
import LoginOrOut from '../client/pages/login-out';
import DocPage from './pages/doc-page';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  // Define the style object

  return (
    <div>
      {/* Alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginOrOut />} />
          <Route path="/docs" element={<DocPage />} />
          {/* Redirect any unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
