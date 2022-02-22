import { render, screen } from '@testing-library/react';

import SwipeableImage from '../SwipeableImage';

import mockedMovies from 'api/mockedMovies.json'

const movie = mockedMovies[0];

describe('SwipeableImage', () => {
  it('renders image with correct props', () => {
    render(<SwipeableImage src={movie.imageUrl} alt={movie.title} />);
    const imgToBeTested = screen.getByRole('img');
  
    expect(imgToBeTested).toBeDefined();
    expect(imgToBeTested).toHaveAttribute('src', movie.imageUrl);
    expect(imgToBeTested).toHaveAttribute('alt', movie.title);
  });
});