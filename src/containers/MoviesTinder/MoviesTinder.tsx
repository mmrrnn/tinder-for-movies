import { useCallback, useContext, useEffect } from 'react';
import { Typography } from '@mui/material';

import { MoviesActions, MoviesStore } from 'stores/Movies';

import MovieRating from 'components/MovieRating';

const MoviesTinder = () => {
  const { currentMovie, dispatch } = useContext(MoviesStore);

  useEffect(() => {
    dispatch(MoviesActions.FETCH_MOVIES);
  }, []);

  const acceptMovie = useCallback(() => {
    dispatch(MoviesActions.ACCEPT_MOVIE)
  }, [dispatch]);

  const rejectMovie = useCallback(() => {
    dispatch(MoviesActions.ACCEPT_MOVIE)
  }, [dispatch]);

  return currentMovie ? (
    <MovieRating
      movie={currentMovie}
      onAccept={acceptMovie}
      onReject={rejectMovie}
    />
  ) : (
    <Typography variant="h3">There are no movies to rate!</Typography>
  )
}

export default MoviesTinder;
