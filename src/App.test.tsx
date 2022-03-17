import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Number to Word Converter', () => {
  render(<App />);
  const heading = screen.getByText(/Number to Word Converter/i);
  expect(heading).toBeInTheDocument();
});

// test('renders ')
