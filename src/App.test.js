import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const test = document.querySelector('submit')

// document.getElementById('submit').addEventListener('click', function() {
//   const textInput = document.getElementById('location').value;
//   console.log('User input:', textInput);
// });


