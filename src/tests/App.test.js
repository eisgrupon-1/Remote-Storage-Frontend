import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'
import App from '../App';

it('renders without crashing', () => {
    render(<App />);
});
