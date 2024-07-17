import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from './components/LandingPage/landing-page';
import DocPage from './components/Docs/DocPage';
import UserDashboard from './components/newDashboard/UserDashboard';
import TempDashboard from './components/Dashboard/TempDashboard';
import DecisionPage from './components/Dashboard/DecisionPage';
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
          <Route path="/npm/:id" element={<DecisionPage />} />
          <Route path="/dashboard/user/:userId" element={<UserDashboard />} />
          <Route path="/tempdashboard/:id" element={<TempDashboard />} />
          <Route path="/docs" element={<DocPage />} />
          {/* Redirect any unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
