import { maxRating } from 'consts';

import { getMovieHeader } from '../utils';

describe('MovieRating utils', () => {
  it('getMovieHeader properly', () => {
    const title = 'Example Title';
    const rating = 5.9;

    expect(getMovieHeader(title, rating)).toBe(`${title} (${rating}/${maxRating})`)
  });
});