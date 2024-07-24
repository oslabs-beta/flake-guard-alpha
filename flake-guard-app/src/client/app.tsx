import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Landing from './components/LandingPage/landing-page';
import DocPage from './components/Docs/DocPage';
import UserDashboard from './newDashboard/dashboard/NewUserDashboard';
import TempDashboard from './components/Dashboard/TempDashboard';
import DecisionPage from './components/Dashboard/DecisionPage';
import NewUserDashboard from './newDashboard/dashboard/NewUserDashboard';
import Calendar from './newDashboard/components/calendar/index';
import PieChart from './newDashboard/components/pie/index';
import LineChart from './newDashboard/components/line/index';

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
          <Route path="/dashboard" element={<NewUserDashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/piechart" element={<PieChart />} />
          <Route path="/linechart" element={<LineChart />} />
          {/* Redirect any unmatched routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
