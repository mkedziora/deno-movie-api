import { Genre } from './genre.ts';

export type Movie = {
	id: number;
	title: string;
	year: string;
	runtime: string;
	genres: Genre[];
	director: string;
	actors: string;
	plot: string;
	posterUrl: string;
};
