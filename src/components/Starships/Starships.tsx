import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { default as bemCssModules } from 'bem-css-modules';
import { RootState } from '../../reducers/rootReducer';
import { default as ListingStyles } from '../common/ListingStyles/Listing.module.scss';

const style = bemCssModules(ListingStyles);

export const Starships: React.FC = () => {
	const starships = useSelector((state: RootState) => state.starships);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	starships.sort((a, b) => a.name > b.name ? 1 : -1);

	return (
		<nav className={style()}>
			<p className={style('title')}>Starships in SW universe:</p>
			<ul className={style('list')}>
				{starships.map(starship => (
					<li className={style('list-element')} key={starship.name}>
						<Link className={style('link')} to={`/starships/${starship.name}`}>
							{starship.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};