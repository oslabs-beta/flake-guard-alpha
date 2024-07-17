import * as React from 'react';
import { render } from '@testing-library/react';
import App from '../client/app';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});