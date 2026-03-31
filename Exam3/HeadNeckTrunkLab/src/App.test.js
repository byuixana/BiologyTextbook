import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mock fetch so tests don't require the dev server
const mockLabData = {
  title: 'Test Lab',
  sections: [
    {
      id: 'week1',
      title: 'Week 1',
      data: [
        {
          id: 0,
          label: 'Section Header',
          children: []
        },
        {
          id: 1,
          label: 'Intro Page',
          load: 'Pages/intro.html',
          children: []
        }
      ]
    }
  ]
};

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockLabData)
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('shows loading state before data arrives', () => {
  // fetch never resolves in this test
  global.fetch = jest.fn(() => new Promise(() => {}));
  render(<App />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('renders lab title in header after data loads', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText('Test Lab')).toBeInTheDocument();
  });
});

test('renders section title in sidebar after data loads', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText('Week 1')).toBeInTheDocument();
  });
});

test('logs an error and stays on loading screen when fetch fails', async () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  global.fetch = jest.fn(() => Promise.reject(new Error('Network error')));
  render(<App />);
  await waitFor(() => {
    expect(consoleSpy).toHaveBeenCalledWith(
      'Could not fetch lab_data.json:',
      expect.any(Error)
    );
  });
  consoleSpy.mockRestore();
});
