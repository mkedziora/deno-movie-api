const Genre = [
	'Comedy',
	'Fantasy',
	'Crime',
	'Drama',
	'Music',
	'Adventure',
	'History',
	'Thriller',
	'Animation',
	'Family',
	'Mystery',
	'Biography',
	'Action',
	'Film-Noir',
	'Romance',
	'Sci-Fi',
	'War',
	'Western',
	'Horror',
	'Musical',
	'Sport',
] as const;
type Genre = typeof Genre[number];

const isGenre = (a: unknown): a is Genre => {
	return Genre.indexOf(a as Genre) != -1;
};

export { Genre, isGenre };
