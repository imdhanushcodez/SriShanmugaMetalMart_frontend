import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders site brand name', () => {
  render(<App />);
  expect(screen.getAllByText(/Sri Shanmuga Metal Mart/i).length).toBeGreaterThan(0);
});
