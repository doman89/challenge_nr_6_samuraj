import { CharactersActionTypes, CharactersActions } from '../actions/charactersAction';
import { Person } from '../providers/swapiProvider/interfaces/Person';

const characters: Person[] = [];

export const charactersReducer = ( state = characters, action: CharactersActionTypes): Person[] => {
	switch (action.type) {
		case CharactersActions.IMPORT_DATA:
			return action.payload;

		default:
			return state;
	}
};