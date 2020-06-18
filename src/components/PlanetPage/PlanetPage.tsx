import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bemCssModules from 'bem-css-modules';
import { Planet } from '../../helpers/Planet';
import { RootState } from '../../reducers/rootReducer';
import ListingStyles from '../common/ListingStyles/Listing.module.scss';

const style = bemCssModules(ListingStyles);

export const PlanetPage: React.FC = () => {
	const { name } = useParams();
	const state = useSelector((state: RootState) => state);
	const planet = new Planet(name, state);

	return (
		<article className={style()}>
			<h2 className={style('title')}>
				{`Name: ${planet.name}`}
			</h2>
			<ul className={style('list')}>
				<p>Films:</p>
				{planet.films.map(film => (
					<li className={style('list-element')} key={film}>
						<Link className={style('link')} to={`/films/${film}`} >
							{film}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Residents:</p>
				{planet.residents.map(character => (
					<li className={style('list-element')} key={character}>
						<Link className={style('link')} to={`/characters/${character}`} >
							{character}
						</Link>
					</li>
				))}
			</ul>
		</article>
	);
};