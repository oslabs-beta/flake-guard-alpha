/** @jest-environment jsdom */

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Advantages from './Advantages';

describe('Advantages Component', () => {
  it('should display "Improved Test Reliability" text', () => {
    // Render the Advantages component
    render(<Advantages />);
    
    // Check if the text "Improved Test Reliability" is in the document
    const improvedReliability = screen.getByText('Improved Test Reliability');
    expect(improvedReliability).toBeInTheDocument();
  });

  it('should display all advantages texts', () => {
    // Render the Advantages component
    render(<Advantages />);

    expect(screen.getByText('Improved Test Reliability')).toBeInTheDocument();
    expect(screen.getByText('Enhanced Developer Productivity')).toBeInTheDocument();
    expect(screen.getByText('Increased Confidence in Software Releases')).toBeInTheDocument();
    expect(screen.getByText('Faster Continuous Integration (CI) Pipelines')).toBeInTheDocument();
    expect(screen.getByTestId('paragraph1')).toBeInTheDocument();
    expect(screen.getByTestId('paragraph2')).toBeInTheDocument();
    expect(screen.getByTestId('paragraph3')).toBeInTheDocument();
  });
});
