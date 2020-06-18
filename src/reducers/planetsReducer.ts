import { PlanetsActionTypes, PlanetsActions } from '../actions/planetsAction';
import { Planet } from '../providers/swapiProvider/interfaces/Planet';

const planets: Planet[] = [];

export const planetsReducer = ( state = planets, action: PlanetsActionTypes): Planet[] => {
	switch (action.type) {
		case PlanetsActions.IMPORT_DATA:
			return action.payload;

		default:
			return state;
	}
};