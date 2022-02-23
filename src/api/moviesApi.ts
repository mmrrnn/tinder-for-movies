import { Movie } from "../types/Movie"
import movies from './mockedMovies.json';

export const fetchMovies = (): Promise<Movie[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate fetching movies
      resolve(movies)
    }, 10);
  });
}

export const sendMovieRating = async (movieId: string, ratingResult: boolean): Promise<void> => {
    try {
      const movieVerdict = ratingResult ? 'accept' : 'reject';

      await fetch(`/recommendations/${movieId}/${movieVerdict}`, {
        method: 'PUT'
      });
    } catch (e) {
      console.error(`Error when sending movie rating `, e)
    }
}