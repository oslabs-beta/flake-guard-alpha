import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './client/app';
import {Provider} from 'react-redux';
import {store} from './client/redux/store';

const container = document.getElementById('react-root')!;
//! is telling TS, saying that container will never be 'null'
const root = createRoot(container);

//Hello, I removed <RestrictMode/> for now because it causes React to load twice -Paloma
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
