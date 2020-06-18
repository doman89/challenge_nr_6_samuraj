import { SpeciesActionTypes, SpeciesActions } from '../actions/speciesAction';
import { Species } from '../providers/swapiProvider/interfaces/Species';

const species: Species[] = [];

export const speciesReducer = ( state = species, action: SpeciesActionTypes): Species[] => {
	switch (action.type) {
		case SpeciesActions.IMPORT_DATA:
			return action.payload;

		default:
			return state;
	}
};