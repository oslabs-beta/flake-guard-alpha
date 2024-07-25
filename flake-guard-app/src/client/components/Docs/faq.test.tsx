/** @jest-environment jsdom */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'; // Import the matchers
import Faq from './FAQ';

describe('FAQ',  () => {
    test('renders FAQ questions', () => {
        render(<Faq />);
        
  // Assert that the FAQ section is open
  const firstFaq = screen.getByText('What is a flakey test?');
  expect(firstFaq).toBeTruthy();
  
  const firstAnswer = screen.getByText('A flakey test is a test that sometimes passes and sometimes fails for the same code, often due to nondeterministic factors like timing issues, network variability, or reliance on external systems..')
  expect(firstAnswer).toBeTruthy();

  const secondFaq = screen.getByText('What causes flakey tests?');
  expect(secondFaq).toBeTruthy();

  const thirdFaq = screen.getByText('When should I use FlakeGuard?');
  expect(thirdFaq).toBeTruthy();

  const fourthFaq = screen.getByText(`What's the impact of flakey tests?`);
  expect(fourthFaq).toBeTruthy();
    });
});
