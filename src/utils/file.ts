import { Data } from '../types/data.ts';

export const getDataFromFile = async (): Promise<Data> => {
	const text = await Deno.readTextFile('./data/db.json');
	return JSON.parse(text);
};
