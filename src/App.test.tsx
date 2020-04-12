import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders text in App', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Test react tree/i);
  expect(linkElement).toBeInTheDocument();
});
