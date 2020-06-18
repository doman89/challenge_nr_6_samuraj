import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bemCssModules from 'bem-css-modules';
import { RootState } from '../../reducers/rootReducer';
import { Film } from '../../helpers/Film';
import { default as ListingStyles } from '../common/ListingStyles/Listing.module.scss';

const style = bemCssModules(ListingStyles);

export const FilmPage: React.FC = () => {
	const { title } = useParams();
	const state = useSelector((state: RootState) => state);
	const film = new Film(title, state);
	console.log(film);

	return (
		<article className={style()}>
			<h2 className={style('title')}>
				{`Title: ${film.title}`}
			</h2>
			<ul className={style('list')}>
				<p>Characters:</p>
				{film.characters.map(character => (
					<li className={style('list-element')} key={character}>
						<Link className={style('link')} to={`/characters/${character}`} >
							{character}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Species:</p>
				{film.species.map(species => (
					<li className={style('list-element')} key={species}>
						<Link className={style('link')} to={`/species/${species}`} >
							{species}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Starships:</p>
				{film.starships.map(starship => (
					<li className={style('list-element')} key={starship}>
						<Link className={style('link')} to={`/starships/${starship}`} >
							{starship}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Vehicles:</p>
				{film.vehicles.map(vehicle => (
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