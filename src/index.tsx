import React from 'react';
import {createRoot} from 'react-dom/client';
import NavBarHeading from './client/pages/nav-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

const App = () => {
  return (
    <>
      <NavBarHeading />
      <h1>Hello world!</h1>
      <h2>Tip: Check your console</h2>
    </>
  );
};

const container = document.getElementById('react-root')!;
const root = createRoot(container);
root.render(<App />);
