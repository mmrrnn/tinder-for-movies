import { maxRating } from 'consts';

export const getMovieHeader = (title: string, rating?: number) => {
  return rating ? `${title} (${rating}/${maxRating})` : title;
}
