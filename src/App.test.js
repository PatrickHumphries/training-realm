import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Components/Button';

test('increments count when clicking increment button', () => {
  render(<Button />);
  fireEvent.click(screen.getByText('Click here to increment'));
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('decrements count when clicking decrement button', () => {
  render(<Button />);
  fireEvent.click(screen.getByText('Click here to decrement'));
  expect(screen.getByText('-1')).toBeInTheDocument();
});

test('resets count to zero when clicking reset button', () => {
  render(<Button />);
  fireEvent.click(screen.getByText('Click to reset count to zero'));
  expect(screen.getByText('0')).toBeInTheDocument();
});
