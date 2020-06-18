import { Film } from '../providers/swapiProvider/interfaces/Film';

export enum FilmsActions {
	IMPORT_DATA = 'IMPORT FILMS DATA',
}

interface ImportData {
	type: FilmsActions.IMPORT_DATA;
	payload: Film[];
}

export type FilmsActionTypes = ImportData;

export const importFilmsData = (payload: Film[]): FilmsActionTypes => ({
	type: FilmsActions.IMPORT_DATA,
	payload,
});
