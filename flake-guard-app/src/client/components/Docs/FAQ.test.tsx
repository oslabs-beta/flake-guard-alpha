/** @jest-environment jsdom */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Faq from './FAQ';
//make this compatable with FAQ

//screen.getByRole('button')
describe('FAQ Docs Component', () => {
    it('should display the Faq component', () => {
      // Render the Advantages component
      render(<Faq />);
      
  
      const improvedReliability = screen.getByText('Improved Test Reliability');
      expect('flaky test').toBeInTheDocument();
    });
  
    it('should display all advantages texts', () => {
      // Render the Advantages component
      render(<Faq />);
  
      expect(screen.getByRole('button'));
      expect(screen.getByTestId('faq container')).toBeInTheDocument();
    });
  });
  