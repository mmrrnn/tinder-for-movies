import { fireEvent, render, screen } from '@testing-library/react';

import MovieRating from '../MovieRating';

import movies from 'api/mockedMovies.json';
import { getMovieHeader } from '../utils';

const movie = movies[1];

describe('MovieRating', () => {
  const onAccept = jest.fn();
  const onReject = jest.fn();

  it('renders parsed header', () => {
    render(<MovieRating movie={movie} onAccept={onAccept} onReject={onReject} />);
  
    const expectedHeader = getMovieHeader(movie.title, movie.rating);
    expect(screen.getByText(expectedHeader)).toBeDefined();
  });

  it('triggers correct action on accept', () => {
    render(<MovieRating movie={movie} onAccept={onAccept} onReject={onReject} />);

    const acceptButton = screen.getByText('Accept');
    fireEvent.click(acceptButton)
    expect(onAccept).toHaveBeenCalled();
  })

  it('triggers correct action on reject', () => {
    render(<MovieRating movie={movie} onAccept={onAccept} onReject={onReject} />);

    const rejectButton = screen.getByText('Reject');
    fireEvent.click(rejectButton)
    expect(onReject).toHaveBeenCalled();
  })
});