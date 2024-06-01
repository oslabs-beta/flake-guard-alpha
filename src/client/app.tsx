import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from '../client/pages/landing-page';
import Analytics from '../client/pages/analytics-page';
import LoginOrOut from '../client/pages/login-out';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

const App: React.FC = () => {
  //type = React.FunctionalComponent
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/login" element={<LoginOrOut />} />

          {/* If any route mismatches the upper
      route endpoints then, redirect triggers
      and redirects app to home component with to="/" */}
          {/* <Redirect to="/" /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
