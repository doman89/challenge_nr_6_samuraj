import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bemCssModules from 'bem-css-modules';
import { RootState } from '../../reducers/rootReducer';
import { Starship } from '../../helpers/Starship';
import ListingStyles from '../common/ListingStyles/Listing.module.scss';

const style = bemCssModules(ListingStyles);

export const StarshipPage: React.FC = () => {
	const { name } = useParams();
	const state = useSelector((state: RootState) => state);
	const starship = new Starship(name, state);

	return (
		<article className={style()}>
			<h2 className={style('title')}>
				{`Name: ${starship.name}`}
			</h2>
			<ul className={style('list')}>
				<p>Films:</p>
				{starship.films.map(film => (
					<li className={style('list-element')} key={film}>
						<Link className={style('link')} to={`/film/${film}`} >
							{film}
						</Link>
					</li>
				))}
			</ul>
			<ul className={style('list')}>
				<p>Pilots:</p>
				{starship.pilots.map(pilot => (
					<li className={style('list-element')} key={pilot}>
						<Link className={style('link')} to={`/characters/${pilot}`} >
							{pilot}
						</Link>
					</li>
				))}
			</ul>
		</article>
	);
};