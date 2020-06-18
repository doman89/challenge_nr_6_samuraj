import { VehiclesActionTypes, VehiclesActions } from '../actions/vehiclesAction';
import { Vehicle } from '../providers/swapiProvider/interfaces/Vehicle';

const vehicles: Vehicle[] = [];

export const vehiclesReducer = ( state = vehicles, action: VehiclesActionTypes): Vehicle[] => {
	switch (action.type) {
		case VehiclesActions.IMPORT_DATA:
			return action.payload;

		default:
			return state;
	}
};