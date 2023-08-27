import { getMovies, getRandomMovie } from '../services/movie.ts';
import { parseGenres } from '../utils/params.ts';

const getMovieController = async (req, res, next) => {
	try {
		let { genres, duration } = req.query;
		genres = parseGenres(genres);
		duration = Number(duration);
		if (!genres.length && !duration) {
			res.json(await getRandomMovie());
		} else {
			res.json(await getMovies(genres, duration));
		}
	} catch (err) {
		console.error('Error while getting movie', err.message);
		next(err);
	}
};

export { getMovieController };
