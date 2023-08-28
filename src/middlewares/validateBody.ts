import { body } from 'npm:express-validator@^7.0.1';
import { isGenre } from '../types/genre.ts';

export const validateBody = [
	body('title')
		.exists()
		.withMessage('Title is required')
		.isString()
		.withMessage('Title should be string')
		.custom((value) => {
			if (value?.length > 255) {
				return Promise.reject('Title should be max 255 characters');
			} else {
				return true;
			}
		}),
	body('year')
		.exists()
		.withMessage('Year is required')
		.isNumeric()
		.withMessage('Year should be number'),
	body('runtime')
		.exists()
		.withMessage('Runtime is required')
		.isNumeric()
		.withMessage('Runtime should be number'),
	body('genres')
		.exists()
		.withMessage('Genres is required')
		.isArray()
		.withMessage('Genres should be array')
		.custom((genres) => {
			for (const gen of genres) {
				if (!isGenre(gen)) {
					return Promise.reject(`Genre ${gen} is not valid`);
				}
			}
			return true;
		}),
	body('director')
		.exists()
		.withMessage('Director is required')
		.isString()
		.withMessage('Director should be string')
		.custom((value) => {
			if (value?.length > 255) {
				return Promise.reject('Director should be max 255 characters');
			} else {
				return true;
			}
		}),
	body('actors')
		.optional()
		.isString()
		.withMessage('Actors should be string'),
	body('plot')
		.optional()
		.isString()
		.withMessage('Plot should be string'),
	body('posterUrl')
		.optional()
		.isString()
		.withMessage('Poster URL should be string'),
];
