import axios, { AxiosInstance } from 'axios';
import { Film } from './interfaces/Film';
import { Person } from './interfaces/Person';
import { Planet } from './interfaces/Planet';
import { Response } from './interfaces/Response';
import { Species } from './interfaces/Species';
import { Starship } from './interfaces/Starship';
import { Vehicle } from './interfaces/Vehicle';

export class SWAPIClient {
	private readonly CHARACTER_ENDPOINT = '/people/';
	private readonly FILMS_ENDPOINT = '/films/';
	private readonly PLANETS_ENDPOINT = '/planets/';
	private readonly SPECIES_ENDPOINT = '/species/';
	private readonly STARSHIPS_ENDPOINT = '/starships/';
	private readonly VEHICLES_ENDPOINT = '/vehicles/';

	private readonly request: AxiosInstance;

	public constructor(baseURL: string) {
		this.request = axios.create({baseURL});
	}

	/**
	 * Method get from API all characters from Star Wars Saga
	 * @returns Person[]
	 */
	public async getCharacters(): Promise<Person[]> {
		return this.getAllElements(this.CHARACTER_ENDPOINT);
	}

	/**
	 * Method get from API chunk 10 characters from Star Wars Saga
	 * @param chunkNumber number of chunk it contain ie. characters from 0-9 for 1 value
	 * @returns Peron[]
	 */
	public async getCharactersChunk(chunkNumber = 1): Promise<Person[]> {
		return this.getChunkElements(chunkNumber, this.CHARACTER_ENDPOINT);
	}

	public async getCharacterById(id: number): Promise<Person | null> {
		return this.getElementById(id, this.CHARACTER_ENDPOINT);
	}

	public async getFilms(): Promise<Film[]> {
		return this.getAllElements(this.FILMS_ENDPOINT);
	}

	public async getFilmsChunk(chunkNumber = 1): Promise<Film[]> {
		return this.getChunkElements(chunkNumber, this.FILMS_ENDPOINT);
	}

	public async getFilmById(id: number): Promise<Film | null> {
		return this.getElementById(id, this.FILMS_ENDPOINT);
	}

	public async getPlanets(): Promise<Planet[]> {
		return this.getAllElements(this.PLANETS_ENDPOINT);
	}

	public async getPlanetsChunk(chunkNumber = 1): Promise<Planet[]> {
		return this.getChunkElements(chunkNumber, this.PLANETS_ENDPOINT);
	}

	public async getPlanetById(id: number): Promise<Planet | null> {
		return this.getElementById(id, this.PLANETS_ENDPOINT);
	}

	public async getSpecies(): Promise<Species[]> {
		return this.getAllElements(this.SPECIES_ENDPOINT);
	}

	public async getSpeciesChunk(chunkNumber = 1): Promise<Species[]> {
		return this.getChunkElements(chunkNumber, this.SPECIES_ENDPOINT);
	}

	public async getSpeciesById(id: number): Promise<Species | null> {
		return this.getElementById(id, this.SPECIES_ENDPOINT);
	}

	public async getStarships(): Promise<Starship[]> {
		return this.getAllElements(this.STARSHIPS_ENDPOINT);
	}

	public async getStarshipsChunk(chunkNumber = 1): Promise<Starship[]> {
		return this.getChunkElements(chunkNumber, this.STARSHIPS_ENDPOINT);
	}

	public async getStarshipsById(id: number): Promise<Starship | null> {
		return this.getElementById(id, this.STARSHIPS_ENDPOINT);
	}

	public async getVehicles(): Promise<Vehicle[]> {
		return this.getAllElements(this.VEHICLES_ENDPOINT);
	}

	public async getVehiclesChunk(chunkNumber = 1): Promise<Vehicle[]> {
		return this.getChunkElements(chunkNumber, this.VEHICLES_ENDPOINT);
	}

	public async getVehicleById(id: number): Promise<Vehicle | null> {
		return this.getElementById(id, this.VEHICLES_ENDPOINT);
	}

	private async getAllElements<T>(endpoint: string): Promise<T[]> {
		try {
			const data: T[] = [];
			let counter = 1;
			let respone: Response<T>;

			do {
				respone = (await this.request.get(`${endpoint}?page=${counter++}`)).data;
				data.push(...respone.results);
			} while (respone.next);

			return data;
		} catch {
			return [];
		}
	}

	private async getChunkElements<T>(chunkNumber: number, endpoint: string): Promise<T[]> {
		try {
			const response = (await this.request.get(`${endpoint}}?page=${chunkNumber}`)).data;

			return response;
		} catch {
			return [];
		}
	}

	private async getElementById<T>(id: number, endpoint: string): Promise<T | null> {
		try {
			const response = (await this.request.get(`${endpoint}${id}/`)).data;

			return response;
		} catch {
			return null;
		}
	}
}