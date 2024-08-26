import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the "toBeInTheDocument" matcher
import Home from '../app/page'; // Adjust path if necessary

describe('Home Page', () => {
  it('renders Navbar component', () => {
    render(<Home />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Assuming Navbar has a role="banner"
  });

  it('renders Hero component', () => {
    render(<Home />);
    expect(screen.getByTestId('hero')).toBeInTheDocument(); // Assuming Hero component has a data-testid="hero"
  });

  it('renders MainContent component', () => {
    render(<Home />);
    expect(screen.getByTestId('main-content')).toBeInTheDocument(); // Assuming MainContent component has a data-testid="main-content"
  });

  it('renders MinorContent component', () => {
    render(<Home />);
    expect(screen.getByTestId('minor-content')).toBeInTheDocument(); // Assuming MinorContent component has a data-testid="minor-content"
  });

  it('renders MinContent component', () => {
    render(<Home />);
    expect(screen.getByTestId('min-content')).toBeInTheDocument(); // Assuming MinContent component has a data-testid="min-content"
  });

  it('renders Footer component', () => {
    render(<Home />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Assuming Footer has a role="contentinfo"
  });
});
