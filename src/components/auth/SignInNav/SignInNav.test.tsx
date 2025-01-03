import React from 'react';
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { store } from '@/store/store';
import { Provider } from 'react-redux';

import { SignInNav } from '@/index/index';

import { SignInNavProps } from '@/interfaces/SignInInterface';

describe('SignInNav Component', () => {
  const mockClassNames = {
    container: '',
    nextBtn: '',
    prevBtn: '',
  };

  const mockProps: SignInNavProps = {
    isNextButtonDisabled: false,
    classNames: mockClassNames,
    currentStep: 2,
  };

  test('renders SignInNav component correctly', () => {
    render(
      <Provider store={store}>
        <SignInNav {...mockProps} />
      </Provider>,
    );

    const previousButton = screen.getByText(/Previous/i);
    const nextButton = screen.getByText(/Next/i);

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
  });

  test('does not render Previous button if currentStep is 1', () => {
    const modifiedProps = { ...mockProps, currentStep: 1 };

    render(
      <Provider store={store}>
        <SignInNav {...modifiedProps} />
      </Provider>,
    );

    const previousButton = screen.queryByText(/Previous/i);
    expect(previousButton).not.toBeInTheDocument();
  });

  test('Next button is disabled when isNextButtonDisabled is true', () => {
    const disabledProps = { ...mockProps, isNextButtonDisabled: true };

    render(
      <Provider store={store}>
        <SignInNav {...disabledProps} />
      </Provider>,
    );

    const nextButton = screen.getByText(/Next Step/i);
    expect(nextButton).toBeDisabled();
  });

  test('Next button is not disabled when isNextButtonDisabled is false', () => {
    render(
      <Provider store={store}>
        <SignInNav {...mockProps} />
      </Provider>,
    );

    const nextButton = screen.getByText(/Next Step/i);
    expect(nextButton).not.toBeDisabled();
  });
});
