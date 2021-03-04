import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello  World/i);
  expect(linkElement).toBeInTheDocument();
});


test('test case', () => {
  //render(<App />);
  const {getByTest} = render(<App />);
  const linkElement =  getByText(/ Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
