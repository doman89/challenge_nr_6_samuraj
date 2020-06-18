import React from 'react';
import { useParams, Link } from 'react-router-dom';
import bemCssModules from 'bem-css-modules';
import { useSelector } from 'react-redux';
import { default as CharatersStyles } from '../common/ListingStyles/Listing.module.scss';
import { RootState } from '../../reducers/rootReducer';
import { Character } from '../../helpers/Character';

const style = bemCssModules(CharatersStyles);

export const CharacterPage: React.FC = () => {
	const { name } = useParams();
	const state = useSelector((state: RootState) => state);
	const character = new Character(name, state);
	console.log(character);

	return (
		<article className={style()}>
			<h2 className={style('title')}>
				{`Name: ${character.name}`}
			</h2>
			<ul className={style('list')}>
				<p>Films:</p>
				{character.films.map(film => (
					<li className={style('list-element')} key={film}>
						<Link className={style('link')} to={`/films/${film}`} >
							{film}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Species:</p>
				{character.species.map(species => (
					<li className={style('list-element')} key={species}>
						<Link className={style('link')} to={`/species/${species}`} >
							{species}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Starships:</p>
				{character.starships.map(starship => (
					<li className={style('list-element')} key={starship}>
						<Link className={style('link')} to={`/starships/${starship}`} >
							{starship}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Vehicles:</p>
				{character.vehicles.map(vehicle => (
					<li className={style('list-element')} key={vehicle}>
						<Link className={style('link')} to={`/vehicles/${vehicle}`} >
							{vehicle}
						</Link>
					</li>
				))}
			</ul>
		</article>
	);
};