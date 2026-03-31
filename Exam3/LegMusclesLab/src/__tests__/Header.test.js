import { render, screen } from '@testing-library/react';
import Header from '../lib/Header';

test('renders the section title', () => {
  render(<Header sectionTitle="Skull Lab" />);
  expect(screen.getByText('Skull Lab')).toBeInTheDocument();
});

test('renders a different title when prop changes', () => {
  render(<Header sectionTitle="Muscle Lab" />);
  expect(screen.getByText('Muscle Lab')).toBeInTheDocument();
});

test('renders a header element', () => {
  render(<Header sectionTitle="Test" />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});
