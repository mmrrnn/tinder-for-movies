import { Movie } from 'types/Movie';


export type MovieStoreData = {
  movies: Movie[];
  currentMovie: Movie | null;
  updateStore: MovieStoreSetter;
}

export type MovieStoreProperties = Omit<MovieStoreData, 'updateStore'>;
export type MovieStoreSetter = (property: Partial<MovieStoreProperties>) => void;