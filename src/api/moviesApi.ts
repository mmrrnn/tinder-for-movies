import { Movie, MovieRate } from '../types/Movie'
import movies from './mockedMovies.json';

export const getMovies = (): Promise<Movie[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate fetching movies
      resolve(movies)
    }, 10);
  });
}

export const sendMovieRating = async (movieId: string, movieRate: MovieRate): Promise<void> => {
    try {
      await fetch(`/recommendations/${movieId}/${movieRate}`, {
        method: 'PUT'
      });
    } catch (e) {
      console.error(`Error when sending movie rating `, e)
    }
}