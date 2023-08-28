import { validationResult } from 'npm:express-validator@^7.0.1';
import { getMovies, getRandomMovie, postMovie } from '../services/movie.ts';
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

const postMovieController = async (req, res, next) => {
	try {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}
		res.status(201).json(await postMovie(req.body));
	} catch (err) {
		console.error('Error while posting movie', err.message);
		next(err);
	}
};

export { getMovieController, postMovieController };
