import { FilmsActionTypes, FilmsActions } from '../actions/filmsAction';
import { Film } from '../providers/swapiProvider/interfaces/Film';

const films: Film[] = [];

export const filmsReducer = ( state = films, action: FilmsActionTypes): Film[] => {
	switch (action.type) {
		case FilmsActions.IMPORT_DATA:
			return action.payload;

		default:
			return state;
	}
};