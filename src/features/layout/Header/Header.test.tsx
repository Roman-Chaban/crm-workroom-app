import React from 'react';

import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Header } from './Header';

const mockLocalStorage = (sortedData: { email: string } | null) => {
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(sortedData));
  Storage.prototype.setItem = jest.fn(() => {});
};

describe('Header Component', () => {
  const searchClassNames = {
    input: 'headerSearchInput',
    container: 'headerSearchContainer',
    label: 'headerSearchLabel',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render header component', () => {
    render(<Header />);

    const headerElement = screen.getByRole('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('should render header field correctly', () => {
    render(<Header />);

    const searchInput = screen.getByPlaceholderText(/Search.../i);
    expect(searchInput).toBeInTheDocument();

    expect(searchInput).toHaveClass(searchClassNames.input);
  });

  test('renders notification button and toggles notifications', () => {
    render(<Header />);

    const notificationButton = screen.getByTitle('Your Notification');
    expect(notificationButton).toBeInTheDocument();

    const signInButton = screen.getByTitle('Sign In Button');
    expect(signInButton).toBeInTheDocument();
  });

  test('toggles notifications when notification button is clicked', async () => {
    render(<Header />);
    const notificationButton = screen.getByTitle('Your Notification');

    fireEvent.click(notificationButton);

    fireEvent.click(notificationButton);
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    );
  });

  test('shows sign-in button when user is not registered', () => {
    mockLocalStorage(null);
    render(<Header />);
    expect(screen.getByTitle('Sign In Button')).toBeInTheDocument();
  });
});
