import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from './components/LandingPage/landing-page';
import Analytics from './components/Analytics/analytics-page';
import LoginOrOut from './components/Login/login-out';
import DocPage from './components/Docs/doc-page';

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
          <Route path="/analytics" element={<Analytics />} />
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
