/* eslint-disable @typescript-eslint/naming-convention */
import { request } from './../helpers/request';
import { Character } from '../actions/charactersAction';

interface Response {
	count: number; 
    next: string | null;
    previous: string | null; 
    results: Character[];
}

export const getCharacters = async (): Promise<Character[]> => {
	const characters: Character[] = [];
	let counter = 1;
	let respone: Response;

	try {
		do {
			respone = (await request.get(`/people/?page=${counter++}`)).data;
			characters.push(...respone.results);
		} while (respone.next);
	} catch {
		characters.splice(0, characters.length);
	}

	return characters;
};
