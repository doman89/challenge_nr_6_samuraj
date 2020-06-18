import { Species } from '../providers/swapiProvider/interfaces/Species';

export enum SpeciesActions {
	IMPORT_DATA = 'IMPORT SPECIES DATA',
}

interface ImportData {
	type: SpeciesActions.IMPORT_DATA;
	payload: Species[];
}

export type SpeciesActionTypes = ImportData;

export const importSpeciesData = (payload: Species[]): SpeciesActionTypes => ({
	type: SpeciesActions.IMPORT_DATA,
	payload,
});
