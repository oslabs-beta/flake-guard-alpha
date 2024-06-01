import React from 'react';
import {createRoot} from 'react-dom/client';
import NavBarHeading from './client/pages/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <>
      <div>
        <NavBarHeading />
      </div>
      <div>Login</div>
    </>
  );
};

const container = document.getElementById('react-root')!;
const root = createRoot(container);
root.render(<App />);
