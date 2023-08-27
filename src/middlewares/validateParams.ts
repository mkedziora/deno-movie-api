import { parseGenres } from '../utils/params.ts';

export const validateParams = (req, res, next) => {
	const { genres, duration } = req.query;
	if (duration) {
		if (isNaN(duration)) {
			res.status(400).send(
				'Duration parameter is invalid. Expected a number',
			);
		}
	}
	if (genres) {
		try {
			const parsed = parseGenres(genres);
			if (!parsed.length) {
				res.status(400).send(
					`Genres parameter is invalid. Expected a genre array. Ex. ["Comedy", "Horror"]`,
				);
			}
		} catch {
			res.status(400).send(
				`Genres parameter is invalid. Expected a genre array. Ex. ["Comedy", "Horror"]`,
			);
		}
	}
	next();
};
