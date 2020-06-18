import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { default as bemCssModules } from 'bem-css-modules';
import { RootState } from '../../reducers/rootReducer';
import { default as ListingStyles } from '../common/ListingStyles/Listing.module.scss';

const style = bemCssModules(ListingStyles);

export const Planets: React.FC = () => {
	const planets = useSelector((state: RootState) => state.planets);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	planets.sort((a, b) => a.name > b.name ? 1 : -1);

	return (
		<nav className={style()}>
			<p className={style('title')}>Planets in SW universe:</p>
			<ul className={style('list')}>
				{planets.map(planet => (
					<li className={style('list-element')} key={planet.name}>
						<Link className={style('link')} to={`/planets/${planet.name}`}>
							{planet.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};