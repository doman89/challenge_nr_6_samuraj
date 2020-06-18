import { Starship } from '../providers/swapiProvider/interfaces/Starship';

export enum StarshipsActions {
	IMPORT_DATA = 'IMPORT STARSHIPS DATA',
}

interface ImportData {
	type: StarshipsActions.IMPORT_DATA;
	payload: Starship[];
}

export type StarshipsActionTypes = ImportData;

export const importStarshipsData = (payload: Starship[]): StarshipsActionTypes => ({
	type: StarshipsActions.IMPORT_DATA,
	payload,
});