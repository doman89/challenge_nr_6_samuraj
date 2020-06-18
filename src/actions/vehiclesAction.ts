import { Vehicle } from '../providers/swapiProvider/interfaces/Vehicle';

export enum VehiclesActions {
	IMPORT_DATA = 'IMPORT VEHICLES DATA',
}

interface ImportData {
	type: VehiclesActions.IMPORT_DATA;
	payload: Vehicle[];
}

export type VehiclesActionTypes = ImportData;

export const importVehiclesData = (payload: Vehicle[]): VehiclesActionTypes => ({
	type: VehiclesActions.IMPORT_DATA,
	payload,
});
