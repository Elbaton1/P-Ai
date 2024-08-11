import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About'; // Make sure this path is correct

test('renders About component with specific text', () => {
    render(<About />);
    const aboutElement = screen.getByText(/About This Project/i);
    expect(aboutElement).toBeInTheDocument();
});
