import { Data } from '../types/data.ts';
import { Movie } from '../types/movie.ts';

const getRandomMovie = async (): Promise<Movie> => {
	const bytes = await Deno.readTextFile('./data/db.json');
	const dbJson: Data = JSON.parse(bytes);
	return dbJson.movies[Math.floor(Math.random() * dbJson.movies.length)];
};

export { getRandomMovie };
