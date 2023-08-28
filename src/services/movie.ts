import { Genre } from '../types/genre.ts';
import { Movie } from '../types/movie.ts';
import { getRandomItemFromArray } from '../utils/array.ts';
import { getDataFromFile } from '../utils/file.ts';

const getRandomMovie = async (): Promise<Movie> => {
	const db = await getDataFromFile();
	return getRandomItemFromArray(db.movies)!;
};

const getMovies = async (
	genres: Genre[],
	duration: number,
): Promise<Movie[]> => {
	const db = await getDataFromFile();
	const { movies } = db;
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

const postMovie = async (movie: Movie): Promise<Movie> => {
	const db = await getDataFromFile();
	const lastIndex = db.movies[db.movies.length - 1].id;
	if (!lastIndex) throw new Error('Invalid index');
	const movieToPost = {
		id: lastIndex + 1,
		...movie,
	};
	db.movies.push(movieToPost);
	await Deno.writeTextFile('./data/db.json', JSON.stringify(db));
	return movieToPost;
};

export { getMovies, getRandomMovie, postMovie };
