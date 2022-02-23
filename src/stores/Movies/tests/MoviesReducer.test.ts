import MoviesActions from '../MoviesActions';
import moviesReducer from '../MoviesReducer';

import * as api from 'api/moviesApi';
import movies from 'api/mockedMovies.json';

jest.spyOn(api, 'sendMovieRating');

let currentMovieIndex = 0;

describe('Movie reducer', () => {
  it('fetches movies', async () => {
    const state = { movies: [], currentMovie: null };
    const newState = await moviesReducer(state, MoviesActions.FETCH_MOVIES);

    expect(newState).toEqual({
      movies,
      currentMovie: movies[currentMovieIndex]
    });
  });

  it('accepts movie', async () => {
    const currentMovie = movies[currentMovieIndex];
    const state = { movies, currentMovie };
    const newState = await moviesReducer(state, MoviesActions.ACCEPT_MOVIE);
    currentMovieIndex += 1;

    expect(api.sendMovieRating).toHaveBeenCalledWith(currentMovie.id, 'accept');
    expect(newState).toEqual({
      movies,
      currentMovie: movies[currentMovieIndex]
    })
  });

  it('rejects movie', async () => {
    const currentMovie = movies[currentMovieIndex];
    const state = { movies, currentMovie };
    const newState = await moviesReducer(state, MoviesActions.REJECT_MOVIE);
    currentMovieIndex += 1;

    expect(api.sendMovieRating).toHaveBeenCalledWith(currentMovie.id, 'reject');
    expect(newState).toEqual({
      movies,
      currentMovie: movies[currentMovieIndex]
    })
  });

  it('returns unmodified state when unknown action', async () => {
    const currentMovie = movies[currentMovieIndex];
    const state = { movies, currentMovie };
    // @ts-ignore
    const newState = await moviesReducer(state, 'wrongAction');
    
    expect(newState).toEqual(state);
  });
});