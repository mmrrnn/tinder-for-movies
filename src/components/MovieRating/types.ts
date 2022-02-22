import { Movie } from 'types/Movie';

export type MovieRatingProps = {
  movie: Movie;
  onAccept: VoidFunction;
  onReject: VoidFunction;
}