import { getMovies, sendMovieRating } from 'api/moviesApi';

import MoviesActions from './MoviesActions';

import { MovieRate } from 'types/Movie';
import { MoviesStoreState } from './types';

let currentMovieIndex = 0;

const fetchMovies = async (state: MoviesStoreState) => {
  const newMovies = await getMovies();
  const newCurrentMovie = newMovies[currentMovieIndex] || null;
  currentMovieIndex = 0;

  return {
    ...state,
    movies: newMovies,
    currentMovie: newCurrentMovie
  }
}

const rateMovie = (state: MoviesStoreState, rate: MovieRate) => {
  if (!state.currentMovie) return state;

  sendMovieRating(state.currentMovie.id, rate);
  currentMovieIndex += 1;

  const newCurrentMovie = currentMovieIndex < state.movies.length ?
    state.movies[currentMovieIndex] : null;

  return {
    ...state,
    currentMovie: newCurrentMovie
  }
}

const moviesReducer = (state: MoviesStoreState, actionType: MoviesActions) => {
  switch (actionType) {
    case MoviesActions.FETCH_MOVIES:
      return fetchMovies(state);
    case MoviesActions.ACCEPT_MOVIE:
      return rateMovie(state, 'accept');
    case MoviesActions.REJECT_MOVIE:
      return rateMovie(state, 'reject');
    default:
      return state;
  }
}

export default moviesReducer;
