import { Person } from '../providers/swapiProvider/interfaces/Person';

export enum CharactersActions {
	IMPORT_DATA = 'IMPORT CHARACTERS DATA',
}

interface ImportData {
	type: CharactersActions.IMPORT_DATA;
	payload: Person[];
}

export type CharactersActionTypes = ImportData;

export const importCharactersData = (payload: Person[]): CharactersActionTypes => ({
	type: CharactersActions.IMPORT_DATA,
	payload,
});
