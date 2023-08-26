import { getRandomMovie } from '../services/movie.ts';

const getMovieController = async (req, res, next) => {
	try {
		const { genres, duration } = req.query;
		if (!genres && !duration) {
			res.json(await getRandomMovie());
		} else {
            res.json({}) //TODO
        }
	} catch (err) {
		console.error('Error while getting movie', err.message);
		next(err);
	}
};

export { getMovieController };
