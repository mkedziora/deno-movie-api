import { Genre, isGenre } from '../types/genre.ts';

const parseGenres = (genresParam: string): Genre[] => {
	if (!genresParam) return [];
	const genres = JSON.parse(genresParam) as string[];
	return genres.filter((genre) => isGenre(genre)) as Genre[];
};

export { parseGenres };
