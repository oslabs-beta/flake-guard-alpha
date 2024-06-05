import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './client/app';

const container = document.getElementById('react-root')!;
//! is telling TS, saying that container will never be 'null'
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
