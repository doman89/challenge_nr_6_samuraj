import { Character, CharactersActionTypes, CharactersActions } from '../actions/charactersAction';

const characters: Map<string, Character[]> = new Map();

export const charactersReducer = ( state = characters, action: CharactersActionTypes): Map<string, Character[]> => {
	switch (action.type) {
		case CharactersActions.IMPORT_DATA:
			return action.payload;

		default:
			return state;
	}
};