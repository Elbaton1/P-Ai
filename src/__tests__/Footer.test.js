import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer component with correct text', () => {
    render(<Footer />);
    const footerText = screen.getByText(/© 2024 Patent Due Diligence AI/i); // Match only the first part
    expect(footerText).toBeInTheDocument();
});
