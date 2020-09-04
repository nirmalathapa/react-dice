import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('renders button to roll dice', () => {
  const { getByText, getByTestId } = render(<App />);
  const buttonElement = getByText(/Roll D20/i)  
  expect(buttonElement).toBeInTheDocument();
  expect(getByTestId('displayD20')).toHaveTextContent('')
  userEvent.click(buttonElement)
  expect(getByTestId('displayD20')).toHaveTextContent(/^\d+$/);
  

});
