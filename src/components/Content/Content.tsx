import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { useDispatch } from 'react-redux';
import { CharacterPage } from '../CharacterPage/CharacterPage';
import { FilmPage } from '../FilmPage/FilmPage';
import { PlanetPage } from '../PlanetPage/PlanetPage';
import { SpeciesPage } from '../SpeciesPage/SpeciesPage';
import { StarshipPage } from '../StarshipPage/StarshipPage';
import { VehiclePage } from '../VehiclePage/VehiclePage';
import { Welcome } from '../Welcome/Welcome';
import { Characters } from '../Characters/Characters';
import { Films } from '../Films/Films';
import { Planets } from '../Planets/Planets';
import { Species } from '../Species/Species';
import { Starships } from '../Starships/Starships';
import { Vehicles } from '../Vehicles/Vehicles';
import { importCharactersData } from '../../actions/charactersAction';
import { importFilmsData } from '../../actions/filmsAction';
import { importPlanetsData } from '../../actions/planetsAction';
import { importSpeciesData } from '../../actions/speciesAction';
import { importStarshipsData } from '../../actions/starshipsAction';
import { importVehiclesData } from '../../actions/vehiclesAction';
import { useSWAPIClient } from '../../hooks/useSWAPIClient';
import { default as ContentStyles } from './Content.module.scss';

const style = bemCssModules(ContentStyles);

export const Content: React.FC = () => {
	const client = useSWAPIClient();
	const dispatch = useDispatch();

	const importDataForAPI = async (): Promise<void> => {
		const [
			characters,
			films, 
			planets,
			species,
			starships,
			vehicles
		] = await Promise.all([
			client.getCharacters(),
			client.getFilms(),
			client.getPlanets(),
			client.getSpecies(),
			client.getStarships(),
			client.getVehicles(),
		]);

		dispatch(importCharactersData(characters));
		dispatch(importFilmsData(films));
		dispatch(importPlanetsData(planets));
		dispatch(importSpeciesData(species));
		dispatch(importStarshipsData(starships));
		dispatch(importVehiclesData(vehicles));
	};

	useEffect(
		() => {
			void importDataForAPI();
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []
	);

	return (
		<section className={style()}>
			<Switch>
				<Route component={FilmPage} path="/films/:title" />
				<Route component={Films} path="/films" />
				<Route component={StarshipPage} path="/starships/:name" />
				<Route component={Starships} path="/starships" />
				<Route component={VehiclePage} path="/vehicles/:name" />
				<Route component={Vehicles} path="/vehicles" />
				<Route component={SpeciesPage} path="/species/:name" />
				<Route component={Species} path="/species" />
				<Route component={PlanetPage} path="/planets/:name" />
				<Route component={Planets} path="/planets" />
				<Route component={CharacterPage} path="/characters/:name" /> 
				<Route component={Characters} path="/characters" />
				<Route component={Welcome} path="/" />
				<Redirect to="/" />
			</Switch>
		</section>
	);
};
