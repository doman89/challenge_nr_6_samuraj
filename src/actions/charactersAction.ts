/* eslint-disable @typescript-eslint/naming-convention */
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers/rootReducer';
import { getCharacters } from '../providers/charactersProvider';

export enum CharactersActions {
	IMPORT_DATA = 'IMPORT DATA',
}

export interface Character {
	name: string;
	birth_year: string;
	eye_color: string;
	gender: string;
	hair_color: string;
	height: string;
	mass: string;
}

interface ImportData {
	type: CharactersActions.IMPORT_DATA;
	payload: Map<string, Character[]>;
}

export type CharactersActionTypes = ImportData;
export type AppThunk<ReturnType = void> = ThunkAction <
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

const importCharactersFromServer = (payload: Map<string, Character[]>): CharactersActionTypes => ({
	type: CharactersActions.IMPORT_DATA,
	payload,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getDataFromServer = (): AppThunk => async dispatch => {
	const characterArray = await getCharacters();
	const characterMap: Map<string, Character[]> = new Map();

	characterArray
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		.sort((a, b) => a.name > b.name ? 1 : -1)
		.forEach(character => {
			let [letter] = character.name;

			letter = letter.toLocaleUpperCase();
			if (characterMap.has(letter)) {
				characterMap.get(letter)?.push(character);
			} else {
				characterMap.set(letter, [character]);
			}
		});

	dispatch(importCharactersFromServer(characterMap));
};
