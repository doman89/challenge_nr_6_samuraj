import { Common } from './Common';
import { RootState } from '../reducers/rootReducer';
import { Species as SpeciesResponse } from '../providers/swapiProvider/interfaces/Species';

export class Species extends Common {
	public readonly classification: string;
	public readonly name: string;
	public readonly designation: string;
	public readonly averageHeightInCm: number;
	public readonly averageLifespanInYears: number;
	public readonly eyeColors: string;
	public readonly hairColors: string;
	public readonly skinColors: string;
	public readonly language: string;
	public readonly homeworld: string;
	public readonly people: string[];
	public readonly films: string[];
	public readonly url: string;

	public constructor(name: string, store: RootState) {
		super();
		const speciesInfo = store.species.find(species => species.name === name) as SpeciesResponse;
		this.classification = speciesInfo.classification;
		this.name = speciesInfo.name;
		this.designation = speciesInfo.designation;
		this.averageHeightInCm = Number(speciesInfo.average_height);
		this.averageLifespanInYears = Number(speciesInfo.average_lifespan);
		this.eyeColors = speciesInfo.eye_colors;
		this.hairColors = speciesInfo.hair_colors;
		this.skinColors = speciesInfo.skin_colors;
		this.language = speciesInfo.language;
		this.homeworld = speciesInfo.homeworld;
		this.people = this.parseCharactersNames(speciesInfo.people, store.characters);
		this.films = this.parseFilmsTitles(speciesInfo.films, store.films);
		this.url = speciesInfo.url;
	}
}