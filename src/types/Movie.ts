export type Movie = {
  id: string;
  title: string;
  summary: string;
  rating: number;
  imageUrl: string;
}

export type MovieRate = 'accept' | 'reject';
