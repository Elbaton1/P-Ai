import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleButton from '../components/SimpleButton';

test('renders button with provided text', () => {
    render(<SimpleButton text="Click me" />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
});

