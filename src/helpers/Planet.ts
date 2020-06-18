import { Common } from './Common';
import { RootState } from '../reducers/rootReducer';
import { Planet as IPlanet } from '../providers/swapiProvider/interfaces/Planet';

export class Planet extends Common {
	public readonly name: string;
	public readonly diameter: number;
	public readonly rotationPeriod: number;
	public readonly orbitalPeriod: number;
	public readonly gravity: number;
	public readonly population: number;
	public readonly climate: string;
	public readonly terrain: string;
	public readonly surfaceWater: number;
	public readonly residents: string[];
	public readonly films: string[];
	public readonly url: string;

	public constructor(name: string, store: RootState) {
		super();
		const planetInfo = store.planets.find(planet => planet.name === name) as IPlanet;

		this.name = planetInfo.name;
		this.diameter = Number(planetInfo.diameter);
		this.rotationPeriod = Number(planetInfo.rotation_period);
		this.orbitalPeriod = Number(planetInfo.orbital_period);
		this.gravity = Number(planetInfo.gravity);
		this.population = Number(planetInfo.population);
		this.climate = planetInfo.climate;
		this.terrain = planetInfo.terrain;
		this.surfaceWater = Number(planetInfo.surface_water);
		this.residents = this.parseCharactersNames(planetInfo.residents, store.characters);
		this.films= this.parseFilmsTitles(planetInfo.films, store.films);
		this.url = planetInfo.url;
	}
}