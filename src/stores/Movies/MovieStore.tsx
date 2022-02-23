import { FC, createContext, useCallback, useState } from 'react';
import {
  MovieStoreData,
  MovieStoreProperties,
  MovieStoreSetter
} from './types';

export const MovieStore = createContext<MovieStoreData>({
  movies: [],
  currentMovie: null,
  updateStore: () => undefined
});

export const MovieStoreProvider: FC = ({ children }) => {
  const [state, setState] = useState<MovieStoreProperties>({
    movies: [],
    currentMovie: null
  });

  const updateStore: MovieStoreSetter = useCallback(
    (updatedProps) => setState({ ...state, ...updatedProps }),
    [state]
  );

  return (
    <MovieStore.Provider value={{ ...state, updateStore }}>
      {children}
    </MovieStore.Provider>
  );
}
