import React from 'react';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Header } from './Header';

describe('Header Component', () => {
  it('renders notification button and toggles notifications', () => {
    render(<Header />);

    const notificationButton = screen.getByTitle('Your Notification');
    expect(notificationButton).toBeInTheDocument();
  });
});
