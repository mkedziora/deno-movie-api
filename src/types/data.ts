import { Genre } from './genre.ts';
import { Movie } from './movie.ts';

export type Data = {
	movies: Movie[];
	genres: Genre[];
};
