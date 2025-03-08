import React from 'react';

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { SignInHeaderProps } from '@/shared/interfaces/SignInInterface';

import { SignInHeader } from '@/index';

describe('SignInHeader Component', () => {
  const mockClassNames = {
    header: 'mock-header-class',
    headerTitle: 'mock-title-class',
    stepsFigures: 'mock-steps-class',
  };

  const mockProps: SignInHeaderProps = {
    stepTitle: 'Step 1 of 4',
    title: '',
    classNames: mockClassNames,
  };

  test('renders SignInHeader component', () => {
    render(<SignInHeader {...mockProps} />);

    const stepTitle = screen.getByText(/Step 1 of 4/i);
    expect(stepTitle).toBeInTheDocument();
    expect(stepTitle).toHaveClass('mock-steps-class');
  });
});
