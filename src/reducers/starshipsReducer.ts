import { StarshipsActionTypes, StarshipsActions } from '../actions/starshipsAction';
import { Starship } from '../providers/swapiProvider/interfaces/Starship';

const starships: Starship[] = [];

export const starshipsReducer = ( state = starships, action: StarshipsActionTypes): Starship[] => {
	switch (action.type) {
		case StarshipsActions.IMPORT_DATA:
			return action.payload;

		default:
			return state;
	}
};