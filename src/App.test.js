import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

test('renders brainleads brand navigation or headline', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  const brandElements = screen.getAllByText(/Brainleads/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
