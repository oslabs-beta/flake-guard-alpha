
/** @jest-environment jsdom */

import * as React from 'react';
import { render } from '@testing-library/react';
import App from './app';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    
  });
});

//NEED TO MANUALLY SET THE ENVIRONMENT BECAUSE OUR CONFIG ENVIRONMENT IS SET WITH NODE ENVIRONMENT FOR BACKEND TESTING