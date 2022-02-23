import {
  FC,
  createContext,
  useCallback,
  useState
} from 'react';

import moviesReducer from './MoviesReducer';
import {
  MoviesStoreData,
  MoviesStoreState,
  MoviesStoreDispatcher
} from './types';

export const MoviesStore = createContext<MoviesStoreData>({
  movies: [],
  currentMovie: null,
  dispatch: () => undefined
});

export const MoviesStoreProvider: FC = ({ children }) => {
  const [state, setState] = useState<MoviesStoreState>({
    movies: [],
    currentMovie: null
  });
 
  const dispatch: MoviesStoreDispatcher = useCallback(async (action) => {
    const nextState = await moviesReducer(state, action);

    setState(nextState);
  }, [state])

  return (
    <MoviesStore.Provider value={{ ...state, dispatch }}>
      {children}
    </MoviesStore.Provider>
  );
}
