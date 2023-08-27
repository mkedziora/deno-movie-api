import { Data } from '../types/data.ts';
import { Genre } from '../types/genre.ts';
import { Movie } from '../types/movie.ts';
import { getRandomItemFromArray } from '../utils/array.ts';

const getRandomMovie = async (): Promise<Movie> => {
	const bytes = await Deno.readTextFile('./data/db.json');
	const dbJson: Data = JSON.parse(bytes);
	return getRandomItemFromArray(dbJson.movies)!;
};

const getMovies = async (
	genres: Genre[],
	duration: number,
): Promise<Movie[]> => {
	const bytes = await Deno.readTextFile('./data/db.json');
	const dbJson: Data = JSON.parse(bytes);
	const { movies } = dbJson;
	let result = movies;
	if (duration) {
		result = result
			.filter((movie) =>
				Number(movie.runtime) > duration - 10 &&
				Number(movie.runtime) < duration + 10
			);
		if (!genres.length) {
			return [getRandomItemFromArray(result)!];
		}
	}
	if (genres.length) {
		result = result
			.filter((movie) => {
				let isGenrePresent = false;
				for (const genre of genres) {
					if (movie.genres.includes(genre)) {
						isGenrePresent = true;
						continue;
					}
				}
				return isGenrePresent;
			});
	}
	return result;
};

export { getMovies, getRandomMovie };
