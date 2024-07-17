import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from './components/LandingPage/landing-page';
import LoginOrOut from './components/Login/login-out';
import DocPage from './components/Docs/doc-page';
import Dashboard from './components/Dashboard/Dashboard';
import AdditionalDashboard from './components/Dashboard/Additional_Dash'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBarHeading from './components/nav-bar';

const App: React.FC = () => {
  // Define the style object

  return (
    <div>
      {/* Alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/login" element={<LoginOrOut />} />
          <Route path="/docs" element={<DocPage />} />
          <Route path="/additionaldash" element={<AdditionalDashboard />} />
          {/* Redirect any unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
