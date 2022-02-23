import MoviesActions from './MoviesActions';

import { Movie } from 'types/Movie';

export type MoviesStoreData = {
  movies: Movie[];
  currentMovie: Movie | null;
  dispatch: MoviesStoreDispatcher;
}

export type MoviesStoreState = Omit<MoviesStoreData, 'dispatch'>;
export type MoviesStoreDispatcher = (actionType: MoviesActions) => void;
