import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { SignInForm } from '@/index';

import { useMutation } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
  QueryClient: jest.fn().mockImplementation(() => ({
    getQueryCache: jest.fn(),
    clear: jest.fn(),
  })),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('SignInForm Component', () => {
  const mockMutate = jest.fn();

  const mockLoginMutation = {
    mutate: mockMutate,
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: null,
    data: undefined,
    reset: jest.fn(),
  };

  beforeEach(() => {
    (useMutation as jest.Mock).mockReturnValue(mockLoginMutation);
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      query: {},
      pathname: '/',
    });
  });

  test('should render the SignInForm component', () => {
    render(<SignInForm />);

    expect(screen.getByText(/Sign In to Workroom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByText(/Remember Me/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Log In/i })).toBeInTheDocument();
  });

  test('should update state when email or password is entered', () => {
    render(<SignInForm />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'password123' },
    });

    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/Password/i) as HTMLInputElement;

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  test('should show toast and redirect on successful login', async () => {
    render(<SignInForm />);

    const successResponse = {
      id: '1',
      email: 'test@example.com',
      isAccountVerified: true,
      refreshToken: 'someToken',
    };

    mockLoginMutation.mutate.mockImplementationOnce((data, { onSuccess }) => {
      onSuccess(successResponse);
    });

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Log In/i }));
  });

  test('should toggle remember me checkbox', () => {
    render(<SignInForm />);
    const checkbox = screen.getByLabelText(/Remember me/i);
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
