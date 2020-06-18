import { Planet } from '../providers/swapiProvider/interfaces/Planet';

export enum PlanetsActions {
	IMPORT_DATA = 'IMPORT PLANETS DATA',
}

interface ImportData {
	type: PlanetsActions.IMPORT_DATA;
	payload: Planet[];
}

export type PlanetsActionTypes = ImportData;

export const importPlanetsData = (payload: Planet[]): PlanetsActionTypes => ({
	type: PlanetsActions.IMPORT_DATA,
	payload,
});
