import React from 'react';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(<h1>Hello React!</h1>);
