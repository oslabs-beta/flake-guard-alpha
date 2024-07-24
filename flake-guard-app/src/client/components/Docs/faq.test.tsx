/** @jest-environment jsdom */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Faq from './FAQ';

describe('FAQ', () => {
    it('renders FAQ component', () => {
        render (<Faq />)
    })
    it('should include all faq questions and answers', () => {
         userEvent.click(screen.getByRole('button', {name: 'faq-button'}))
    })
});
